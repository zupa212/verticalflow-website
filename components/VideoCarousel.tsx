'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Play, Pause } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  videoUrl?: string;
  posterUrl?: string;
  backgroundColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Get Started',
    subtitle: 'Project #01',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    backgroundColor: '#1e1b4b',
  },
  {
    id: 2,
    title: 'Project Two',
    subtitle: 'Project #02',
    posterUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    backgroundColor: '#94a3b8',
  },
  {
    id: 3,
    title: 'Project Three',
    subtitle: 'Project #03',
    posterUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    backgroundColor: '#064e3b',
  },
  {
    id: 4,
    title: 'Project Four',
    subtitle: 'Project #04',
    posterUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
    backgroundColor: '#000000',
  },
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const itemHeight = containerRef.current.clientHeight;
      const newIndex = Math.round(scrollTop / itemHeight);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goNext = () => {
    if (currentIndex < projects.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="w-full h-screen snap-start snap-always flex items-center justify-center relative"
            style={{ backgroundColor: project.backgroundColor }}
          >
            {/* Background Image/Video */}
            {project.posterUrl && (
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={project.posterUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
              </div>
            )}

            {/* Video Element (if video URL provided) */}
            {project.videoUrl && (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={project.videoUrl}
                poster={project.posterUrl}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
              />
            )}

            {/* Content Overlay */}
            <div className="relative z-10 text-center text-white px-6">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                  {project.subtitle}
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                {project.title}
              </h2>
              <div className="inline-flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  {isPlaying && currentIndex === index ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  )}
                </button>
                <span className="text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  0{project.id}
                </span>
              </div>
            </div>

            {/* Project Number Badge */}
            <div className="absolute top-8 right-8 z-20">
              <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white font-bold text-lg">
                0{project.id}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-white h-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-30 flex flex-col gap-4">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex === 0
              ? 'bg-white/10 opacity-50 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex === projects.length - 1}
          className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex === projects.length - 1
              ? 'bg-white/10 opacity-50 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Scroll Hint */}
      {currentIndex === 0 && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-24 z-20 text-white text-sm font-medium animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto" />
          <span className="text-xs">Scroll</span>
        </div>
      )}
    </div>
  );
}

