'use client';

import Link from 'next/link';
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
    title: 'HOLMES PLACE',
    category: 'Fitness & Wellness / Personal Brand',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    slug: 'holmes-place',
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
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Get video URLs based on project
  const getVideoData = (projectId: number) => {
    const videos = {
      1: {
        hls: "https://vz-01468b22-0f0.b-cdn.net/a432aa81-5f88-4af7-8578-6b012a44e64b/playlist.m3u8",
        poster: "https://vz-01468b22-0f0.b-cdn.net/a432aa81-5f88-4af7-8578-6b012a44e64b/thumbnail.jpg"
      }, // CENTRAL VIP
      2: {
        hls: "https://vz-01468b22-0f0.b-cdn.net/089f6cd5-ba00-4b0b-8cd4-c113446061c5/playlist.m3u8",
        poster: "https://vz-01468b22-0f0.b-cdn.net/089f6cd5-ba00-4b0b-8cd4-c113446061c5/thumbnail.jpg"
      }, // HOLMES PLACE
      3: {
        hls: "https://vz-01468b22-0f0.b-cdn.net/2a2f0eec-a080-4771-9f31-76a1f7448c1a/playlist.m3u8",
        poster: "https://vz-01468b22-0f0.b-cdn.net/2a2f0eec-a080-4771-9f31-76a1f7448c1a/thumbnail.jpg"
      }, // AUDI FRANKFURT
    };
    return videos[projectId];
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
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
          // Video Background with Lazy Loading & Native Video
          <div className="w-full h-full flex items-center justify-center">
            {isVisible ? (
              <video
                ref={videoRef}
                src={getVideoData(project.id).hls}
                poster={getVideoData(project.id).poster}
                autoPlay
                loop
                playsInline
                preload="metadata"
                muted={isMuted}
                className="w-[130%] h-[130%] object-cover scale-110"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            ) : (
              // Placeholder image before video loads
              <img
                src={getVideoData(project.id).poster}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        ) : (
          // Other projects - Image
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 group-hover:from-black/60 group-hover:to-black/80 transition-all duration-500" />
      </div>

      {/* Sound Toggle Button - Only for video projects when visible */}
      {(project.id === 1 || project.id === 2 || project.id === 3) && isVisible && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-40 w-8 h-8 bg-white/90 hover:bg-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            // Muted icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            // Unmuted icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>
      )}

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
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                alt="See all projects"
                className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110"
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
