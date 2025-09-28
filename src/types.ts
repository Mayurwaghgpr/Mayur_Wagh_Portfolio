export type TemplateType = "tech" | "beach" | "abstract" | "retro" | "nature";

export interface Postcard {
  id: string;
  lat: number;
  lng: number;
  template: TemplateType;
  message: string;
  createdAt: string;
}

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  category?: string;
};
