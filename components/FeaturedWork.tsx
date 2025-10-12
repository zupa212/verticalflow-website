'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  backgroundColor: string;
  textColor?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'INCARD',
    category: 'FINTECH',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
  },
  {
    id: '2',
    title: 'SOWBEEZ',
    category: 'B2C APP',
    year: '2023',
    image: '/sowbeez-placeholder.jpg',
    backgroundColor: '#f5f0e8',
    textColor: '#000000',
  },
  {
    id: '3',
    title: 'FORBES',
    category: 'WEB 3.0',
    year: '2023',
    image: '/forbes-placeholder.jpg',
    backgroundColor: '#000000',
    textColor: '#ffffff',
  },
];

export function FeaturedWork() {
  return (
    <section className="w-full bg-[#f5f4f0] py-20 lg:py-32 px-5 lg:px-12">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto mb-20">
        <h2 className="text-center mb-8">
          <span className="block text-[60px] lg:text-[120px] font-black leading-none tracking-tight text-black">
            Featured
          </span>
          <span className="block text-[60px] lg:text-[120px] font-black leading-none tracking-tight text-gray-400">
            work
          </span>
        </h2>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </div>

        {/* Description */}
        <p className="text-center text-[16px] lg:text-[20px] leading-relaxed max-w-[600px] mx-auto text-gray-900">
          We create innovative and purposeful designs that not only capture attention but also drive meaningful results.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* First Project - Full Width */}
        <div className="w-full">
          <ProjectCard project={projects[0]} size="large" />
        </div>

        {/* Bottom Two Projects - Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectCard project={projects[1]} size="medium" />
          <ProjectCard project={projects[2]} size="medium" />
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  size: 'large' | 'medium';
}

function ProjectCard({ project, size }: ProjectCardProps) {
  const isLarge = size === 'large';

  return (
    <div
      className={`relative rounded-[24px] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
        isLarge ? 'h-[400px] lg:h-[600px]' : 'h-[400px] lg:h-[500px]'
      }`}
      style={{ backgroundColor: project.backgroundColor }}
    >
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-white text-xs lg:text-sm font-medium tracking-wider">
            {project.title} <span className="text-white/60">{project.category}</span>{' '}
            <span className="text-white/40">{project.year}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        {project.id === '1' && (
          <IncardContent />
        )}
        {project.id === '2' && (
          <SowbeezContent />
        )}
        {project.id === '3' && (
          <ForbesContent />
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

// Custom content for each project
function IncardContent() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Mockup of credit card */}
      <div className="relative w-[90%] max-w-[500px] aspect-[1.586/1] perspective-1000">
        <div className="relative w-full h-full rounded-[20px] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl transform rotate-[-5deg] group-hover:rotate-[0deg] transition-transform duration-500">
          {/* Card Details */}
          <div className="absolute top-8 left-8">
            <div className="w-12 h-12 bg-black/80 rounded" />
          </div>
          <div className="absolute top-8 right-8 text-right">
            <p className="text-black/60 text-2xl font-bold tracking-wider">RD+</p>
          </div>
          <div className="absolute bottom-8 right-8">
            <p className="text-black/60 text-3xl font-bold tracking-wider">VISA</p>
            <p className="text-black/40 text-xs tracking-wide">Business</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SowbeezContent() {
  return (
    <div className="relative w-full h-full">
      {/* Colorful geometric shapes */}
      <div className="absolute top-12 left-8 w-16 h-16 bg-pink-300 rounded-full opacity-60" />
      <div className="absolute top-20 right-12 w-12 h-12 bg-blue-500 rounded-full opacity-60" />
      <div className="absolute bottom-20 left-16 w-20 h-8 bg-orange-400 rounded-full opacity-60" />
      <div className="absolute bottom-16 right-20 w-10 h-10 bg-purple-400 opacity-60" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-yellow-300 rounded-full opacity-60" />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-[80px] lg:text-[120px] font-black text-[#ff4422] leading-none">
            Sow
            <br />
            beez
          </h3>
          <div className="w-20 h-1 bg-[#ff4422] mx-auto mt-2 rounded-full" />
        </div>
      </div>

      {/* Testimonial */}
      <div className="absolute bottom-8 left-8 right-8 bg-[#4338ca] rounded-[20px] p-6 lg:p-8 max-w-[450px]">
        <p className="text-xs text-white/60 mb-2 tracking-wider">TESTIMONIAL</p>
        <p className="text-white text-sm lg:text-base leading-relaxed mb-6">
          We faced a real challenge with Sowbeez's branding. Brand Appart came highly recommended by major players and they exceeded all our expectations.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
          <div>
            <p className="text-white font-semibold text-sm">Julien Couderc</p>
            <p className="text-white/60 text-xs">CEO & Co-Founder @Sowbeez</p>
          </div>
        </div>
        <button className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
          <span className="text-[#4338ca] font-bold text-sm">→</span>
        </button>
      </div>
    </div>
  );
}

function ForbesContent() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Forbes Book Mockup */}
      <div className="relative w-[80%] max-w-[400px] aspect-[0.7/1] perspective-1000">
        <div className="relative w-full h-full rounded-[8px] bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl transform rotate-y-[-15deg] transition-transform duration-500 group-hover:rotate-y-[0deg]">
          {/* Book Cover */}
          <div className="absolute inset-0 p-8 flex flex-col">
            <div className="mb-auto">
              <p className="text-white/60 text-sm tracking-wider mb-2">forbes France</p>
              <h3 className="text-white text-4xl lg:text-5xl font-black tracking-tight">
                ORIG
                <br />
                INES
              </h3>
            </div>
            
            {/* Red accent at bottom */}
            <div className="mt-auto">
              <div className="h-20 bg-gradient-to-r from-red-600 to-red-500 -mx-8 -mb-8 rounded-b-[8px] flex items-center px-8">
                <div className="w-8 h-8 rounded bg-black/40 flex items-center justify-center">
                  <div className="w-3 h-4 bg-white/90 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Book spine shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-black/30" />
        </div>
      </div>
    </div>
  );
}

