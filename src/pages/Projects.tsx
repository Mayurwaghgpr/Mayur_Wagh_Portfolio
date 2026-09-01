import { useQuery } from "@tanstack/react-query";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import axiosInstance from "../utils/axiosInstance";
import type { ProjectType } from "commons_in_portfolio";
import CardSkeleton from "../components/CardSkeleton";
import Discription from "../components/Discription";
import { GrProjects } from "react-icons/gr";
function Projects() {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<ProjectType[]> => {
      const res = await axiosInstance.get<{ data: ProjectType[] }>(
        "/my-projects/all"
      );
      return res?.data?.data;
    },
  });

  // Sample project data - replace with your actual projects
  // const ProjectsDetails: Project[] = [
  //   {
  //     title: "Spread",
  //     date: "2024",
  //     preview: "",
  //     description:
  //       "A full-stack Publishing platform built with React, Node.js, and PostgreSQL. Features include user authentication with OAuth, Notification system, real-time messaging, and Post analytics with AI.",
  //     liveUrl: "https://spread-one.vercel.app/",
  //     githubUrl: "https://github.com/Mayurwaghgpr/Spread",
  //     tags: [
  //       { icon: "reactjs", text: "React" },
  //       { icon: "redux", text: "Redux" },
  //       { icon: "reactq", text: "React Query" },
  //       { icon: "tailwind", text: "Tailwind CSS" },
  //       { icon: "nodejs", text: "Node.js" },
  //       { icon: "express", text: "Express.js" },
  //       { icon: "postgresql", text: "PostgreSQL" },
  //       { icon: "socketio", text: "Socket.io" },
  //       { icon: "jwt", text: "JWT" },
  //       { icon: "oauth", text: "OAuth" },
  //     ],
  //     category: "Full Stack",
  //   },
  //   {
  //     title: "Real Estate CRM",
  //     date: "2023",
  //     preview: "",
  //     description:
  //       "It a CRM Solution for Real Estate with features like leads generation, bulk data upload, Kanban view for Deals, Properties, followups, and document management. Helps Real Estate Businesses manage clients and deals effectively.",
  //     githubUrl: "https://github.com/Mayurwaghgpr/Real-Estate-CRM",
  //     liveUrl: "https://real-estate-crm-sable.vercel.app/",
  //     tags: [
  //       { icon: "reactjs", text: "React" },
  //       { icon: "redux", text: "Redux" },
  //       { icon: "tailwind", text: "Tailwind CSS" },
  //       { icon: "nodejs", text: "Node.js" },
  //       { icon: "express", text: "Express.js" },
  //       { icon: "mongodb", text: "MongoDB" },
  //       { icon: "jwt", text: "JWT" },
  //       { icon: "vercel", text: "Vercel" },
  //       { icon: "render", text: "Render" },
  //     ],
  //     category: "Backend",
  //   },
  //   {
  //     title: "DSA check list",
  //     date: "2024",
  //     preview: "",
  //     description:
  //       "A web application to track progress for the DSA Problems you have solved, segregating them by Data Structure and difficulty level.",
  //     liveUrl: "https://checkds.vercel.app/",
  //     githubUrl: "https://github.com/Mayurwaghgpr/DSA_checklist",
  //     tags: [
  //       { icon: "reactjs", text: "React" },
  //       { icon: "typescript", text: "TypeScript" },
  //       { icon: "tailwind", text: "Tailwind CSS" },
  //       { icon: "vercel", text: "Vercel" },
  //     ],
  //     category: "Frontend",
  //   },
  //   {
  //     title: "LMS for Music Artist (Internship)",
  //     date: "2023",
  //     preview: "",
  //     description:
  //       "An LMS platform for music artists with features like student management, authentication, and learning resources. Built during internship.",
  //     tags: [
  //       { icon: "nextjs", text: "Next.js" },
  //       { icon: "reactjs", text: "React" },
  //       { icon: "redux", text: "Zustand" },
  //       { icon: "tailwind", text: "Tailwind CSS" },
  //       { icon: "nodejs", text: "Node.js" },
  //       { icon: "express", text: "Express.js" },
  //       { icon: "mongodb", text: "MongoDB" },
  //       { icon: "jwt", text: "JWT" },
  //     ],
  //     category: "Full Stack",
  //   },
  // ]

  return (
    <section className="relative w-full py-10">
      <div className="relative space-y-8 z-10 w-full">
        {/* Header Section */}
        <div className="text-start space-y-2">
          <Heading className="flex items-center justify-start gap-2 text-cyan-400">
            <GrProjects className="text-xl" />
            <span>Featured Projects</span>
          </Heading>

          <Discription>
            A curated collection of web applications, full-stack platforms, and tools built with modern architecture.
          </Discription>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">
          {!isLoading ? (
            projects?.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
          {!isLoading && isError && (
            <div className="col-span-full h-40 w-full flex flex-col justify-center items-center rounded-2xl bg-red-950/20 border border-red-900/40 p-6 text-center space-y-2">
              <span className="text-red-400 font-semibold text-base">Failed to load projects</span>
              <span className="text-slate-400 text-xs">Could not reach the server API. Check server connection.</span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-full"></div>
    </section>
  );
}

export default Projects;
