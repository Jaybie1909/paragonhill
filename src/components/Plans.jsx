"use client";
import { motion } from "framer-motion";

export default function Plans() {
  return (
    <>
      {/* Professional PLAN Highlight Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
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
                WE LIGHT{" "}
                <span className="text-green-700 relative">
  PERFECTION
  
</span>

                <br />
                IN VISUAL & FUNCTION
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                Similar to a skilled artisan skillfully hand printing intricate
                designs on fabric, we champion perfection in the art of facility
                and design.
              </motion.p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Professional Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="/images/model.jpg"
                    alt="Model Rumah"
                    className="w-full h-auto object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Plans Section */}
      <section id="plans" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Professional Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-green-700 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-green-700"></div>
              Property Plans
              <div className="w-12 h-px bg-green-700"></div>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
              style={{ 
                fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              Master <span className="text-green-700">Plans</span>
            </h2>
          </motion.div>

          {/* First Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            
            {/* Left side image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <img
                  src="/images/plan2.jpeg"
                  alt="Plan 2"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              
              {/* Professional decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
            </motion.div>

            {/* Right side content */}
            <div className="flex flex-col space-y-8">
              
              {/* Top image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <img
                    src="/images/plan1.png"
                    alt="Plan 1"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                
                {/* Professional decorative element */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>
              </motion.div>

              {/* Professional Text Content */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left font-medium">
                  Satu-satunya real estate yang menawarkan hunian terbaik dengan
                  konsep <span className="text-green-700 font-bold">Tata Hijau & Panorama Laut</span> di Batam.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Professional Masterplan Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Master Plan Overview
            </h3>
            
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-5xl mx-auto">
              <img
                src="/images/masterplan.jpg"
                alt="Master Plan"
                className="w-full rounded-xl shadow-lg"
              />
              
              {/* Professional overlay info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gray-900/90 backdrop-blur-sm text-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-2">Comprehensive Development</h4>
                  <p className="text-gray-300">Strategic layout designed for optimal living experience and investment value</p>
                </div>
              </div>
              
              {/* Professional decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}