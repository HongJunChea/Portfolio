import { ProjectCategory, CodeLink, ProjectEvaluation, ProjectPresentation } from "./utils/projects";

export type ProjectType = {
  id: string;
  title: string;
  cover: string;
  screenshots?: { src: string; label: string }[];
  tags: string[];
  desc: string;
  longDesc?: string;
  code_links?: CodeLink[];
  deploy_link: string;
  video_link?: string;
  categories?: ProjectCategory[];
  features?: string[];
  techDetails?: string[];
  evaluation?: ProjectEvaluation;
  presentation?: ProjectPresentation;
};
