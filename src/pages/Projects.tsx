import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

function Projects() {
  // Sample project data - replace with your actual projects
  const ProjectsDetails: Project[] = [
    {
      title: "Spread",
      date: "2024",
      description:
        "A full-stack Publishing platform built with React, Node.js, and PostgreSQL. Features include user authentication with OAuth, Notification system, real-time messaging, and Post analytics with AI.",
      liveUrl: "https://spread-one.vercel.app/",
      githubUrl: "https://github.com/Mayurwaghgpr/Spread",
      tags: [
        "React",
        "Redux",
        "React Query",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Socket.io",
        "JWT",
        "OAuth",
      ],
      category: "Full Stack",
    },
    {
      title: "Real Estate CRM",
      date: "2023",
      description:
        "It a CRM Solution for Real Estate with features like leads generation,bulk data upload,bulk upload,Kanban view for Deals,Property,Deals,followups and document manangement.which helps Real Estate Businesses to manage there client and deals effectively ",
      githubUrl: "https://github.com/Mayurwaghgpr/Real-Estate-CRM",
      tags: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Mongodb",
        "JWT",
        "Vercel",
        "Render",
      ],

      liveUrl: "https://real-estate-crm-sable.vercel.app/",
      category: "Backend",
    },

    {
      title: "DSA check list",
      date: "2024",
      description:
        "A web application to track progress for the DSA Problems you have solved ,segregating the number of problems you have solved by each Data structure and difficulty level ",
      liveUrl: "https://checkds.vercel.app/",
      githubUrl: "https://github.com/Mayurwaghgpr/DSA_checklist",
      tags: ["React.js", "Typescript", "Tailwind CSS", "Vercel"],
      category: "Frontend",
    },
    {
      title: "LMS for Music Artist (Internship)",
      date: "2023",
      description:
        "It a CRM Solution for Real Estate with features like leads generation,bulk data upload,bulk upload,Kanban view for Deals,Property,Deals,followups and document manangement.which Makes Real Estate Business manage there client and deals effectively ",
      tags: [
        "Next.js",
        "React.js",
        "Zustand",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Mongodb",
        "JWT",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative space-y-10 z-10 container px-6 sm:px-8 lg:px-20 py-20">
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
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center transition-all duration-1000 delay-500 `}
        >
          {ProjectsDetails.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-md"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                liveUrl={project.liveUrl}
                tags={project.tags}
                githubUrl={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
