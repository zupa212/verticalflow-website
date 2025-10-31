import type { Metadata } from 'next';
import { getProjectBySlug, type GalleryItem } from '@/lib/projects';
import ProjectDetailClient from './ProjectDetailClient';

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verticalflow.gr';

  if (!project) {
    return {
      title: 'Project Not Found | VerticalFlow',
    };
  }

  // Helper function to get image URL from gallery item
  const getImageUrl = (item: GalleryItem) => {
    if (typeof item === 'string') return item;
    if (typeof item === 'object' && item.type === 'image' && item.url) {
      return item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`;
    }
    return `${siteUrl}/og-default.jpg`;
  };

  const ogImage = project.gallery && project.gallery.length > 0 
    ? getImageUrl(project.gallery[0])
    : `${siteUrl}/og-default.jpg`;

  return {
    title: `${project.title} — VerticalFlow Project`,
    description: project.description,
    keywords: [
      project.category,
      ...project.services,
      'portfolio',
      'project',
      'VerticalFlow',
    ],
    openGraph: {
      title: `${project.title} — VerticalFlow Project`,
      description: project.description,
      url: `${siteUrl}/projects/${params.slug}`,
      siteName: 'VerticalFlow',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — VerticalFlow Project`,
      description: project.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteUrl}/projects/${params.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <a href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
