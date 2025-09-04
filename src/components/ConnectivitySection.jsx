import React from 'react';
import { motion } from 'framer-motion';

const ConnectivitySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-green-400 font-semibold tracking-wider uppercase text-sm flex items-center gap-3"
              >
                <div className="w-8 h-px bg-green-400"></div>
                For You
                <div className="w-8 h-px bg-green-400"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight"
                style={{ 
                  fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em'
                }}
              >
                WE EMBRACE{' '}
                <span className="text-green-400 relative">
                  CONNECTIVITY
                  
                </span>{' '}
                AT THE CORE
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Nestled in the thriving city of{' '}
              <span className="text-green-400 font-semibold">Batam</span>, we connect you to everything you need.
            </motion.p>

            {/* Professional CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Explore Properties</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Professional Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Professional Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-600 rounded-lg opacity-20 rotate-45"></div>
            
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
            >
              <div className="rounded-xl relative overflow-hidden max-h-[500px] flex items-center justify-center bg-white">
                <motion.img
                  src="/images/connectivity.png"
                  alt="Connectivity - Modern Living in Batam"
                  className="w-full h-full object-contain object-center"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>

              {/* Professional Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl p-4 border border-gray-600"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">500+</div>
                    <div className="text-xs text-gray-300">Properties</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">15+</div>
                    <div className="text-xs text-gray-300">Locations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">98%</div>
                    <div className="text-xs text-gray-300">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;