'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function BlogParallax() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollProgress * 200); // Adjust parallax speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=1920&q=80"
          alt="Blog background"
          className="w-full h-[120%] object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            blog
            <span className="text-[#00ff9d]">.</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed">
            Stay up to date on the latest trends in digital marketing and production with Terracube's blog.
          </p>

          <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
            Our team of experts shares their insights and tips on a variety of topics, including branding, web design, video production, and more.
          </p>

          {/* CTA Button */}
          <Link href="/blog">
            <Button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-sm font-bold tracking-wider transition-all duration-300 hover:scale-105">
              SEE MORE
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

