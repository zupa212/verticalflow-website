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
    if (!containerRef.current) return;

    const container = containerRef.current;
    const blinds: HTMLDivElement[] = [];

    // Create blinds
    for (let i = 0; i < count; i++) {
      const blind = document.createElement('div');
      blind.style.position = 'absolute';
      blind.style.top = '0';
      blind.style.left = '0';
      blind.style.width = direction === 'horizontal' ? '100%' : `${100 / count}%`;
      blind.style.height = direction === 'horizontal' ? `${100 / count}%` : '100%';
      blind.style.background = `linear-gradient(${direction === 'horizontal' ? '90deg' : '0deg'}, ${colors[i % colors.length]}, transparent)`;
      blind.style.opacity = opacity.toString();
      blind.style.transform = direction === 'horizontal' 
        ? `translateY(${(i * 100) / count}%)` 
        : `translateX(${(i * 100) / count}%)`;
      blind.style.animation = `gradientBlinds${direction} ${speed}s ease-in-out infinite alternate`;
      blind.style.animationDelay = `${(i * speed) / count}s`;
      
      container.appendChild(blind);
      blinds.push(blind);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientBlinds${direction} {
        0% {
          transform: ${direction === 'horizontal' ? 'translateY(0)' : 'translateX(0)'} scale(1);
          opacity: ${opacity};
        }
        50% {
          transform: ${direction === 'horizontal' ? 'translateY(0)' : 'translateX(0)'} scale(1.1);
          opacity: ${opacity * 0.8};
        }
        100% {
          transform: ${direction === 'horizontal' ? 'translateY(0)' : 'translateX(0)'} scale(1);
          opacity: ${opacity};
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      blinds.forEach(blind => blind.remove());
      style.remove();
    };
  }, [colors, speed, opacity, direction, count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default GradientBlinds;
