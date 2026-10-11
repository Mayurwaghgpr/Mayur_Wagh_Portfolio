import type { IconName } from "./hooks/useIcon";

export type TemplateType = "tech" | "beach" | "abstract" | "retro" | "nature";

export interface Postcard {
  id: string;
  lat: number;
  lng: number;
  template: TemplateType;
  message: string;
  createdAt: string;
}

export type Tag = {
  icon: IconName;
  text: string;
};

export type Project = {
  preview: string;
  title: string;
  description: string;
  tags: Tag[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  category?: string;
};

export type TechCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "AI & Cloud";

export type TechObj = {
  icon: IconName;
  text: string;
  color: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "AI & Cloud";
  description: string;
};

export interface SocialLinks {
  portfolio?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  other?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number | string;
  endYear: number | string;
  grade?: string;
  location?: string;
}

export interface WorkExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  summary: string;
  highlights?: string[];
  technologies?: string[];
}

export interface CandidateProfile {
  _id?: string;
  fullName: string;
  avatarUrl?: string;
  resumeFileUrl?: string;
  resumeFilename?: string;
  email?: string;
  phone?: string;
  location?: string;
  currentRole?: string;
  yearsOfExperience?: number;
  summary?: string;
  skills?: string[];
  technicalSkills?: string[];
  frameworksAndTechnologies?: string[];
  socialLinks?: SocialLinks;
  education?: EducationItem[];
  workExperience?: WorkExperienceItem[];
  resumes?: Array<{
    profileVariant?: string;
    title?: string;
    resumeUrl?: string;
    pdfFilename?: string;
    isDefault?: boolean;
  }>;
}

