'use client';

import Link from 'next/link';

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
    category: 'Reels & Ads',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    slug: 'central-vip',
  },
  {
    id: 2,
    title: 'KING BARBERSHOP',
    category: 'Social Media Reels',
    image: 'https://images.unsplash.com/photo-1529369656566-c3d66ab9866b?w=1200&q=80',
    slug: 'king-barbershop',
  },
  {
    id: 3,
    title: 'BARBERS OF THE NORTH',
    category: 'Website & Reels',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80',
    slug: 'barbers-of-the-north',
  },
  {
    id: 4,
    title: 'EAZYPEN',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    slug: 'eazypen',
  },
  {
    id: 5,
    title: 'GOJACK',
    category: 'Reels & Content',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    slug: 'gojack',
  },
  {
    id: 6,
    title: 'FOTIS TRADER',
    category: 'Personal Brand Reels',
    image: 'https://images.unsplash.com/photo-1620658502571-b75d27d25922?w=1200&q=80',
    slug: 'fotis-trader',
  },
  {
    id: 7,
    title: 'BY PHAO',
    category: 'Full Website',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80',
    slug: 'by-phao',
  },
  {
    id: 8,
    title: '414 CLOTHING',
    category: 'eCommerce & 3D',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    slug: '414-clothing',
  },
  {
    id: 9,
    title: 'TSIOUPLIS RENTALS',
    category: 'Car Rental Website',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
    slug: 'tsiouplis-rentals',
  },
];

export function ProjectsGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Cards */}
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {/* Background Video/Image */}
              <div className="absolute inset-0">
                {project.id === 1 ? (
                  // STORM - Video Background - LARGER
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe 
                      src="https://iframe.mediadelivery.net/embed/518087/a432aa81-5f88-4af7-8578-6b012a44e64b?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                      loading="lazy" 
                      className="w-[130%] h-[130%] border-0 scale-110" 
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                      allowFullScreen={true}
                    />
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

              {/* Hover Effect - Green Border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            </Link>
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

            {/* Hover Effect - Green Border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300 pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}

