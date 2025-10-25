'use client';

import React, { useEffect, useRef } from 'react';

interface GradientBlindsProps {
  colors?: string[];
  speed?: number;
  opacity?: number;
  direction?: 'horizontal' | 'vertical';
  count?: number;
  className?: string;
}

export const GradientBlinds: React.FC<GradientBlindsProps> = ({
  colors = ['#3b82f6', '#06b6d4', '#8b5cf6', '#06b6d4', '#3b82f6', '#1d4ed8'],
  speed = 2,
  opacity = 0.6,
  direction = 'horizontal',
  count = 6,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing blinds
    container.innerHTML = '';

    // Create blinds
    for (let i = 0; i < count; i++) {
      const blind = document.createElement('div');
      const colorIndex = i % colors.length;
      const nextColorIndex = (i + 1) % colors.length;
      
      blind.style.position = 'absolute';
      blind.style.top = '0';
      blind.style.left = '0';
      blind.style.width = '100%';
      blind.style.height = '100%';
      blind.style.background = `linear-gradient(${direction === 'horizontal' ? '90deg' : '0deg'}, ${colors[colorIndex]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, ${colors[nextColorIndex]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')})`;
      blind.style.opacity = opacity.toString();
      blind.style.transform = direction === 'horizontal' 
        ? `translateX(${(i / count) * 100}%) scaleX(${1 / count})`
        : `translateY(${(i / count) * 100}%) scaleY(${1 / count})`;
      blind.style.transformOrigin = direction === 'horizontal' ? 'left center' : 'top center';
      blind.style.animation = `gradientBlinds${direction} ${speed}s ease-in-out infinite`;
      blind.style.animationDelay = `${(i / count) * speed}s`;
      
      container.appendChild(blind);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientBlinds${direction} {
        0%, 100% {
          transform: ${direction === 'horizontal' 
            ? `translateX(${(i / count) * 100}%) scaleX(${1 / count})` 
            : `translateY(${(i / count) * 100}%) scaleY(${1 / count})`};
          opacity: ${opacity};
        }
        50% {
          transform: ${direction === 'horizontal' 
            ? `translateX(${(i / count) * 100}%) scaleX(${1 / count * 1.2})` 
            : `translateY(${(i / count) * 100}%) scaleY(${1 / count * 1.2})`};
          opacity: ${opacity * 0.8};
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [colors, speed, opacity, direction, count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};