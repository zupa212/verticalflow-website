'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export type PillNavItem = {
  label: string;
  href: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  baseColor = '#ffffff',
  pillColor = '#000000',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#000000',
}) => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial entrance animation with GSAP
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(navRef.current, { opacity: 0, y: -20 });
      gsap.set(logoRef.current, { scale: 0, rotation: -180 });
      gsap.set(pillsRef.current?.children, { opacity: 0, x: 20 });

      // Animate container entrance
      gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Animate logo
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.4,
      });

      // Animate pills with stagger
      gsap.to(pillsRef.current?.children, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Scroll-based opacity animation
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / 100, 1);
        gsap.to(navRef.current, {
          opacity: 0.95 + opacity * 0.05, // Fade in slightly on scroll
          duration: 0.3,
          ease: 'power1.out',
        });
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover animations for pills
  const handlePillEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handlePillLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLogoEnter = () => {
    gsap.to(logoRef.current, {
      scale: 1.1,
      rotation: 5,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: pillTextColor,
  } as React.CSSProperties;

  return (
    <div ref={containerRef} className={`pill-nav-container ${className}`} style={{ ...cssVars }}>
      <nav ref={navRef} className="pill-nav">
        {/* Circular Logo - Left */}
        <Link
          ref={logoRef}
          href="/"
          className="pill-logo"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        >
          <div className="logo-inner">
            <span className="logo-text">VERTICAL</span>
          </div>
        </Link>

        {/* Navigation Buttons Grouped - Right */}
        <div ref={pillsRef} className="pill-nav-items desktop-only">
          <ul className="pill-list">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`pill ${activeHref === item.href ? 'is-active' : ''}`}
                  role="menuitem"
                  aria-label={item.label}
                  onMouseEnter={handlePillEnter}
                  onMouseLeave={handlePillLeave}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-menu-button mobile-only"
          onClick={() => {}}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>
    </div>
  );
};

export default PillNav;
