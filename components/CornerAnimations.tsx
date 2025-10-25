'use client';

import { motion } from 'framer-motion';

export function CornerAnimations() {
  return (
    <>
      {/* Top Left */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          borderRadius: '47px 0 0 0',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Top Right */}
      <motion.div
        className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          borderRadius: '0 47px 0 0',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      />
      
      {/* Bottom Left */}
      <motion.div
        className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          borderRadius: '0 0 0 47px',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6
        }}
      />
      
      {/* Bottom Right */}
      <motion.div
        className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-[9999]"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          borderRadius: '0 0 47px 0',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0, 0.6, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.4
        }}
      />
    </>
  );
}
