import { useQuery } from "@tanstack/react-query";
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import axiosInstance from "../utils/axiosInstance";
import type { ProjectType } from "commons_in_portfolio";
function Projects() {
  const { data } = useQuery({
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
    <section className="relative  w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative space-y-10 z-10 container  w-full ">
        {/* Header Section */}
        <div className={`text-start space-y-5 transition-all duration-1000`}>
          <Heading>Projects</Heading>

          <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl  leading-relaxed">
            A collection of projects delivered during internships and developed
            personally, showcasing expertise in modern web technologies and
            innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`flex justify-start items-center  xl:flex-nowrap flex-wrap  gap-5 justify-items-center transition-all duration-1000 delay-500 w-full `}
        >
          {data?.length &&
            data?.map((project, index) => (
              <div key={index} className="w-full h-full">
                <ProjectCard {...project} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
