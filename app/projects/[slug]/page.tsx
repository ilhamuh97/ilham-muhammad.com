import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projectDetails";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { siteMetadata } from "@/data/site";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.detail) {
    notFound();
  }

  return <ProjectDetail project={{ ...project, detail: project.detail }} />;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const url = `${siteMetadata.siteUrl}/projects/${slug}`;
  const image = project.detail?.images?.[0];

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: project.name,
      description: project.description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: image ? [image] : undefined,
    },
  };
}
