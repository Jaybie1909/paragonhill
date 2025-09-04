"use client";
import { motion } from "framer-motion";

export default function Developer() {
  return (
    <section
      id="developer"
      className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20 relative z-10">
        
        {/* Professional Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-green-700 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-green-700"></div>
            Developer Profile
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
            Our <span className="text-green-700">Developer</span>
          </h2>
        </motion.div>

        {/* First Professional Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <img
                src="/images/developer.jpg"
                alt="Developer"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            {/* Professional Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-lg opacity-30 rotate-45"></div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="text-green-700 font-semibold tracking-wider uppercase text-sm flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-px bg-green-700"></div>
              For You
              <div className="w-8 h-px bg-green-700"></div>
            </div>
            
            <h3 
              className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Provide a comfortable <br className="hidden lg:block" /> 
              <span className="text-green-700">one-stop living</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              PT. Sarana Bangun Sejati known as Sarana Developer was established
              in Batam in the year 2015
            </p>
          </motion.div>
        </div>

        {/* Second Professional Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content (Company Info) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Well-Developed by
              </h3>
              <img
                src="/images/sarana-developer.png"
                alt="Sarana Developer"
                className="w-64 lg:w-80 object-contain mx-auto"
              />
            </div>
            
            {/* Professional decorative element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-300 rounded-lg opacity-20 rotate-45"></div>
          </motion.div>

          {/* Right Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl text-gray-700 leading-relaxed space-y-6 border border-gray-100 relative"
          >
            <div className="space-y-5">
              <p className="text-lg">
                PT. Sarana Bangun Sejati di kenal sebagai Sarana Developer didirikan
                di Batam tahun 2015. Setelah mengamati perkembangan populasi dan
                pasar properti di Batam, kami memutuskan untuk memasuki bisnis
                properti sebagai seorang real estate developer.
              </p>
              
              <p className="text-lg">
                Kami menemukan lahan tanah yang memiliki aspek besar di Batam Centre dengan ukuran 13
                hektar. Lokasi tanah dekat dengan Bandara Internasional,
                International Ferry terminal, pusat perbelanjaan, universitas dan
                rumah sakit.
              </p>
              
              <p className="text-lg">
                Kami menamakan Proyek pertama PT. Sarana Bangun Sejati adalah
                <span className="font-bold text-green-700"> Paragon Hill</span>,
                sebuah kawasan dimana kami membangun ruko, perumahan, hotel bintang
                tiga dan juga sebuah plaza, dimana kami percaya dapat memberikan
                kenyamanan dengan One-Stop Living sebagai aspek yang kuat dalam
                menarik menjadi penghuni, pengusaha, investor melalui segala macam
                nilai-nilai yang diinginkan seorang individu.
              </p>
            </div>
            
            {/* Professional accent */}
            <div className="absolute top-4 right-4 w-20 h-1 bg-green-700 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-700 rounded-lg opacity-10 rotate-12"></div>
          </motion.div>
        </div>

        {/* Professional Stats Section */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2015</div>
              <div className="text-gray-300">Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">13</div>
              <div className="text-gray-300">Hectares</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Commitment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}