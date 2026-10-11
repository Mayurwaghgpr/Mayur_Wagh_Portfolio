import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import axiosInstance from "../utils/axiosInstance";
import type { ProjectType } from "commons_in_portfolio";
import CardSkeleton from "../components/CardSkeleton";
import { GrProjects } from "react-icons/gr";

// Verified baseline projects adhering strictly to ProjectType schema
const fallbackProjects: ProjectType[] = [
  {
    title: "Spread",
    description:
      "A full-stack publishing and engineering community platform built with React, Node.js, and PostgreSQL. Features OAuth authentication, real-time messaging, notification pipelines via WebSockets, and AI-assisted post analytics with Google Gemini.",
    images: [
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1761129420/My_Projects/ra2vjtcxbvtsmt7pzyki.png",
        public_id: "spread-1",
      },
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1761129419/My_Projects/guwturibsjv7bgcn32rt.png",
        public_id: "spread-2",
      },
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1761129420/My_Projects/fsntqjx6mgpy1hvaxuum.png",
        public_id: "spread-3",
      },
    ],
    links: [
      { linkName: "liveLink", url: "https://spread-one.vercel.app/" },
      { linkName: "github", url: "https://github.com/Mayurwaghgpr/Spread" },
    ],
    technologies: [
      { technology: "reactjs", displayName: "React" },
      { technology: "nodejs", displayName: "Node.js" },
      { technology: "postgresql", displayName: "PostgreSQL" },
      { technology: "socketio", displayName: "Socket.io" },
      { technology: "geminiAi", displayName: "Gemini AI" },
      { technology: "tailwind", displayName: "Tailwind CSS" },
      { technology: "reactq", displayName: "React Query" },
      { technology: "redux", displayName: "Redux" },
    ],
    isDeleted: false,
    githubStatus: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    title: "Real Estate CRM",
    description:
      "Enterprise CRM solution tailored for real estate brokerages with multi-tenant lead generation, bulk CSV pipeline ingestion, dynamic Kanban deal boards, property portfolio tracking, and customer interaction histories.",
    images: [
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1761145722/My_Projects/wnwcbe113njv0d45ba66.png",
        public_id: "crm-1",
      },
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1761145722/My_Projects/hmnazjwr91n9l7key2jq.png",
        public_id: "crm-2",
      },
    ],
    links: [
      { linkName: "liveLink", url: "https://real-estate-crm-sable.vercel.app/" },
      { linkName: "github", url: "https://github.com/Mayurwaghgpr/Real-Estate-CRM" },
    ],
    technologies: [
      { technology: "reactjs", displayName: "React" },
      { technology: "nodejs", displayName: "Node.js" },
      { technology: "express", displayName: "Express.js" },
      { technology: "mongodb", displayName: "MongoDB" },
      { technology: "jwt", displayName: "JWT Auth" },
      { technology: "tailwind", displayName: "Tailwind CSS" },
    ],
    isDeleted: false,
    githubStatus: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
  },
  {
    title: "LMS — Dunamis Music Learning",
    description:
      "A modern LMS platform built during internship for professional music artists and academies. Encompasses student cohort management, video lesson streaming, role-based authentication, and automated notifications.",
    images: [
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1762157687/My_Projects/mefymecwb6gglenv0lxe.png",
        public_id: "lms-1",
      },
      {
        url: "https://res.cloudinary.com/dbvzzwgap/image/upload/v1762157685/My_Projects/yonh1xl4jjabcrvtw66a.png",
        public_id: "lms-2",
      },
    ],
    links: [
      { linkName: "liveLink", url: "https://dunamis-lms-website.netlify.app/" },
    ],
    technologies: [
      { technology: "nextjs", displayName: "Next.js" },
      { technology: "reactjs", displayName: "React.js" },
      { technology: "nodejs", displayName: "Node.js" },
      { technology: "mongodb", displayName: "MongoDB" },
      { technology: "redux", displayName: "Zustand" },
      { technology: "tailwind", displayName: "Tailwind CSS" },
    ],
    isDeleted: false,
  },
  {
    title: "DSA Checklist & Tracker",
    description:
      "Progress-tracking dashboard for algorithms and data structures. Solvers can categorize problem solutions by topic, difficulty rating, and revisit schedules with local synchronization.",
    images: [],
    links: [
      { linkName: "liveLink", url: "https://checkds.vercel.app/" },
      { linkName: "github", url: "https://github.com/Mayurwaghgpr/DSA_checklist" },
    ],
    technologies: [
      { technology: "reactjs", displayName: "React" },
      { technology: "typescript", displayName: "TypeScript" },
      { technology: "tailwind", displayName: "Tailwind CSS" },
      { technology: "vercel", displayName: "Vercel" },
    ],
    isDeleted: false,
    githubStatus: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45),
  },
];

type ProjectCategory = "All" | "Full Stack" | "Backend" | "Frontend";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const {
    data: remoteProjects,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<ProjectType[]> => {
      try {
        const res = await axiosInstance.get<{ data: ProjectType[] }>("/my-projects/all");
        if (res?.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
          return res.data.data;
        }
        return fallbackProjects;
      } catch {
        return fallbackProjects;
      }
    },
    staleTime: 1000 * 60 * 5,
  });

  const displayProjects = useMemo(() => {
    const list = remoteProjects && remoteProjects.length > 0 ? remoteProjects : fallbackProjects;
    if (selectedCategory === "All") return list;

    return list.filter((p) => {
      const techNames = p.technologies?.map((t) => (typeof t.technology === "string" ? t.technology.toLowerCase() : "")) || [];
      if (selectedCategory === "Backend") {
        return techNames.includes("nodejs") || techNames.includes("express") || techNames.includes("postgresql") || techNames.includes("mongodb");
      }
      if (selectedCategory === "Frontend") {
        return techNames.includes("reactjs") || techNames.includes("nextjs") || techNames.includes("typescript");
      }
      if (selectedCategory === "Full Stack") {
        return (techNames.includes("reactjs") || techNames.includes("nextjs")) && (techNames.includes("nodejs") || techNames.includes("express"));
      }
      return true;
    });
  }, [remoteProjects, selectedCategory]);

  const categories: ProjectCategory[] = ["All", "Full Stack", "Backend", "Frontend"];

  return (
    <section id="projects" className="relative w-full py-12 md:py-16 scroll-mt-20">
      <div className="space-y-10">
        
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Heading badge="Portfolio Showcase">
              <span className="flex items-center gap-2.5">
                <GrProjects className="text-zinc-700 dark:text-zinc-300 text-2xl sm:text-3xl" />
                <span>Featured Engineering Projects</span>
              </span>
            </Heading>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Architected and shipped web applications, distributed APIs, and developer platforms solving real operational problems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Smooth Fade on Filter Change */}
        <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch animate-fade-in">
          {isLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            displayProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}

export default Projects;
