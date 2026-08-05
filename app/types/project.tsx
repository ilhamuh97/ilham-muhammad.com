export type ProjectStatus = "done" | "in-progress" | "planned";

export interface ProjectDetail {
  fullDescription: string;
  features: string[];
  challenges: string[];
  technologies: Record<string, string[]>;
  images: string[];
}

export interface Project {
  slug: string | null;
  name: string;
  link: string | null;
  techStack: string[];
  description: string;
  status: ProjectStatus;
  detail?: ProjectDetail;
}

export interface ProjectDetailProps {
  project: Project & { detail: ProjectDetail };
}
