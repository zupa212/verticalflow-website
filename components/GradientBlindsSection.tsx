'use client';

import { motion } from 'framer-motion';
import GradientBlinds from './Backgrounds/GradientBlinds';

export function GradientBlindsSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Gradient Blinds Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <GradientBlinds
          gradientColors={['#3b82f6', '#06b6d4', '#8b5cf6', '#06b6d4', '#3b82f6', '#1d4ed8']}
          angle={0}
          noise={0.1}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            className="text-6xl sm:text-7xl lg:text-[120px] xl:text-[140px] font-black leading-[0.9] tracking-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Creative
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Vision</span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] mb-16 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            ANIMATED BACKGROUND
          </motion.p>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Dynamic</h3>
                <p className="text-white/70">Animated gradient strips create visual depth and movement</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Smooth</h3>
                <p className="text-white/70">Optimized animations for 120fps mobile performance</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Modern</h3>
                <p className="text-white/70">Contemporary design with professional aesthetics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
