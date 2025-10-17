'use client';

import { useEffect, useRef, useState } from 'react';

interface StackCard {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

const cards: StackCard[] = [
  {
    id: 1,
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that position your business for long-term success in competitive markets.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    color: 'from-purple-900/90 to-purple-700/90',
  },
  {
    id: 2,
    title: 'Visual Identity',
    description: 'Create stunning visual identities that capture your brand essence and resonate with your target audience.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    color: 'from-blue-900/90 to-blue-700/90',
  },
  {
    id: 3,
    title: 'Digital Presence',
    description: 'Build powerful digital experiences that engage users and drive measurable business results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    color: 'from-emerald-900/90 to-emerald-700/90',
  },
  {
    id: 4,
    title: 'Content Creation',
    description: 'Produce compelling content that tells your story and connects with your audience on every platform.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
    color: 'from-orange-900/90 to-orange-700/90',
  },
];

export function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - containerTop) / (containerHeight + windowHeight))
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-32 lg:py-40 overflow-hidden"
      style={{ minHeight: `${cards.length * 100}vh` }}
    >
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tight">
          Our Process
          <span className="text-[#00ff9d]">.</span>
        </h2>
        <p className="text-xl text-white/70 mt-4 max-w-2xl">
          A systematic approach to building brands that stand out and deliver results.
        </p>
      </div>

      {/* Stacking Cards Container */}
      <div className="sticky top-20 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="relative h-[70vh]">
          {cards.map((card, index) => {
            // Calculate when each card should be active
            const cardProgress = scrollProgress * cards.length - index;
            const isActive = cardProgress >= 0 && cardProgress < 1;
            const isPast = cardProgress >= 1;

            // Stack offset calculation
            const stackOffset = Math.max(0, Math.min(1, cardProgress)) * 20;
            const scale = isPast ? 0.9 : 1 - Math.max(0, Math.min(0.1, (1 - cardProgress) * 0.1));
            const opacity = isPast ? 0.5 : 1;

            return (
              <div
                key={card.id}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
                style={{
                  transform: `translateY(${index * 20 - stackOffset}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: cards.length - index,
                  top: `${index * 20}px`,
                }}
              >
                {/* Card Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />
                </div>

                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-12">
                  <div className="max-w-xl">
                    {/* Card Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00ff9d]/20 border-2 border-[#00ff9d] mb-6">
                      <span className="text-xl font-black text-[#00ff9d]">
                        {String(card.id).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#00ff9d] animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:flex items-center gap-2">
        {cards.map((card, index) => {
          const cardProgress = scrollProgress * cards.length - index;
          const isActive = cardProgress >= 0 && cardProgress < 1;

          return (
            <div
              key={card.id}
              className={`h-1 rounded-full transition-all duration-300 ${
                isActive ? 'bg-[#00ff9d] w-12' : 'bg-white/30 w-8'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

