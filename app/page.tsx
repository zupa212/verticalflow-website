'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { BlogParallax } from '@/components/BlogParallax';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff9d] to-[#00cc7d] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 33 20" fill="none" className="text-black">
                <path d="M12.9478 6.24502C15.2708 6.24502 17.0545 8.04255 17.0545 10.4761C17.0545 12.9235 15.2708 14.7072 12.9478 14.7072C12.0214 14.7072 11.3301 14.4307 10.7908 13.9744V14.5413H8.49548V4.8623H10.9152V6.85342C11.4545 6.46626 12.132 6.24502 12.9478 6.24502ZM12.6713 12.4258C13.7636 12.4258 14.6071 11.5961 14.6071 10.4347C14.6071 9.27317 13.7636 8.44354 12.6713 8.44354C11.5651 8.44354 10.7217 9.27317 10.7217 10.4347C10.7217 11.5961 11.5651 12.4258 12.6713 12.4258Z" fill="currentColor"/>
                <path d="M22.6038 6.99169V6.41095H24.8991V14.5413H22.6038V13.9606C22.0784 14.4307 21.387 14.7072 20.4468 14.7072C18.1238 14.7072 16.3401 12.9235 16.3401 10.4761C16.3401 8.04255 18.1238 6.24502 20.4468 6.24502C21.3041 6.24502 22.0231 6.48008 22.6038 6.99169ZM20.7233 12.4258C21.8295 12.4258 22.673 11.5961 22.673 10.4347C22.673 9.27317 21.8295 8.44354 20.7233 8.44354C19.631 8.44354 18.7875 9.27317 18.7875 10.4347C18.7875 11.5961 19.631 12.4258 20.7233 12.4258Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M26.6842 15.2989C29.2249 13.7097 30.385 11.7814 30.385 10C30.385 8.21858 29.2249 6.29032 26.6842 4.70114C24.1727 3.13026 20.5731 2.09033 16.4877 2.09033C12.4022 2.09033 8.80263 3.13026 6.29116 4.70114C3.75044 6.29032 2.59033 8.21858 2.59033 10C2.59033 11.7814 3.75044 13.7097 6.29116 15.2989C8.80263 16.8697 12.4022 17.9097 16.4877 17.9097C20.5731 17.9097 24.1727 16.8697 26.6842 15.2989ZM16.4877 20C25.3174 20 32.4753 15.5228 32.4753 10C32.4753 4.47715 25.3174 0 16.4877 0C7.65792 0 0.5 4.47715 0.5 10C0.5 15.5228 7.65792 20 16.4877 20Z" fill="currentColor"/>
              </svg>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm font-medium"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProjectsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-lg border border-white/10 shadow-xl py-2 min-w-[200px]"
                  onMouseEnter={() => setIsProjectsOpen(true)}
                  onMouseLeave={() => setIsProjectsOpen(false)}
                >
                  <Link href="/projects/branding" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Branding
                  </Link>
                  <Link href="/projects/video" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Video Production
                  </Link>
                  <Link href="/projects/web" className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                    Web Development
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105">
              CONTACT US
            </Button>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-[120px] xl:text-[140px] font-black leading-[0.9] tracking-tight mb-8">
            terracube
            <span className="text-[#00ff9d]">.</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] mb-16 text-white/90">
            UNLOCK YOUR BRAND'S POTENTIAL
          </p>
          
          {/* CTA Button */}
          <Button className="bg-[#00ff9d] text-black hover:bg-[#00cc7d] rounded-full px-10 py-6 text-base font-bold tracking-wide transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_50px_rgba(0,255,157,0.5)]">
            GET STARTED
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>

        {/* Location Tag */}
        <div className="hidden lg:block absolute bottom-8 right-12 z-10 text-white/60 text-sm">
          Based in Greece
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                what we do
                <span className="text-[#00ff9d]">.</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Terracube is a team of creative experts who are dedicated to helping you grow your brand and achieve your business goals.
              </p>
              
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Our unique blend of digital marketing and production services ensures that your brand is seen and heard in all the right places.
              </p>
              
              <p className="text-lg lg:text-xl text-white font-medium">
                Are you ready to join our team?
              </p>
            </div>

            {/* Right Content - Services */}
            <div className="space-y-6">
              {/* Branding */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center group-hover:bg-[#00ff9d]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  Branding
                </h3>
              </div>

              {/* Video / Content Production */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center group-hover:bg-[#00ff9d]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  Video / Content Production
                </h3>
              </div>

              {/* Social Media Management */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center group-hover:bg-[#00ff9d]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  Social Media Management
                </h3>
              </div>

              {/* Digital Advertising */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center group-hover:bg-[#00ff9d]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  Digital Advertising
                </h3>
              </div>

              {/* Website Development */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center group-hover:bg-[#00ff9d]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#00ff9d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#00ff9d] transition-colors">
                  Website Development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <ProjectsGrid />

      {/* Scroll Stack Section */}
      <ScrollStack useWindowScroll={true} itemDistance={150} itemStackDistance={40}>
        <ScrollStackItem>
          <div className="min-h-screen bg-gradient-to-br from-purple-900/90 to-purple-700/90 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" alt="Brand Strategy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00ff9d]/20 border-2 border-[#00ff9d] mb-6">
                <span className="text-2xl font-black text-[#00ff9d]">01</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Brand Strategy</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">We develop comprehensive brand strategies that position your business for long-term success in competitive markets.</p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="min-h-screen bg-gradient-to-br from-blue-900/90 to-blue-700/90 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="Visual Identity" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00ff9d]/20 border-2 border-[#00ff9d] mb-6">
                <span className="text-2xl font-black text-[#00ff9d]">02</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Visual Identity</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Create stunning visual identities that capture your brand essence and resonate with your target audience.</p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="min-h-screen bg-gradient-to-br from-emerald-900/90 to-emerald-700/90 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt="Digital Presence" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-emerald-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00ff9d]/20 border-2 border-[#00ff9d] mb-6">
                <span className="text-2xl font-black text-[#00ff9d]">03</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Digital Presence</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Build powerful digital experiences that engage users and drive measurable business results.</p>
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem>
          <div className="min-h-screen bg-gradient-to-br from-orange-900/90 to-orange-700/90 rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80" alt="Content Creation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 to-orange-700/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00ff9d]/20 border-2 border-[#00ff9d] mb-6">
                <span className="text-2xl font-black text-[#00ff9d]">04</span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">Content Creation</h3>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">Produce compelling content that tells your story and connects with your audience on every platform.</p>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>

      {/* Blog Parallax Section */}
      <BlogParallax />

      {/* Footer */}
      <Footer />
    </div>
  );
}
