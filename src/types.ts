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
type tages = {
  icon: IconName;
  text: string;
};
export type Project = {
  preview: string;
  title: string;
  description: string;
  tags: tages[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  category?: string;
};

export type TechObj = {
  icon: IconName;
  text: string;
  color: string;
  category: string;
  description: string;
};
