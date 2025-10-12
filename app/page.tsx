'use client';

import { Home, Layers, UserCircle, Mail, Menu, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { VideoCarousel } from '@/components/VideoCarousel';
import { FeaturedWork } from '@/components/FeaturedWork';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <div className="bg-[#f5f4f0]">
      {/* Hero Section */}
      <div className="min-h-screen flex relative overflow-hidden">
      {/* Desktop Sidebar - Left */}
      <div className="hidden lg:flex fixed left-6 top-6 bottom-6 flex-col z-50 justify-between">
        {/* Top Section - Logo + Buttons */}
        <div className="flex flex-col gap-2">
          {/* Logo Button */}
          <Link href="/">
            <button className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#4338ca] to-[#6366f1] flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#4338ca] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 33 20" fill="none" className="text-white relative z-10">
                <path d="M12.9478 6.24502C15.2708 6.24502 17.0545 8.04255 17.0545 10.4761C17.0545 12.9235 15.2708 14.7072 12.9478 14.7072C12.0214 14.7072 11.3301 14.4307 10.7908 13.9744V14.5413H8.49548V4.8623H10.9152V6.85342C11.4545 6.46626 12.132 6.24502 12.9478 6.24502ZM12.6713 12.4258C13.7636 12.4258 14.6071 11.5961 14.6071 10.4347C14.6071 9.27317 13.7636 8.44354 12.6713 8.44354C11.5651 8.44354 10.7217 9.27317 10.7217 10.4347C10.7217 11.5961 11.5651 12.4258 12.6713 12.4258Z" fill="currentColor"/>
                <path d="M22.6038 6.99169V6.41095H24.8991V14.5413H22.6038V13.9606C22.0784 14.4307 21.387 14.7072 20.4468 14.7072C18.1238 14.7072 16.3401 12.9235 16.3401 10.4761C16.3401 8.04255 18.1238 6.24502 20.4468 6.24502C21.3041 6.24502 22.0231 6.48008 22.6038 6.99169ZM20.7233 12.4258C21.8295 12.4258 22.673 11.5961 22.673 10.4347C22.673 9.27317 21.8295 8.44354 20.7233 8.44354C19.631 8.44354 18.7875 9.27317 18.7875 10.4347C18.7875 11.5961 19.631 12.4258 20.7233 12.4258Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M26.6842 15.2989C29.2249 13.7097 30.385 11.7814 30.385 10C30.385 8.21858 29.2249 6.29032 26.6842 4.70114C24.1727 3.13026 20.5731 2.09033 16.4877 2.09033C12.4022 2.09033 8.80263 3.13026 6.29116 4.70114C3.75044 6.29032 2.59033 8.21858 2.59033 10C2.59033 11.7814 3.75044 13.7097 6.29116 15.2989C8.80263 16.8697 12.4022 17.9097 16.4877 17.9097C20.5731 17.9097 24.1727 16.8697 26.6842 15.2989ZM16.4877 20C25.3174 20 32.4753 15.5228 32.4753 10C32.4753 4.47715 25.3174 0 16.4877 0C7.65792 0 0.5 4.47715 0.5 10C0.5 15.5228 7.65792 20 16.4877 20Z" fill="currentColor"/>
              </svg>
              <div className="absolute inset-0 rounded-full border-2 border-orange-400/30" />
            </button>
          </Link>

          {/* Divider line */}
          <div className="w-full h-px bg-gray-300 my-2" />

          {/* Navigation Buttons */}
          <Link href="/">
            <button className="w-[56px] h-[56px] rounded-[16px] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:shadow-md hover:-translate-y-1">
              <Home className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
            </button>
          </Link>

          <button 
            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-[56px] h-[56px] rounded-[16px] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:shadow-md hover:-translate-y-1"
          >
            <Layers className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          </button>

          <Link href="/blog">
            <button className="w-[56px] h-[56px] rounded-[16px] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:shadow-md hover:-translate-y-1">
              <BookOpen className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
            </button>
          </Link>

          <button className="w-[56px] h-[56px] rounded-[16px] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:shadow-md hover:-translate-y-1">
            <UserCircle className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
          </button>

          <button className="w-[56px] h-[56px] rounded-[16px] bg-gray-800/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:bg-gray-900 hover:shadow-md hover:-translate-y-1">
            <Mail className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Bottom Section - Brand Name */}
        <div className="text-left">
          <h2 className="text-[20px] font-black mb-0 leading-tight tracking-tight text-black">Vertical</h2>
          <h2 className="text-[20px] font-black leading-tight tracking-tight text-black">Flow</h2>
          <p className="text-[10px] text-gray-500 mt-2 font-medium tracking-wider">GR</p>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#f5f4f0] z-50 px-5 py-4 flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-lg font-bold leading-tight tracking-tight">Vertical Flow</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium">GR</span>
          <button className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 pt-24 pb-32 lg:pt-0 lg:pb-8">
        <div className="max-w-[1200px] w-full text-left lg:text-center">
          <h1 className="text-[42px] sm:text-[60px] lg:text-[100px] xl:text-[110px] leading-[0.92] font-black mb-8 sm:mb-10 lg:mb-10 tracking-tight" style={{ fontWeight: 900 }}>
            The design{' '}
            <span className="inline-flex items-baseline align-middle">
              <span className="bg-[#ff6b35] text-white rounded-full w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-[85px] lg:h-[85px] inline-flex items-center justify-center text-[28px] sm:text-[36px] lg:text-[56px] font-black mx-1 -mt-1 lg:-mt-2" style={{ fontWeight: 900 }}>
                ©
              </span>
            </span>
            <br />
            partner for top-tier
            <br />
            companies
          </h1>

          {/* Company Logos - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center gap-10 mb-14 opacity-30">
            <span className="text-base font-medium">Forbes</span>
            <span className="text-base font-medium">PMU®</span>
            <span className="text-sm font-medium">BNP PARIBAS</span>
            <span className="text-base font-medium">RockJ</span>
          </div>

          {/* Company Logos - Mobile */}
          <div className="flex lg:hidden items-center justify-start gap-4 mb-10 opacity-30 flex-wrap">
            <span className="text-xs font-medium">Forbes</span>
            <span className="text-xs font-medium">PMU®</span>
            <span className="text-xs font-medium">BNP PARIBAS</span>
            <span className="text-xs font-medium">RockJ</span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-[28px] mb-10 lg:mb-10 max-w-[500px] lg:max-w-[720px] lg:mx-auto leading-[1.4] font-normal tracking-tight">
            We help funded startups ship iconic brands, conversion-ready sites, and investor-proof decks.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-start lg:justify-center gap-3 lg:gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-5 sm:px-8 sm:py-6 text-[11px] sm:text-[13px] font-bold rounded-full tracking-wide h-auto transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
              BOOK A CALL
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#ff6b35] transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg cursor-pointer"></div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Top Right Button */}
      <div className="hidden lg:block fixed top-6 right-6 z-50">
        <Button className="bg-black text-white hover:bg-gray-800 px-7 py-[14px] text-[11px] font-bold rounded-full tracking-wider h-auto shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl">
          BOOK A CALL NOW
        </Button>
      </div>


      {/* Desktop Location/Time */}
      <div className="hidden lg:block fixed bottom-6 right-16 text-[13px] text-gray-400 z-50">
        Athens, Greece <span className="font-bold text-gray-600">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
      </div>
      </div>

      {/* Featured Work Section */}
      <FeaturedWork />

      {/* Projects Section */}
      <section id="projects-section" className="relative">
        <VideoCarousel />
      </section>
    </div>
    </>
  );
}
