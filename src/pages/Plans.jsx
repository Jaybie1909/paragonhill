"use client";
import { motion } from "framer-motion";
import { ChevronDown, Home, Ruler, Eye, Download, ZoomIn } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Plans() {
  const plans = [
    {
      id: 1,
      image: "/images/plans/plans1.jpg",
      title: "Master Plan Overview",
      description: "Tata letak keseluruhan kawasan Paragon Hill dengan perencanaan yang matang"
    },
    {
      id: 2,
      image: "/images/plans/plans2.jpeg",
      title: "Cluster Layout Design",
      description: "Desain cluster yang mengoptimalkan ruang hidup dan area komunal"
    },
    {
      id: 3,
      image: "/images/plans/plans3.jpeg",
      title: "Unit Floor Plans",
      description: "Denah lantai unit rumah dengan tata ruang yang efisien dan modern"
    },
    {
      id: 4,
      image: "/images/plans/plans4.jpeg",
      title: "Landscape Architecture",
      description: "Perencanaan lansekap yang harmonis dengan lingkungan sekitar"
    },
    {
      id: 5,
      image: "/images/plans/plans5.jpeg",
      title: "Infrastructure Planning",
      description: "Sistem infrastruktur modern yang mendukung kehidupan berkualitas"
    },
    {
      id: 6,
      image: "/images/plans/plans6.jpeg",
      title: "Facility Distribution",
      description: "Sebaran fasilitas umum yang strategis dan mudah diakses"
    },
    {
      id: 7,
      image: "/images/plans/plans7.jpeg",
      title: "Development Phases",
      description: "Tahapan pembangunan yang terencana dan berkelanjutan"
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/about/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-green-400/20 transform rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-40 w-20 h-20 bg-green-500/10 rounded-lg"
            animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 left-20 w-16 h-16 border border-green-400/30 rounded-full"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-1 bg-green-500"></div>
              <span className="text-green-400 font-medium tracking-wider text-lg">ARCHITECTURAL EXCELLENCE</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
              We Light Perfection
              <span className="block text-green-400 text-4xl md:text-6xl font-light">
                in Visual & Function
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-4xl leading-relaxed">
              Setiap detail direncanakan dengan presisi untuk menciptakan harmoni sempurna 
              antara estetika dan fungsionalitas
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-start space-y-4 pt-8"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center space-x-3"
              >
                <ChevronDown className="w-8 h-8 text-green-400" />
                <span className="text-white uppercase tracking-widest font-semibold text-lg">
                  SEE UNIT PLANS
                </span>
              </motion.div>
              
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Home size={16} />
                  <span className="text-sm">7 Detailed Plans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ruler size={16} />
                  <span className="text-sm">Precision Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye size={16} />
                  <span className="text-sm">Visual Excellence</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Plans Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Master Plans & Layouts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Eksplorasi setiap detail perencanaan yang telah dirancang khusus untuk memberikan 
              pengalaman hidup terbaik di Paragon Hill Batam
            </p>
          </motion.div>

          {/* Enhanced Plans Grid */}
          <div className="space-y-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                
                {/* Image Container */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300">
                        <ZoomIn size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-300">
                        <Download size={20} />
                      </button>
                    </div>
                    
                    {/* Plan Number Badge */}
                    <div className="absolute bottom-6 left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                      Plan {plan.id}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{plan.id}</span>
                      </div>
                      <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                      {plan.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                      <Ruler className="text-green-600 mb-2" size={24} />
                      <p className="text-sm font-semibold text-gray-800">Precise Measurements</p>
                      <p className="text-xs text-gray-600">Dimensi akurat</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                      <Eye className="text-green-600 mb-2" size={24} />
                      <p className="text-sm font-semibold text-gray-800">Visual Clarity</p>
                      <p className="text-xs text-gray-600">Detail yang jelas</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                      <Download size={20} />
                      <span>Download Plan</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-gray-800 to-black p-12 rounded-2xl text-white relative overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 border border-green-400/20 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border border-green-400/20 rounded-full transform -translate-x-16 translate-y-16"></div>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Home className="text-white" size={20} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Ready to See More?
                  </h3>
                </div>
                
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Dapatkan akses lengkap ke semua rencana unit dan jadwalkan kunjungan pribadi 
                  untuk melihat langsung keunggulan Paragon Hill Batam
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Schedule Site Visit
                  </button>
                  <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
                    Download All Plans
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}