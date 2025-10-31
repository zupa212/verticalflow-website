'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { BlogParallax } from '@/components/BlogParallax';
import { WavesSection } from '@/components/GradientBlindsSection';
import { Footer } from '@/components/Footer';
import PillNav from '@/components/PillNav';
import '@/components/PillNav.css';

export default function HomePage() {
  const { scrollY } = useScroll();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calculate opacity based on scroll (0 at top, 1 after 100px)
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

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
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#ffffff"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Video Background */}
              <div className="absolute inset-0 z-0">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover opacity-40"
                  poster="/hero-poster.jpg"
                  style={{
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
            <h1 className="text-6xl sm:text-7xl lg:text-[120px] xl:text-[140px] font-black leading-[0.9] tracking-tight mb-8">
              VerticalFlow
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] mb-16 text-white/90">
              VERTICALFLOW
            </p>
          
          {/* CTA Button */}
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-full px-10 py-6 text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
              VIEW MY WORK
            </Button>
          </Link>
          </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
          </div>

              {/* Location Tag */}
              <div className="hidden lg:block absolute bottom-8 right-12 z-10 text-white/60 text-sm">
                Based in Greece
          </div>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-8 right-32 lg:bottom-8 lg:right-32 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-all duration-300 group"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white/80 group-hover:text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white/80 group-hover:text-white" />
                )}
              </button>
      </section>

      {/* My Expertise Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                my expertise
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
              </h2>

              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                VerticalFlow creative work.
              </p>

              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                VerticalFlow portfolio projects.
              </p>

              <p className="text-lg lg:text-xl text-white font-medium">
                VerticalFlow.
              </p>
            </div>

            {/* Right Content - Skills */}
            <div className="space-y-6">
              {/* Brand Design */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Design
                </h3>
              </div>

              {/* Video Production */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Video
                </h3>
              </div>

              {/* Digital Design */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Digital
                </h3>
              </div>

              {/* Web Development */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Web
                </h3>
              </div>

              {/* Creative Strategy */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Strategy
                </h3>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Projects Grid Section */}
      <ProjectsGrid />

      {/* Development Section */}
      <section id="development" className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              development
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From concept to code, we build modern digital experiences with cutting-edge technology and meticulous attention to detail.
            </p>
          </motion.div>

          {/* Technology Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { name: 'Next.js', icon: '⚡', desc: 'React Framework', color: 'from-blue-500 to-blue-600' },
              { name: 'TypeScript', icon: '🔷', desc: 'Type Safety', color: 'from-blue-600 to-indigo-600' },
              { name: 'Tailwind', icon: '💨', desc: 'Styling', color: 'from-cyan-400 to-blue-500' },
              { name: 'GSAP', icon: '🎬', desc: 'Animations', color: 'from-green-400 to-emerald-500' },
              { name: 'Node.js', icon: '🟢', desc: 'Backend', color: 'from-green-500 to-green-600' },
              { name: 'React', icon: '⚛️', desc: 'UI Library', color: 'from-blue-400 to-cyan-400' },
              { name: 'Vercel', icon: '▲', desc: 'Deployment', color: 'from-white to-gray-300' },
              { name: 'Git', icon: '📦', desc: 'Version Control', color: 'from-orange-500 to-red-500' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-400/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-white/60 text-sm font-medium">{tech.desc}</p>
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${tech.color} transition-all duration-500 rounded-full`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Development Process Steps */}
          <div className="space-y-8">
            {[
              { 
                step: '01', 
                title: 'Strategy & Planning', 
                desc: 'We analyze your needs, define objectives, and create a comprehensive development roadmap that aligns with your business goals.',
                gradient: 'from-purple-500/20 to-blue-500/20',
                borderGradient: 'from-purple-400/50 to-blue-400/50'
              },
              { 
                step: '02', 
                title: 'Design & Prototyping', 
                desc: 'Beautiful UI/UX designs that align with your brand identity. We create interactive prototypes to visualize the final product before development.',
                gradient: 'from-blue-500/20 to-cyan-500/20',
                borderGradient: 'from-blue-400/50 to-cyan-400/50'
              },
              { 
                step: '03', 
                title: 'Development & Testing', 
                desc: 'Clean, maintainable code using modern frameworks. Rigorous testing ensures your application is robust, secure, and performs flawlessly.',
                gradient: 'from-cyan-500/20 to-emerald-500/20',
                borderGradient: 'from-cyan-400/50 to-emerald-400/50'
              },
              { 
                step: '04', 
                title: 'Launch & Optimization', 
                desc: 'Smooth deployment with performance optimization, SEO implementation, and ongoing support to keep your digital presence at peak performance.',
                gradient: 'from-emerald-500/20 to-teal-500/20',
                borderGradient: 'from-emerald-400/50 to-teal-400/50'
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                className={`relative p-8 lg:p-12 bg-gradient-to-r ${item.gradient} rounded-3xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 group overflow-hidden`}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-shadow duration-300"
                  >
                    <span className="text-2xl lg:text-3xl font-black text-black">{item.step}</span>
                  </motion.div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-full px-10 py-6 text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                View Development Projects →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-screen bg-gradient-to-br from-purple-900/90 to-purple-700/90 rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
                alt="Brand Strategy" 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-6">
                <span className="text-2xl font-black text-blue-400">01</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Brand Strategy</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">We develop comprehensive brand strategies that position your business for long-term success in competitive markets.</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-screen bg-gradient-to-br from-blue-900/90 to-blue-700/90 rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" 
                alt="Visual Identity" 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-6">
                <span className="text-2xl font-black text-blue-400">02</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Visual Identity</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Create stunning visual identities that capture your brand essence and resonate with your target audience.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-screen bg-gradient-to-br from-emerald-900/90 to-emerald-700/90 rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
                alt="Digital Presence" 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-6">
                <span className="text-2xl font-black text-blue-400">03</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Digital Presence</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Build powerful digital experiences that engage users and drive measurable business results.</p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="min-h-screen bg-gradient-to-br from-orange-900/90 to-orange-700/90 rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" 
                alt="Content Creation" 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 to-orange-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 border-2 border-blue-400 mb-6">
                <span className="text-2xl font-black text-blue-400">04</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Content Creation</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Produce compelling content that tells your story and connects with your audience on every platform.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Parallax Section */}
      <BlogParallax />

          {/* Waves Section */}
          <WavesSection />

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
