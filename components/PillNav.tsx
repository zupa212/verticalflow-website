'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: pillTextColor,
  } as React.CSSProperties;

  return (
    <motion.nav 
      className={`pill-nav-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ ...cssVars }}
    >
      <div className="pill-nav">
        {/* Circular Logo - Left */}
        <Link href="/" className="pill-logo">
          <div className="logo-inner">
            <span className="logo-text">VERTICAL</span>
          </div>
        </Link>

        {/* Navigation Buttons Grouped - Right */}
        <div className="pill-nav-items desktop-only">
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`pill ${activeHref === item.href ? 'is-active' : ''}`}
                  role="menuitem"
                  aria-label={item.label}
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
      </div>
    </motion.nav>
  );
};

export default PillNav;

