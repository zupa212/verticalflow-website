'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// Project type definition
type GalleryItem = string | { type: 'image' | 'video'; url?: string; videoId?: string };
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  services: string[];
  videoId: string | null;
  gallery: GalleryItem[];
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  website?: string;
};

// Project database
const projects: Record<string, Project> = {
  'central-vip': {
    id: 1,
    title: 'CENTRAL VIP',
    category: 'Automotive & Cars',
    description: 'Complete video production with engaging Reels and targeted ads for luxury car rental services.',
    year: '2024',
    services: ['Video Production', 'Social Media Reels', 'Digital Ads', 'Brand Content'],
    videoId: 'a432aa81-5f88-4af7-8578-6b012a44e64b',
    gallery: [
      { type: 'image', url: '/images (1).jpg' },
      { type: 'video', videoId: 'a432aa81-5f88-4af7-8578-6b012a44e64b' },
    ],
    challenge: 'Creating engaging content for luxury car rentals that showcases exclusivity and appeal.',
    solution: 'Produced high-quality video reels and digital advertisements that highlight the premium nature of the fleet.',
    impact: 'Increased engagement and bookings through visually striking content.',
    technologies: ['Bunny CDN', 'HLS Streaming', 'Mobile Optimization'],
  },
  'holmes-place': {
    id: 2,
    title: 'HOLMES PLACE',
    category: 'Fitness & Wellness / Personal Brand',
    description: 'Complete video production with engaging Reels and targeted ads for luxury car rental services.',
    year: '2024',
    services: ['Personal Branding', 'Reels Content', 'Social Media', 'Content Strategy'],
    videoId: '089f6cd5-ba00-4b0b-8cd4-c113446061c5',
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80',
    ],
    challenge: 'Building a strong personal brand in the fitness industry.',
    solution: 'Created authentic, engaging reels that showcase expertise and personality.',
    impact: 'Significant growth in followers and client inquiries.',
    technologies: ['Video Editing', 'Motion Graphics', 'Content Planning'],
  },
  'audi-frankfurt': {
    id: 3,
    title: 'AUDI FRANKFURT',
    category: 'Automotive & Cars',
    description: 'Complete video production with engaging Reels and targeted ads for luxury automotive experiences.',
    year: '2024',
    services: ['Video Production', 'Brand Content', 'Digital Marketing', 'Creative Direction'],
    videoId: '2a2f0eec-a080-4771-9f31-76a1f7448c1a',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    ],
    challenge: 'Showcasing premium automotive experiences through visual storytelling.',
    solution: 'Produced cinematic video content that captures the essence of luxury and performance.',
    impact: 'Enhanced brand perception and increased brand awareness.',
    technologies: ['Cinematic Videography', 'Post-Production', 'Color Grading'],
  },
  'king-barbershop': {
    id: 4,
    title: 'KING BARBERSHOP',
    category: 'Web Development & SEO',
    description: 'Complete website development and SEO optimization for a premium barbershop franchise.',
    year: '2024',
    website: 'https://www.kingsbarbershop.gr/',
    services: ['Web Development', 'SEO Optimization', 'Brand Identity', 'Responsive Design'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/8ab1f84b-2d00-49d8-b59d-7340c4b75f78.png' },
      { type: 'video', videoId: '232f5d5f-a1e5-4c26-a6d3-5b1b49897b38' },
      { type: 'video', videoId: 'eb7ff409-55ce-4235-8bcb-e682e0b7ac9b' },
    ],
    challenge: 'Building a premium, multi-location barbershop website with franchise opportunities.',
    solution: 'Developed a sleek, responsive website with SEO optimization and integrated booking system.',
    impact: 'Increased online presence, bookings, and franchise inquiries through optimized web presence.',
    technologies: ['Next.js', 'SEO', 'Responsive Design', 'Booking Integration'],
  },
  'barbers-of-the-north': {
    id: 5,
    title: 'BARBERS OF THE NORTH',
    category: 'Website & Booking System',
    description: 'Premium barbershop website with modern design, booking system, and SEO optimization for a sophisticated grooming experience.',
    year: '2024',
    website: 'https://www.barbersofthenorth.com/',
    services: ['Website Design', 'Booking System', 'SEO Setup', 'Brand Identity', 'Responsive Design'],
    videoId: null,
    gallery: [
      { type: 'image', url: '/f8d56692-5846-4651-83a2-566f6648502f.png' },
      { type: 'image', url: '/64406659-411c-4673-9901-7d99103c4796.png' },
      { type: 'image', url: '/706823f4-f5f9-46db-b7bc-c795bc37666d.png' },
      { type: 'image', url: '/8d854dcd-a1e8-4127-a9f4-739f49915caf.png' },
    ],
    challenge: 'Creating a premium digital presence that reflects the sophisticated barbershop experience with classic barber chairs, modern lighting, and professional grooming services.',
    solution: 'Developed a sleek website featuring the barbershop&apos;s modern industrial aesthetic with integrated booking system and SEO optimization.',
    impact: 'Enhanced online presence with streamlined booking process, increased client appointments, and professional brand representation.',
    technologies: ['Next.js', 'Booking API', 'SEO Optimization', 'Responsive Design', 'Modern UI/UX'],
  },
  'eazypen': {
    id: 6,
    title: 'EAZYPEN',
    category: 'Platform & Marketplace',
    description: 'Writer marketplace platform connecting students with professional writers for academic assistance.',
    year: '2023',
    services: ['Platform Development', 'Marketplace Design', 'User Management', 'Payment Integration'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-434902a88922?w=1200&q=80',
    ],
    challenge: 'Creating a trusted marketplace platform for academic writing services with secure transactions.',
    solution: 'Built a comprehensive platform with user verification, secure payments, and review systems.',
    impact: 'Connected thousands of students with qualified writers, improving success rate.',
    technologies: ['Full Stack Development', 'Payment Gateway', 'User Authentication', 'Database Management'],
  },
  'gojack': {
    id: 7,
    title: 'GOJACK',
    category: 'Business Services & Website',
    description: 'Company registration services for businesses expanding abroad.',
    year: '2024',
    services: ['Website Design', 'Service Presentation', 'SEO Optimization', 'Brand Identity'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    ],
    challenge: 'Building trust and credibility for international company registration services.',
    solution: 'Created a professional, transparent platform showcasing services and success stories.',
    impact: 'Increased inquiries and client acquisitions through professional presentation.',
    technologies: ['Web Development', 'SEO', 'Content Strategy', 'Lead Generation'],
  },
  'fotis-trader': {
    id: 8,
    title: 'FOTIS TRADER',
    category: 'Personal Branding',
    description: 'Personal brand development with reels for finance and education content.',
    year: '2024',
    services: ['Personal Branding', 'Reels Content', 'Video Production', 'Social Media Strategy'],
    videoId: 'e01947d3-7850-426c-a59f-6d93fae33443',
    gallery: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80',
    ],
    challenge: 'Establishing authority and credibility in the finance education space.',
    solution: 'Developed engaging educational reels that simplify complex financial concepts.',
    impact: 'Built a loyal following and became a trusted educator in trading and finance.',
    technologies: ['Video Editing', 'Motion Graphics', 'Content Planning', 'Social Media'],
  },
  'by-phao': {
    id: 9,
    title: 'BY PHAO',
    category: 'Restaurant & Hospitality',
    description: 'Full website and brand identity for a chef offering private dining experiences.',
    year: '2024',
    services: ['Full Website Design', 'Brand Identity', 'Photography Integration', 'Booking System'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80',
    ],
    challenge: 'Showcasing unique private dining experiences in a compelling, appetizing way.',
    solution: 'Created an elegant brand and website with stunning food photography and easy booking.',
    impact: 'Established a premium brand image and increased bookings significantly.',
    technologies: ['Web Design', 'Brand Identity', 'Photography', 'UX/UI Design'],
  },
  '414-clothing': {
    id: 10,
    title: '414 CLOTHING',
    category: 'eCommerce & Fashion',
    description: 'Shopify 3D eCommerce setup with creative direction for a streetwear brand.',
    year: '2024',
    services: ['3D eCommerce Setup', 'Shopify Development', 'Creative Direction', 'Brand Identity'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
    ],
    challenge: 'Creating an immersive 3D shopping experience for streetwear.',
    solution: 'Built an innovative Shopify store with 3D product visualization and interactive features.',
    impact: 'Increased conversion rates and average order value through engaging 3D experiences.',
    technologies: ['Shopify Plus', '3D Technology', 'Interactive Design', 'E-commerce'],
  },
  'tsiouplis-rentals': {
    id: 11,
    title: 'TSIOUPLIS RENTALS',
    category: 'Automotive & Cars',
    description: 'Car rental website with booking system and Stripe payment integration.',
    year: '2024',
    services: ['Website Design', 'Booking System', 'Stripe Integration', 'SEO Optimization'],
    videoId: null,
    gallery: [
      'https://images.unsplash.com/photo-1492144534655-ae79c7c9eb30?w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    ],
    challenge: 'Streamlining the car rental booking process with secure online payments.',
    solution: 'Developed a user-friendly platform with real-time availability and secure Stripe payments.',
    impact: 'Improved booking conversion rates and reduced administrative overhead.',
    technologies: ['Next.js', 'Stripe API', 'Booking System', 'Database Management'],
  },
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  // Helper function to get image URL from gallery item
  const getGalleryImageUrl = (item: string | { type: string; url?: string; videoId?: string }) => {
    if (typeof item === 'string') return item;
    if (item.type === 'image' && item.url) return item.url;
    if (item.type === 'video' && item.videoId) return `https://vz-01468b22-0f0.b-cdn.net/${item.videoId}/thumbnail.jpg`;
    return '';
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video/Image Background */}
        <div className="absolute inset-0 z-0">
          {project.videoId ? (
            <iframe
              src={`https://iframe.mediadelivery.net/embed/518087/${project.videoId}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&quality=1080p&bypass=true`}
              className="w-full h-full border-0 object-cover"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
              allowFullScreen={true}
            />
          ) : (
            <Image
              src={getGalleryImageUrl(project.gallery[0])}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        {/* Back Button - Fixed position top-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-6 left-6 lg:top-8 lg:left-12 z-50"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl lg:text-9xl font-black mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {project.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm uppercase tracking-wider text-white/60 mb-8">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            {project.website && (
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
              >
                Visit Website →
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/30"
                >
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-black mb-12"
            >
              Gallery
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((item, index) => {
                const isVideo = typeof item === 'object' && item.type === 'video';
                const isImageObj = typeof item === 'object' && item.type === 'image';
                const imageUrl = getGalleryImageUrl(item);
                
                if (isVideo) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative aspect-[9/16] rounded-2xl overflow-hidden group"
                    >
                      <iframe
                        src={`https://iframe.mediadelivery.net/embed/518087/${item.videoId}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&quality=720p&bypass=true`}
                        className="w-full h-full border-0"
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                        allowFullScreen={true}
                      />
                    </motion.div>
                  );
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative aspect-square rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={imageUrl}
                      alt={`Gallery ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Challenge</h3>
              <p className="text-lg text-white/70 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Solution</h3>
              <p className="text-lg text-white/70 leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Impact</h3>
              <p className="text-lg text-white/70 leading-relaxed">{project.impact}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black mb-12"
          >
            Technologies
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-48">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Let&apos;s create something amazing together.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-black text-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

