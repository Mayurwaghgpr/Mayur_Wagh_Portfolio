export type TemplateType = "tech" | "beach" | "abstract" | "retro" | "nature";

export interface Postcard {
  id: string;
  lat: number;
  lng: number;
  template: TemplateType;
  message: string;
  createdAt: string;
}
