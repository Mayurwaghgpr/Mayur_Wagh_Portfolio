// Frontend
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from "react-icons/fa";
import { RiLinksFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiGooglegemini,
  SiKubernetes,
  SiReactquery,
  SiRedux,
  SiRender,
  SiSocketdotio,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

// Backend
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSequelize,
  SiRedis,
  SiJsonwebtokens,
} from "react-icons/si";

// Tools
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiPostman, SiDocker } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { ReactElement } from "react";
import { GiGemini } from "react-icons/gi";

type IconName =
  // Frontend
  | "reactjs"
  | "nextjs"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "bootstrap"
  | "tailwind"
  | "reactq"
  | "redux"
  | "vite"
  // Backend
  | "nodejs"
  | "express"
  | "mongodb"
  | "postgresql"
  | "sequelize"
  | "redis"
  | "jwt"
  | "socketio"
  | "oauth"
  // Tools
  | "git"
  | "github"
  | "postman"
  | "vscode"
  | "docker"
  | "kubernetes"
  | "vercel"
  | "render"
  | "liveLink"
  | "geminiAi";

type IconMap = Record<IconName, ReactElement>;

function useIcon(): IconMap {
  const icons: IconMap = {
    // Frontend
    reactjs: <FaReact />,
    nextjs: <RiNextjsFill />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    javascript: <FaJs />,
    typescript: <SiTypescript />,
    bootstrap: <FaBootstrap />,
    tailwind: <RiTailwindCssFill />,
    reactq: <SiReactquery />,
    redux: <SiRedux />,
    vite: <SiVite />,

    // Backend
    nodejs: <FaNodeJs />,
    express: <SiExpress />,
    mongodb: <SiMongodb />,
    postgresql: <SiPostgresql />,
    sequelize: <SiSequelize />,
    redis: <SiRedis />,
    jwt: <SiJsonwebtokens />,
    socketio: <SiSocketdotio />,
    oauth: <TbBrandOauth />,

    // Tools
    git: <FaGitAlt />,
    github: <FaGithub />,
    geminiAi: <SiGooglegemini />,
    postman: <SiPostman />,
    vscode: <VscCode />,
    docker: <SiDocker />,
    kubernetes: <SiKubernetes />,
    vercel: <SiVercel />,
    render: <SiRender />,
    liveLink: <RiLinksFill />,
  };
  return icons;
}

export default useIcon;
export type { IconName, IconMap };
