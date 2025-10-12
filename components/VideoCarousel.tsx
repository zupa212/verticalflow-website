'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Reel {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  videoUrl?: string;
  posterUrl?: string;
  backgroundColor: string;
  textColor?: string;
}

const reels: Reel[] = [
  {
    id: 1,
    title: 'ΤΖΙΡΟΣ 100.000',
    subtitle: 'FINTECH 2024',
    description: 'ΕΞΟΔΑ 80.000 • 20.000 • 19% ΦΟΡΟ',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    backgroundColor: '#1e1540',
    textColor: '#ffd700',
  },
  {
    id: 2,
    title: 'Πες μας τι χρειάζεσαι',
    subtitle: 'B2C APP 2023',
    description: 'Είδος Εργασίας • Αντικείμενο Εργασίας',
    posterUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    backgroundColor: '#d4c5b0',
    textColor: '#ff6b35',
  },
  {
    id: 3,
    title: 'ΚΑΛΟΣ ΣΑΜΑΡΙΤΗΣ',
    subtitle: 'BRAND IDENTITY 2023',
    description: 'Premium banking solutions',
    posterUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80',
    backgroundColor: '#0a3d2e',
    textColor: '#ffd700',
  },
  {
    id: 4,
    title: 'μόνο μια φ©',
    subtitle: 'WEB 3.0 2023',
    description: 'Innovative digital experience',
    posterUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    backgroundColor: '#000000',
    textColor: '#ffeb3b',
  },
  {
    id: 5,
    title: 'LUXURY BRAND',
    subtitle: 'E-COMMERCE 2024',
    description: 'Premium online shopping experience',
    posterUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    backgroundColor: '#2d1810',
    textColor: '#ffffff',
  },
  {
    id: 6,
    title: 'TECH STARTUP',
    subtitle: 'SaaS PLATFORM 2024',
    description: 'Revolutionary software solution',
    posterUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    backgroundColor: '#1a1a2e',
    textColor: '#00d4ff',
  },
  {
    id: 7,
    title: 'SOCIAL IMPACT',
    subtitle: 'NON-PROFIT 2023',
    description: 'Making a difference together',
    posterUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1200&q=80',
    backgroundColor: '#2c3e50',
    textColor: '#e74c3c',
  },
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemHeight = containerRef.current.clientHeight;
      containerRef.current.scrollTo({
        top: index * itemHeight,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
      setIsPlaying(false);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const itemHeight = containerRef.current.clientHeight;
      const newIndex = Math.round(scrollTop / itemHeight);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < reels.length) {
        setCurrentIndex(newIndex);
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const goNext = () => {
    if (currentIndex < reels.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe up
      goNext();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe down
      goPrev();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isPlaying]);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="w-full h-screen snap-start snap-always flex items-center justify-center relative"
            style={{ backgroundColor: reel.backgroundColor }}
          >
            {/* Background Image/Video */}
            {reel.posterUrl && (
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={reel.posterUrl}
                  alt={reel.title}
                  className="w-full h-full object-cover opacity-70 lg:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
              </div>
            )}

            {/* Video Element (if video URL provided) */}
            {reel.videoUrl && (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.videoUrl}
                poster={reel.posterUrl}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                playsInline
                muted={isMuted}
              />
            )}

            {/* Mobile Content Layout - Instagram/TikTok Style */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-8 z-10">
              {/* Top Bar - Mobile */}
              <div className="flex items-start justify-between lg:hidden">
                <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2">
                  <p className="text-white text-xs font-semibold tracking-wide">
                    {reel.subtitle}
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{reel.id}</span>
                </div>
              </div>

              {/* Center Content - Desktop */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider">
                      {reel.subtitle}
                    </span>
                  </div>
                  <h2 
                    className="text-6xl xl:text-7xl font-black mb-4 tracking-tight"
                    style={{ color: reel.textColor || '#ffffff' }}
                  >
                    {reel.title}
                  </h2>
                  {reel.description && (
                    <p className="text-lg text-white/80 font-medium tracking-wide">
                      {reel.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Content - Mobile Style */}
              <div className="flex items-end justify-between gap-4">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <h2 
                    className="text-2xl sm:text-3xl lg:text-5xl font-black mb-2 tracking-tight leading-tight"
                    style={{ color: reel.textColor || '#ffffff' }}
                  >
                    {reel.title}
                  </h2>
                  {reel.description && (
                    <p className="text-xs sm:text-sm lg:text-base text-white/90 font-medium mb-3 lg:hidden">
                      {reel.description}
                    </p>
                  )}
                  <div className="hidden lg:block">
                    <span className="text-white/60 text-sm font-medium">{reel.id}/{reels.length}</span>
                  </div>
                </div>

                {/* Right Side - Actions (Mobile TikTok-style) */}
                <div className="flex flex-col gap-3 items-center lg:hidden">
                  {/* Play/Pause */}
                  {reel.videoUrl && (
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-95 transition-all duration-200"
                    >
                      {isPlaying && currentIndex === index ? (
                        <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
                      ) : (
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5" fill="white" />
                      )}
                    </button>
                  )}

                  {/* Mute/Unmute */}
                  {reel.videoUrl && (
                    <button
                      onClick={toggleMute}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-95 transition-all duration-200"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}

                  {/* Share/More */}
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-95 transition-all duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>

                  {/* Like */}
                  <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center active:scale-95 transition-all duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Desktop Controls */}
                <div className="hidden lg:flex items-center gap-4">
                  {reel.videoUrl && (
                    <>
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        {isPlaying && currentIndex === index ? (
                          <Pause className="w-6 h-6 text-white" fill="white" />
                        ) : (
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        )}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Desktop Only */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-2">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? 'bg-white w-2 h-8'
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
            }`}
            aria-label={`Go to reel ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <div className="hidden lg:flex fixed left-1/2 -translate-x-1/2 bottom-8 z-30 flex-col gap-4">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex === 0
              ? 'bg-white/10 opacity-50 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
          aria-label="Previous reel"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex === reels.length - 1}
          className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex === reels.length - 1
              ? 'bg-white/10 opacity-50 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
          aria-label="Next reel"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Progress Indicator - Mobile Bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {reels.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-white w-8'
                : currentIndex === index - 1 || currentIndex === index + 1
                ? 'bg-white/60 w-2'
                : 'bg-white/30 w-1.5'
            }`}
          />
        ))}
      </div>

      {/* Scroll Hint - First Reel Only */}
      {currentIndex === 0 && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-20 lg:bottom-32 z-20 text-white text-sm font-medium animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto" />
          <span className="text-xs block lg:hidden">Swipe Up</span>
          <span className="text-xs hidden lg:block">Scroll</span>
        </div>
      )}

      {/* Reel Counter - Top Center Mobile */}
      <div className="lg:hidden fixed top-4 left-1/2 -translate-x-1/2 z-30 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5">
        <span className="text-white text-xs font-bold">
          {currentIndex + 1} / {reels.length}
        </span>
      </div>
    </div>
  );
}
