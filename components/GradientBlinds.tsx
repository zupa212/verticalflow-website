'use client';

import { useEffect, useRef } from 'react';

interface GradientBlindsProps {
  className?: string;
  colors?: string[];
  speed?: number;
  opacity?: number;
  direction?: 'horizontal' | 'vertical';
  count?: number;
}

export function GradientBlinds({
  className = '',
  colors = ['#00ff9d', '#ff6b35', '#8b5cf6', '#06b6d4', '#f59e0b'],
  speed = 2,
  opacity = 0.3,
  direction = 'horizontal',
  count = 8
}: GradientBlindsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create gradient blinds
    const blinds: HTMLDivElement[] = [];
    
    for (let i = 0; i < count; i++) {
      const blind = document.createElement('div');
      blind.style.position = 'absolute';
      blind.style.top = '0';
      blind.style.left = '0';
      blind.style.width = '100%';
      blind.style.height = '100%';
      blind.style.background = `linear-gradient(${
        direction === 'horizontal' ? '90deg' : '0deg'
      }, transparent, ${colors[i % colors.length]}, transparent)`;
      blind.style.opacity = opacity.toString();
      blind.style.transform = `translateX(${
        direction === 'horizontal' ? (i * 100) / count : 0
      }%) translateY(${
        direction === 'vertical' ? (i * 100) / count : 0
      }%)`;
      blind.style.animation = `gradientBlinds${direction} ${speed}s ease-in-out infinite`;
      blind.style.animationDelay = `${(i * speed) / count}s`;
      
      container.appendChild(blind);
      blinds.push(blind);
    }

    // Add CSS animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientBlinds${direction} {
        0%, 100% {
          transform: translateX(${direction === 'horizontal' ? '0%' : '0'}) translateY(${direction === 'vertical' ? '0%' : '0'}) scale(1);
          opacity: ${opacity};
        }
        25% {
          transform: translateX(${direction === 'horizontal' ? '10%' : '0'}) translateY(${direction === 'vertical' ? '10%' : '0'}) scale(1.1);
          opacity: ${opacity * 0.7};
        }
        50% {
          transform: translateX(${direction === 'horizontal' ? '20%' : '0'}) translateY(${direction === 'vertical' ? '20%' : '0'}) scale(1.2);
          opacity: ${opacity * 0.5};
        }
        75% {
          transform: translateX(${direction === 'horizontal' ? '10%' : '0'}) translateY(${direction === 'vertical' ? '10%' : '0'}) scale(1.1);
          opacity: ${opacity * 0.7};
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      blinds.forEach(blind => {
        if (blind.parentNode) {
          blind.parentNode.removeChild(blind);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [colors, speed, opacity, direction, count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
      }}
    />
  );
}
