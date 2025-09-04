"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Phone, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-start bg-cover bg-center overflow-hidden pt-10"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      
      

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24">
        <div className="max-w-4xl">
          

          {/* Main Heading with Professional Typography */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tight"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            PARAGON
            <br />
            <span className="text-green-400 relative">
              HILL

            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-8 tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Commercial & Residence
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl font-light"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Hunian terbaik dengan mengusung konsep{" "}
            <span className="text-green-400 font-medium">hijau dan panorama laut</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* Primary CTA */}
            <Link
              to="plans"
              smooth={true}
              duration={600}
              offset={-80}
              className="group cursor-pointer"
            >
              <div className="flex items-center space-x-3 px-8 py-4 bg-green-700 hover:bg-green-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Play size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                <span className="font-semibold text-lg">Explore Properties</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center space-x-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="p-2 bg-white/20 rounded-full group-hover:bg-green-600/30 transition-colors duration-300">
                  <Phone size={16} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Talk to Expert</div>
                  <div className="font-semibold">Call Us Now</div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 flex flex-wrap gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400 tracking-wide">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15</div>
              <div className="text-sm text-gray-400 tracking-wide">Years Experience</div>
            </div>
            <div className="text-3xl font-bold text-gray-600">|</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">Premium</div>
              <div className="text-sm text-gray-400 tracking-wide">Location</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}