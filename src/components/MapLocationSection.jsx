import React from 'react';
import { motion } from 'framer-motion';

const MapLocationSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Professional Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-700 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3"
          >
            <div className="w-12 h-px bg-green-700"></div>
            Lokasi Strategis
            <div className="w-12 h-px bg-green-700"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6"
            style={{ 
              fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            Peta <span className="text-green-700 relative">
              Lokasi
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-green-700 rounded-full opacity-20"></div>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Temukan lokasi strategis properti kami yang memberikan akses mudah ke berbagai fasilitas penting
          </motion.p>
        </motion.div>

        {/* Professional Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Professional Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-300 rounded-lg opacity-20 rotate-45"></div>
          
          {/* Main Map Container */}
          <div className="relative bg-white backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-100">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <motion.img
                src="/images/peta.png"
                alt="Peta Lokasi Rumah - Strategic Location"
                className="w-full h-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </motion.div>


          </div>
        </motion.div>

        {/* Professional Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Strategic Location Benefits</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Positioned at the heart of Batam's business district, our development offers unparalleled connectivity 
              to major transportation hubs, commercial centers, and essential services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5 min</div>
                <div className="text-sm text-gray-400">To Airport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">10 min</div>
                <div className="text-sm text-gray-400">To Ferry Terminal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3 min</div>
                <div className="text-sm text-gray-400">To Shopping Mall</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2 min</div>
                <div className="text-sm text-gray-400">To Hospital</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocationSection;