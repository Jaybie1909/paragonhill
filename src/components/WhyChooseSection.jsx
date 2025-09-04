"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Home, Shield, MapPin, Droplets } from "lucide-react";

export default function WhyChooseSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Home,
      title: "Hunian Mewah",
      description: "Rasakan sensasi tinggal di hunian mewah dengan panorama laut yang menawan, sirkulasi udara yang sejuk, dan cahaya alami yang mengisi setiap sudut ruangan.",
    },
    {
      icon: Shield,
      title: "Bebas Banjir",
      description: "Hunian Paragon Hill dirancang dengan sistem drainase modern dan elevasi tinggi, sehingga lingkungan tetap aman, nyaman, dan bebas banjir sepanjang tahun.",
    },
    {
      icon: MapPin,
      title: "Lokasi Unggulan",
      description: "Paragon Hill terletak di lokasi unggulan dekat dengan Supermarket, Rumah Sakit, pusat perbelanjaan, Pelabuhan Ferry dan Universitas Ternama.",
    },
    {
      icon: Droplets,
      title: "Fasilitas Air Terjamin",
      description: "Air selalu tersedia kapan pun Anda butuhkan dengan fasilitas tangki cadangan dari developer yang siap menunjang kenyamanan hidup Anda.",
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Professional Section Header */}
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
            <CheckCircle size={16} />
            Keunggulan Paragon Hill
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
            Mengapa Anda harus mempertimbangkan
            <br />
            <span className="text-green-700 relative">
              Paragon Hill?
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-green-700 rounded-full opacity-20"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan alasan mengapa Paragon Hill menjadi pilihan terbaik untuk investasi masa depan dan hunian impian keluarga Anda.
          </p>
        </motion.div>

        {/* Professional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                
                {/* Professional Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gray-900 text-white shadow-lg mb-6 group-hover:bg-green-700 transition-all duration-300">
                  <feature.icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Professional Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl border border-gray-800">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Siap untuk memiliki hunian impian Anda?
            </h3>
            <p className="text-lg lg:text-xl mb-8 text-gray-300">
              Jangan lewatkan kesempatan emas ini. Hubungi kami sekarang untuk mendapatkan penawaran terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-700 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hubungi Sekarang
              </a>
              <a
                href="/files/paragon-hill-ebrochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200"
              >
                Download Brosur
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}