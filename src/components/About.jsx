"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, MapPin, Award, Users, ChevronRight, Home } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const clusters = [
    { name: "Commercial Area", type: "commercial", icon: Building2 },
    { name: "Cluster Ametis", type: "residential", icon: Home },
    { name: "Cluster Citrine", type: "residential", icon: Home },
    { name: "Cluster Crystal", type: "residential", icon: Home },
    { name: "Cluster Berlian", type: "residential", icon: Home },
    { name: "Cluster Diamond", type: "residential", icon: Home },
    { name: "Cluster Emerald", type: "residential", icon: Home },
  ];

  const stats = [
    { number: "7+", label: "Premium Clusters", icon: Building2 },
    { number: "500+", label: "Happy Families", icon: Users },
    { number: "15", label: "Years Experience", icon: Award },
    { number: "100%", label: "Sea View", icon: MapPin },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-green-700 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-px bg-green-700"></div>
            <Building2 size={16} />
            Tentang Paragon Hill
            <div className="w-12 h-px bg-green-700"></div>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
            style={{ 
              fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            Kawasan Eksklusif di
            <br />
            <span className="text-green-700 relative">
              Jantung Batam Center
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-green-700 rounded-full opacity-20"></div>
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.png"
                alt="About Paragon Hill"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Professional Stats Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Nikmati Kemewahan di Setiap Sudut
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nikmati kenyamanan hidup di kawasan eksklusif Batam Center, di mana
                setiap hunian menyuguhkan <span className="text-green-700 font-semibold">pemandangan laut yang memukau</span>. 
                Berlokasi strategis dengan suasana yang tenang dan berkelas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lingkungan ini dirancang untuk Anda yang mengutamakan <span className="text-gray-900 font-semibold">keindahan, 
                kenyamanan, dan gaya hidup elegan</span> dalam satu tempat istimewa.
              </p>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.slice(2).map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="inline-flex p-3 bg-green-700 rounded-lg text-white mb-3">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Clusters Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Pilihan Cluster Premium
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clusters.map((cluster, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gray-100 group-hover:bg-green-700 text-gray-600 group-hover:text-white transition-all duration-300 mb-4">
                  <cluster.icon size={24} />
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {cluster.name}
                </h4>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                    cluster.type === 'commercial' 
                      ? 'bg-gray-100 text-gray-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {cluster.type === 'commercial' ? 'Komersial' : 'Residensial'}
                  </span>
                  
                  <ChevronRight 
                    size={16} 
                    className="text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>

                {/* Professional Hover Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-200 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#facilities"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-semibold text-lg">Explore Facilities</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-green-700 border-2 border-green-200 hover:border-green-300 hover:bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-semibold text-lg">Contact Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}