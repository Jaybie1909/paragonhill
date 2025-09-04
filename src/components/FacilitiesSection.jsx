import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FacilitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const facilities = [
    { name: 'Bak Penampung Air', image: '/images/bak-penampung-air.png' },
    { name: 'CCTV Security', image: '/images/cctv.png' },
    { name: 'Jogging Track', image: '/images/jogging-track.png' },
    { name: 'Auto Gate System', image: '/images/autogate.png' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [facilities.length]);

  return (
    <div className="bg-white">
      
      {/* Professional Sustainability Section */}
      <section id="facilities" className="py-20 lg:py-32 relative overflow-hidden bg-gray-50">
        


        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-green-700 font-semibold tracking-wider uppercase text-sm flex items-center gap-3"
              >
                <div className="w-12 h-px bg-green-700"></div>
                For You
                <div className="w-12 h-px bg-green-700"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight tracking-tight"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em'
                }}
              >
                WE INVITE A SPLASH OF{" "}
                <span className="text-green-700 relative">
                  SUSTAINABILITY
                  
                </span>{" "}
                INTO LIFE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                Embracing a green concept, our vision involves reuniting you with the lush beauty of nature and fostering sustainability.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100">
                <img
                  src="/images/fasilitas.jpg"
                  alt="Facilities"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Professional Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Facilities Slider Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Professional Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-green-400 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-green-400"></div>
              Premium Amenities
              <div className="w-12 h-px bg-green-400"></div>
            </div>
            
            <h2 
              className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              Premium <span className="text-green-400">Facilities</span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience our world-class amenities designed for your comfort and security
            </p>
          </motion.div>

          {/* Professional Facilities Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center bg-white"
                >
                  <img
                    src={facilities[currentSlide].image}
                    alt={facilities[currentSlide].name}
                    className="max-h-full max-w-full object-contain"
                  />
                  
                  
                </motion.div>
              </AnimatePresence>

              {/* Professional Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {facilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-green-700 scale-125"
                        : "bg-gray-400 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Professional Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide(prev => prev === 0 ? facilities.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentSlide(prev => (prev + 1) % facilities.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesSection;