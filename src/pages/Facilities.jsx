"use client";
import { motion } from "framer-motion";
import { Shield, Camera, Zap, Home, Droplets, Lock, MapPin, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Facilities() {
  const facilities = [
    { 
      name: "Jogging Track", 
      icon: MapPin,
      description: "Lintasan jogging yang mengelilingi area perumahan untuk gaya hidup sehat"
    },
    { 
      name: "Security 24 Jam", 
      icon: Shield,
      description: "Keamanan terjamin dengan petugas yang berjaga selama 24 jam"
    },
    { 
      name: "CCTV 24 Jam", 
      icon: Camera,
      description: "Sistem pemantauan CCTV yang aktif sepanjang waktu"
    },
    { 
      name: "Penangkal Petir 2 Tower", 
      icon: Zap,
      description: "Sistem perlindungan petir dengan 2 tower untuk keamanan maksimal"
    },
    { 
      name: "Bak Penampung Air", 
      icon: Droplets,
      description: "Sistem penyimpanan air bersih untuk kebutuhan sehari-hari"
    },
    { 
      name: "Autogate System", 
      icon: Lock,
      description: "Gerbang otomatis untuk kemudahan akses dan keamanan ekstra"
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/about/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-green-400/20 transform rotate-45"
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-40 w-20 h-20 bg-green-500/10 rounded-lg transform rotate-12"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-1 bg-green-500"></div>
              <span className="text-green-400 font-medium tracking-wider text-lg">PREMIUM AMENITIES</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
              FACILITIES
              <span className="block text-green-400 text-4xl md:text-6xl font-light">World Class Living</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              Nikmati fasilitas premium yang mendukung gaya hidup modern Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 border border-green-100/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-200/40 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Home className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent flex items-center">
                    PARAGON HILL
                    <img src="/images/about/daun.svg" alt="Daun Logo" className="h-10 w-auto ml-4 opacity-70" />
                  </h2>
                  <h3 className="text-xl font-semibold text-green-600 mt-2">FASILITAS PREMIUM</h3>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Nikmati berbagai fasilitas penunjang di kawasan ekslusif Batam Centre yang dirancang untuk memberikan kenyamanan maksimal bagi setiap penghuni.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                  <Star className="text-green-600 mb-2" size={24} />
                  <p className="text-sm font-semibold text-gray-800">Premium Quality</p>
                  <p className="text-xs text-gray-600">Fasilitas berkelas internasional</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                  <Shield className="text-green-600 mb-2" size={24} />
                  <p className="text-sm font-semibold text-gray-800">24/7 Security</p>
                  <p className="text-xs text-gray-600">Keamanan terjamin sepanjang waktu</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Mengapa Memilih Paragon Hill?</h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Nikmati kenyamanan hidup di kawasan eksklusif Batam Center, di mana
                  setiap hunian menyuguhkan pemandangan laut yang memukau. Berlokasi
                  strategis dengan suasana yang tenang dan berkelas, lingkungan ini
                  dirancang untuk Anda yang mengutamakan keindahan, kenyamanan, dan
                  gaya hidup elegan dalam satu tempat istimewa.
                </p>
                
                <div className="flex items-center space-x-3 text-green-600">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="font-semibold">Premium Lifestyle Guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Full Image with Overlay */}
      <section className="relative w-full">
        <div className="relative overflow-hidden">
          <img
            src="/images/facilities/facilities1.jpg"
            alt="Facilities"
            className="w-full h-[120vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 max-w-3xl px-6">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold"
              >
                Fasilitas Lengkap
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200"
              >
                Setiap detail dirancang untuk kenyamanan dan kemudahan hidup Anda
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Premium Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fasilitas lengkap untuk mendukung gaya hidup modern dan nyaman
            </p>
          </motion.div>

          {/* Enhanced Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => {
              const IconComponent = facility.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-50 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      {facility.name}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {facility.description}
                    </p>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to Experience Premium Living?
                </h3>
                <p className="text-green-100 text-lg">
                  Hubungi kami untuk informasi lebih lanjut tentang fasilitas premium di Paragon Hill
                </p>
                <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-6">
                  Contact Us Today
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}