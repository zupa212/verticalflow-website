'use client';

import Link from 'next/link';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  year: string;
  services: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'CENTRAL VIP',
    category: 'Reels & Ads',
    description: 'Luxury car rentals - Complete video production with engaging Reels and targeted ads for high-end automotive rental services.',
    image: '/images (1).jpg',
    slug: 'central-vip',
    year: '2024',
    services: ['Video Production', 'Social Media Reels', 'Digital Ads', 'Brand Content']
  },
  {
    id: 2,
    title: 'KING BARBERSHOP',
    category: 'Social Media Reels',
    description: 'Barbershop social media strategy with viral Reels, short-form content, and professional webpage development.',
    image: '/8ab1f84b-2d00-49d8-b59d-7340c4b75f78.png',
    slug: 'king-barbershop',
    year: '2024',
    services: ['Social Media Reels', 'Short-form Content', 'Web Development', 'SEO Setup']
  },
  {
    id: 3,
    title: 'BARBERS OF THE NORTH',
    category: 'Website & Booking System',
    description: 'Premium barbershop website with modern industrial design, integrated booking system, and SEO optimization for sophisticated grooming services.',
    image: '/f8d56692-5846-4651-83a2-566f6648502f.png',
    slug: 'barbers-of-the-north',
    year: '2024',
    services: ['Website Design', 'Booking System', 'SEO Setup', 'Brand Identity', 'Responsive Design']
  },
  {
    id: 4,
    title: 'EAZYPEN',
    category: 'Video Production',
    description: 'Academic writing platform - Comprehensive video production showcasing the 3-step process for finding professional writers.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    slug: 'eazypen',
    year: '2024',
    services: ['Video Production', 'Content Strategy', 'Brand Storytelling', 'Digital Marketing']
  },
  {
    id: 5,
    title: 'GOJACK',
    category: 'Reels & Content',
    description: 'Company formation services abroad - Professional Reels and content creation for international business setup services.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    slug: 'gojack',
    year: '2024',
    services: ['Reels Content', 'Content Strategy', 'Brand Development', 'Digital Presence']
  },
  {
    id: 6,
    title: 'FOTIS TRADER',
    category: 'Personal Brand Reels',
    description: 'Finance and education content creator - Professional Personal Brand Reels focusing on trading and financial education.',
    image: 'https://images.unsplash.com/photo-1620658502571-b75d27d25922?w=1200&q=80',
    slug: 'fotis-trader',
    year: '2024',
    services: ['Personal Branding', 'Reels Strategy', 'Content Creation', 'Social Media']
  },
  {
    id: 7,
    title: 'BY PHAO',
    category: 'Full Website',
    description: 'Chef & Private Dining - Complete website and brand identity for luxury private dining experiences and culinary events.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80',
    slug: 'by-phao',
    year: '2024',
    services: ['Full Website', 'Brand Identity', 'UI/UX Design', 'Digital Strategy']
  },
  {
    id: 8,
    title: '414 CLOTHING',
    category: 'eCommerce & 3D',
    description: 'Fashion brand - Shopify 3D eCommerce setup with creative direction and immersive shopping experiences.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    slug: '414-clothing',
    year: '2024',
    services: ['Shopify Setup', '3D eCommerce', 'Creative Direction', 'Brand Development']
  },
  {
    id: 9,
    title: 'TSIOUPLIS RENTALS',
    category: 'Car Rental Website',
    description: 'Car rental platform - Complete booking system with Stripe integration and comprehensive car rental management.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
    slug: 'tsiouplis-rentals',
    year: '2024',
    services: ['Website Development', 'Booking System', 'Stripe Integration', 'SEO Setup']
  }
];

export default function ProjectsPage() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://verticalflow.gr/projects" />
        <meta name="robots" content="index, follow" />
      </head>
      <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-black font-black text-xs tracking-wider" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>VERTICAL</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/projects" className="text-blue-400 font-medium text-sm">
              Projects
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-full px-6 py-2 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105">
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Title */}
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px] font-black leading-[0.9] tracking-tight mb-8">
              my
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> projects</span>
              <span className="text-white">.</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-white/90 mb-16">
              VERTICALFLOW
            </p>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl">
              VerticalFlow projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 hover:border-blue-400/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Project Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border-2 border-blue-400/30">
                      <span className="text-lg font-black text-blue-400">0{index + 1}</span>
                    </div>
                    <span className="text-sm font-medium text-white/60">{project.year}</span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-400/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="inline-flex items-center gap-2 text-white/60 group-hover:text-blue-400 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
            verticalflow
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-12">
            VerticalFlow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-full px-10 py-6 text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Animated Blue Line Separator */}
      <div className="relative py-8 bg-black">
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-blue-500/50 via-blue-400 to-blue-500/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-black font-black text-sm tracking-wider" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>VERTICAL</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white leading-none">VerticalFlow</h3>
                <p className="text-xs text-white/60 mt-1">Creative Portfolio</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 VerticalFlow. Portfolio showcase - Not a registered business.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
