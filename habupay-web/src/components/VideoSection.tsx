import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
export function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.4
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);
  // Build YouTube embed URL with parameters to hide branding, related videos, and enable autoplay+mute
  const videoSrc = hasStarted ?
  'https://www.youtube-nocookie.com/embed/7BOvW9rL0d0?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3&playsinline=1' :
  '';
  return (
    <section id="video" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-12">
          
          <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
            Conoce HABU
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Mira cómo funciona en menos de 2 minutos
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          ref={containerRef}
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="relative">
          
          {/* Decorative Background */}
          <div className="absolute -inset-4 bg-lime/10 rounded-3xl blur-2xl" />

          {/* Video Wrapper */}
          <div className="relative bg-black rounded-3xl shadow-2xl border-4 border-lime/20 overflow-hidden">
            <div className="aspect-video">
              {videoSrc ?
              <iframe
                src={videoSrc}
                title="HABU Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full" /> :


              <div className="w-full h-full bg-dark-900 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-lime border-t-transparent rounded-full animate-spin" />
                </div>
              }
            </div>
          </div>

          {/* Decorative Corner Dots */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-lime rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-lime rounded-full" />
        </motion.div>
      </div>
    </section>);

}