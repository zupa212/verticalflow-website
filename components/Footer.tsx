'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated Prismatic Burst Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d] via-purple-600 to-blue-600 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500 via-yellow-500 to-[#00ff9d] animate-gradient-reverse" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Brand & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00ff9d] to-[#00cc7d] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 33 20" fill="none" className="text-black">
                    <path d="M12.9478 6.24502C15.2708 6.24502 17.0545 8.04255 17.0545 10.4761C17.0545 12.9235 15.2708 14.7072 12.9478 14.7072C12.0214 14.7072 11.3301 14.4307 10.7908 13.9744V14.5413H8.49548V4.8623H10.9152V6.85342C11.4545 6.46626 12.132 6.24502 12.9478 6.24502ZM12.6713 12.4258C13.7636 12.4258 14.6071 11.5961 14.6071 10.4347C14.6071 9.27317 13.7636 8.44354 12.6713 8.44354C11.5651 8.44354 10.7217 9.27317 10.7217 10.4347C10.7217 11.5961 11.5651 12.4258 12.6713 12.4258Z" fill="currentColor"/>
                    <path d="M22.6038 6.99169V6.41095H24.8991V14.5413H22.6038V13.9606C22.0784 14.4307 21.387 14.7072 20.4468 14.7072C18.1238 14.7072 16.3401 12.9235 16.3401 10.4761C16.3401 8.04255 18.1238 6.24502 20.4468 6.24502C21.3041 6.24502 22.0231 6.48008 22.6038 6.99169ZM20.7233 12.4258C21.8295 12.4258 22.673 11.5961 22.673 10.4347C22.673 9.27317 21.8295 8.44354 20.7233 8.44354C19.631 8.44354 18.7875 9.27317 18.7875 10.4347C18.7875 11.5961 19.631 12.4258 20.7233 12.4258Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.6842 15.2989C29.2249 13.7097 30.385 11.7814 30.385 10C30.385 8.21858 29.2249 6.29032 26.6842 4.70114C24.1727 3.13026 20.5731 2.09033 16.4877 2.09033C12.4022 2.09033 8.80263 3.13026 6.29116 4.70114C3.75044 6.29032 2.59033 8.21858 2.59033 10C2.59033 11.7814 3.75044 13.7097 6.29116 15.2989C8.80263 16.8697 12.4022 17.9097 16.4877 17.9097C20.5731 17.9097 24.1727 16.8697 26.6842 15.2989ZM16.4877 20C25.3174 20 32.4753 15.5228 32.4753 10C32.4753 4.47715 25.3174 0 16.4877 0C7.65792 0 0.5 4.47715 0.5 10C0.5 15.5228 7.65792 20 16.4877 20Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-none">terracube</h3>
                  <p className="text-xs text-white/60 mt-1">Creative Agency</p>
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-base text-white/80 leading-relaxed max-w-md">
              A team of creative experts dedicated to helping you grow your brand and achieve your business goals through innovative digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ff9d] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ff9d] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ff9d] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ff9d] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-sm text-white/70">
                Subscribe to our newsletter for the latest updates, insights, and exclusive content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ff9d] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#00ff9d] text-black font-bold rounded-full hover:bg-[#00cc7d] transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10">
          {/* Services */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Services</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/services/branding" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/video" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/services/web" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/social" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/70 hover:text-[#00ff9d] transition-colors text-sm">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Athens, Greece</li>
              <li>
                <a href="mailto:hello@terracube.gr" className="hover:text-[#00ff9d] transition-colors">
                  hello@terracube.gr
                </a>
              </li>
              <li>
                <a href="tel:+302101234567" className="hover:text-[#00ff9d] transition-colors">
                  +30 210 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} terracube. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-[#00ff9d] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#00ff9d] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#00ff9d] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10%, 10%) rotate(90deg); }
          50% { transform: translate(-10%, 10%) rotate(180deg); }
          75% { transform: translate(-10%, -10%) rotate(270deg); }
        }

        @keyframes gradient-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10%, -10%) rotate(-90deg); }
          50% { transform: translate(10%, -10%) rotate(-180deg); }
          75% { transform: translate(10%, 10%) rotate(-270deg); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        .animate-gradient {
          animation: gradient 20s ease infinite;
        }

        .animate-gradient-reverse {
          animation: gradient-reverse 20s ease infinite;
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}

