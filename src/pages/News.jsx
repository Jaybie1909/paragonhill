"use client";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag, Clock, Gem } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function News() {
  const articles = [
    {
      id: 1,
      img: "/images/citrine.png",
      title: "Project Cluster Citrine",
      category: "citrine90b",
      date: "July 30, 2025",
      author: "admin",
      excerpt:
        "Ini kesempatan terakhirmu, jadikan rumah impian ini milikmu hari ini juga. Property dengan investasi tinggi dan pertumbuhan tersedia tipe 90",
      featured: true,
      readTime: "5 min read"
    },
    {
      id: 2,
      img: "/images/berlian.png",
      title: "Project Cluster Berlian",
      category: "berlian",
      date: "July 30, 2025",
      author: "admin",
      excerpt:
        "Rumah seperti ini jarang ada. Hanya tersisa beberapa unit, sekaranglah saatnya untuk mengamankan rumah impian Anda di tepi laut tersedia",
      featured: false,
      readTime: "4 min read"
    },
    {
      id: 3,
      img: "/images/ametis.jpg",
      title: "Project Cluster Ametis",
      category: "ametis",
      date: "July 30, 2025",
      author: "admin",
      excerpt:
        "Lebih dari sekedar rumah, desain yang memberikan keluarga Anda ruang untuk tumbuh, bersantai dan menikmati hidup berdampingan. Dengan semua kenyamanan",
      featured: false,
      readTime: "6 min read"
    },
  ];

  const categoryColors = {
    citrine90b: "from-yellow-500 to-orange-500",
    berlian: "from-blue-500 to-indigo-500", 
    ametis: "from-purple-500 to-pink-500"
  };

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
            className="absolute top-20 right-20 w-40 h-40 border-2 border-green-400/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-40 w-24 h-24 bg-green-500/10 rounded-lg transform rotate-12"
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
              <span className="text-green-400 font-medium tracking-wider text-lg">LATEST UPDATES</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
              News &
              <span className="block text-green-400">Updates</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              Temukan perkembangan terbaru proyek-proyek premium Paragon Hill Batam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Articles Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eksplorasi cluster-cluster premium dengan desain eksklusif dan fasilitas terdepan
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                
                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Gem size={12} />
                    <span>FEATURED</span>
                  </div>
                )}

                {/* Enhanced Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${categoryColors[article.category] || 'from-gray-500 to-gray-600'} text-white px-3 py-1 rounded-lg text-sm font-medium capitalize backdrop-blur-sm`}>
                    {article.category}
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User size={14} />
                    <span>By {article.author}</span>
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Enhanced CTA */}
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href="#"
                      className="group/link inline-flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold transition-all duration-300"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight 
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                      />
                    </a>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-gray-50 to-green-50 p-12 rounded-2xl border border-green-100 relative overflow-hidden">
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-transparent rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100 to-transparent rounded-full transform -translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Tag className="text-white" size={20} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Stay Updated
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Jangan lewatkan update terbaru tentang proyek-proyek premium kami. 
                  Daftarkan diri Anda untuk mendapatkan informasi eksklusif langsung ke email Anda.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300"
                  />
                  <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-sm text-gray-500">
                  * We respect your privacy. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}