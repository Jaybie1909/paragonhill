"use client";
import { motion } from "framer-motion";

const news = [
  {
    img: "/images/citrine.png",
    title: "Project Cluster Citrine",
    date: "July 30, 2025",
    excerpt: "Kesempatan terakhir, jadikan rumah impian ini milikmu hari ini...",
  },
  {
    img: "/images/berlian.png",
    title: "Project Cluster Berlian",
    date: "July 30, 2025",
    excerpt: "Rumah seperti ini jarang ada. Hanya tersisa beberapa unit...",
  },
  {
    img: "/images/ametis.jpg",
    title: "Project Cluster Ametis",
    date: "July 30, 2025",
    excerpt:
      "Lebih dari sekedar rumah, desain yang memberikan keluarga Anda ruang...",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Professional Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-green-700 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-green-700"></div>
            Latest Updates
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
            News & <span className="text-green-700">Updates</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest developments and exclusive opportunities
          </p>
        </motion.div>

        {/* Professional News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <motion.article
              key={i}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Professional Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Professional date badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700">
                  {n.date}
                </div>
              </div>

              {/* Professional Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  {n.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {n.excerpt}
                </p>
                
                {/* Professional CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-green-700 hover:text-green-800 font-semibold transition-colors duration-300 group"
                  >
                    <span>Read More</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Professional View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <span>View All News</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}