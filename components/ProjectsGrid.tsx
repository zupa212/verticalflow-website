'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CENTRAL VIP',
    category: 'Automotive & Cars',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    slug: 'central-vip',
  },
  {
    id: 2,
    title: 'FOTIS TRADER',
    category: 'Personal Brand',
    image: 'https://vz-01468b22-0f0.b-cdn.net/e01947d3-7850-426c-a59f-6d93fae33443/preview.webp?v=1761689702',
    slug: 'fotis-trader',
  },
  {
    id: 3,
    title: 'AUDI FRANKFURT',
    category: 'Automotive & Cars',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    slug: 'audi-frankfurt',
  },
];

function VideoCard({ project }: { project: Project }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' } // Start loading 200px before visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get video iframe URL based on project (always muted for autoplay)
  const getVideoUrl = (projectId: number) => {
    const baseUrl = "https://iframe.mediadelivery.net/embed/518087/";
    const videos: { [key: number]: string } = {
      1: "a432aa81-5f88-4af7-8578-6b012a44e64b", // CENTRAL VIP
      2: "e01947d3-7850-426c-a59f-6d93fae33443", // FOTIS TRADER
      3: "2a2f0eec-a080-4771-9f31-76a1f7448c1a", // AUDI FRANKFURT
    };
    return `${baseUrl}${videos[projectId]}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&quality=720p`;
  };

  return (
    <Link
      ref={cardRef}
      href={`/projects/${project.slug}`}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {project.id === 1 || project.id === 2 || project.id === 3 ? (
          // Video Background with Lazy Loading - Iframe
          <div className="w-full h-full flex items-center justify-center">
                  {isVisible ? (
                    <iframe
                      src={getVideoUrl(project.id)}
                      loading="lazy"
                      className="w-[130%] h-[130%] border-0 scale-110"
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                      allowFullScreen={true}
                    />
                  ) : (
              // Placeholder image before video loads
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>
        ) : (
          // Other projects - Image
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 group-hover:from-black/60 group-hover:to-black/80 transition-all duration-500" />
      </div>


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
        {/* Title */}
        <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Category - Vertical Text */}
        <div className="self-start">
          <p className="text-xs lg:text-sm font-medium text-white/60 tracking-widest uppercase writing-mode-vertical transform rotate-180">
            {project.category}
          </p>
        </div>
      </div>

      {/* Hover Effect - Blue Border */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300 pointer-events-none" />
    </Link>
  );
}

export function ProjectsGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Project Cards */}
          {projects.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}

          {/* See All Projects Card */}
          <Link
            href="/projects"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                alt="See all projects"
                fill
                className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between items-center p-8 lg:p-10">
              {/* Title */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6 group-hover:text-blue-400 transition-colors duration-300">
                    SEE ALL<br />PROJECTS
                  </h3>
                  
                  {/* Arrow Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 border-2 border-blue-400/50 transition-all duration-300 group-hover:scale-110">
                    <svg 
                      className="w-8 h-8 text-blue-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category - Vertical Text */}
              <div className="self-start">
                <p className="text-xs lg:text-sm font-medium text-white/60 tracking-widest uppercase writing-mode-vertical transform rotate-180">
                  All Projects
                </p>
              </div>
            </div>

            {/* Hover Effect - Blue Border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300 pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
