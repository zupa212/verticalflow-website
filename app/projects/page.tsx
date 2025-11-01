'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import PillNav from '@/components/PillNav';
import '@/components/PillNav.css';

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
    title: 'IZIPEN',
    category: 'Short Form Content',
    description: 'Creative short form content production for brand engagement and social media presence.',
    image: '/logo-izipen.jpg',
    slug: 'izipen',
    year: '2024',
    services: ['Short Form Content']
  },
  {
    id: 5,
    title: 'GOJACK',
    category: 'Short Form Content & Video Production',
    description: 'Short form video content and video production for brand awareness and engagement.',
    image: '/logo-gojack.png',
    slug: 'gojack',
    year: '2024',
    services: ['Short Form Content', 'Video Production', 'Brand Awareness']
  },
  {
    id: 6,
    title: 'FOTIS PERSONAL BRAND',
    category: 'Personal Brand Reels',
    description: 'Finance and education content creator - Professional Personal Brand Reels focusing on trading and financial education.',
    image: 'https://images.unsplash.com/photo-1620658502571-b75d27d25922?w=1200&q=80',
    slug: 'fotis-personal-brand',
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
    title: '414 CLOTHING - DOMINATION INC',
    category: 'eCommerce & 3D',
    description: '3D Shopify eCommerce setup for DOMINATION INC band merchandise and streetwear brand.',
    image: '/logo-domination-inc.jpg',
    slug: '414-clothing',
    year: '2024',
    services: ['3D Shopify']
  },
  {
    id: 9,
    title: 'TSIOUPLIS RENTALS',
    category: 'Website Creation & SMM',
    description: 'Complete website creation and social media marketing for car sales and rentals.',
    image: '/tsiouplis-screenshot.png',
    slug: 'tsiouplis-rentals',
    year: '2024',
    services: ['Webpage Creation', 'SMM']
  },
  {
    id: 10,
    title: 'Το Ελληνικόν - Green Family',
    category: 'Short Form Content & Google Ads',
    description: 'Short form content and Google Ads campaigns for brand awareness and engagement.',
    image: '/logo-green-family.jpg',
    slug: 'green-family',
    year: '2024',
    services: ['Short Form Content', 'Google Ads', 'Brand Awareness']
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Modern Pill Navigation */}
      <PillNav
        logo="/logo.png"
        logoAlt="VerticalFlow Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="/projects"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#ffffff"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

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
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
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
      <Footer />
    </div>
  );
}
