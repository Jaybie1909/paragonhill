"use client";
import { motion } from "framer-motion";
import { Target, Eye, Building, Award, MapPin, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>About Us - Paragon Hill Batam | Hunian Premium</title>
        <meta
          name="description"
          content="Kenali Paragon Hill, hunian premium di Batam Center dengan standar internasional, lokasi strategis, dan komunitas eksklusif."
        />
        <link rel="canonical" href="https://jb-paragonhill.vercel.app/about" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/about/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-32 right-32 w-40 h-40 border-2 border-green-400/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-green-500/10 rounded-lg transform rotate-12"
            animate={{ y: [-10, 10, -10], rotate: [12, 24, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
              <span className="text-green-400 font-medium tracking-wider text-lg">ABOUT US</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
              Profil
              <span className="block text-green-400 text-5xl md:text-7xl">Paragon Hill</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              Menghadirkan hunian premium dengan standar internasional di jantung Batam Center
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 border border-green-100/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-200/40 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Building className="text-white" size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                PARAGON HILL
              </h2>
              <img src="/images/about/daun.svg" alt="Daun Logo Paragon Hill" className="h-12 w-auto opacity-80" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Hidup Nyaman dan Mewah di Batam Center
            </h3>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                Nikmati kenyamanan hidup di kawasan eksklusif Batam Center, di mana
                setiap hunian menyuguhkan pemandangan laut yang memukau. Berlokasi
                strategis dengan suasana yang tenang dan berkelas, lingkungan ini
                dirancang untuk Anda yang mengutamakan keindahan, kenyamanan, dan
                gaya hidup elegan dalam satu tempat istimewa.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Prime Location</h4>
              <p className="text-gray-600">Strategis di Batam Center</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Standar internasional</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Exclusive Living</h4>
              <p className="text-gray-600">Komunitas berkelas</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Image Section */}
      <section className="relative w-full">
        <div className="relative overflow-hidden">
          <img
            src="/images/about/about1.jpeg"
            alt="Pemandangan hunian Paragon Hill Batam"
            className="w-full h-[60vh] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Architectural Excellence</h3>
            <p className="text-lg text-gray-200">Modern design meets tropical living</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-green-500 transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-400 transform -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about/about2.jpg"
                  alt="Desain arsitektur Paragon Hill Batam"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 via-transparent to-black/20"></div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-green-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2025</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-full transform translate-x-12 -translate-y-12"></div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                      THE GOAL
                      <img src="/images/about/daun.svg" alt="Daun Logo Paragon Hill" className="h-6 w-auto ml-3 opacity-60" />
                    </h3>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700 text-lg">VISI</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Menjadi perusahaan pengembang property yang profesional & terpercaya yang dapat memberikan kontribusi untuk mengembangkan daerah khususnya Batam & sekitarnya, dengan mengedepankan konsep yang berwawasan lingkungan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
                      THE OUTLOOK
                      <img src="/images/about/daun.svg" alt="Daun Logo Paragon Hill" className="h-6 w-auto ml-3 opacity-60" />
                    </h3>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700 text-lg">MISI</h4>
                      <div className="text-gray-600 leading-relaxed space-y-2">
                        <p>• Membangun kawasan terpadu dengan perencanaan tata hijau dan desain terbaik selaras dengan potensi alam sekitarnya</p>
                        <p>• Membangun infrastruktur modern yang memenuhi standar mutu kelayakan</p>
                        <p>• Menciptakan produk property bermutu tinggi untuk memberikan nilai tambah investasi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
