'use client';

import React from 'react';

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
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradientBlinds {
            0%, 100% {
              opacity: ${opacity};
              transform: scale(1);
            }
            50% {
              opacity: ${opacity * 0.8};
              transform: scale(1.1);
            }
          }
        `
      }} />
      
      {Array.from({ length: count }, (_, i) => {
        const colorIndex = i % colors.length;
        const nextColorIndex = (i + 1) % colors.length;
        const alpha = Math.floor(opacity * 255).toString(16).padStart(2, '0');
        const color1 = colors[colorIndex] + alpha;
        const color2 = colors[nextColorIndex] + alpha;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(${direction === 'horizontal' ? '90deg' : '0deg'}, ${color1}, ${color2})`,
              transform: direction === 'horizontal' 
                ? `translateX(${(i / count) * 100}%) scaleX(${1 / count})`
                : `translateY(${(i / count) * 100}%) scaleY(${1 / count})`,
              transformOrigin: direction === 'horizontal' ? 'left center' : 'top center',
              animation: `gradientBlinds ${speed}s ease-in-out infinite`,
              animationDelay: `${(i / count) * speed}s`,
              pointerEvents: 'none'
            }}
          />
        );
      })}
    </div>
  );
};