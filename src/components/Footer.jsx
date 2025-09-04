"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-green-50 text-gray-800 py-16 px-6 relative overflow-hidden">
      {/* Geometric Triangle Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative triangles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-100/30 transform rotate-45"></div>
        <div className="absolute top-32 right-10 w-24 h-24 bg-green-200/40 transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-green-100/20 transform -rotate-12"></div>
        <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gray-100/40 transform rotate-45"></div>
        
        {/* Triangle pattern overlay */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="triangles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="5,0 10,10 0,10" fill="currentColor" className="text-green-600"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#triangles)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Professional Logo Section */}
        <motion.div
          className="flex justify-center items-center space-x-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/images/footer-logo1.png"
            alt="Footer Logo 1"
            className="h-20 w-auto filter brightness-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="/images/footer-logo2.png"
            alt="Footer Logo 2"
            className="h-20 w-auto filter brightness-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Professional Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h3 className="text-2xl font-bold tracking-wide text-gray-800 relative">
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              KANTOR PEMASARAN PARAGON HILL
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-green-700">PT. SARANA BANGUN SEJATI</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Komplek Ruko Paragon Hill Blok A1 No.1-2, Jalan Abulyatama Batam Center<br />
              Batam - Kepulauan Riau, Indonesia 29462
            </p>
          </div>

          {/* Professional Social Media Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a
              href="https://instagram.com/paragon.hill"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 bg-white shadow-lg border-2 border-pink-100 hover:border-pink-300 rounded-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <FaInstagram size={24} className="relative z-10 text-pink-600" />
              </div>
              <span className="font-medium text-lg">@paragon.hill</span>
            </a>
            
            <a
              href="https://tiktok.com/@paragonhillbatam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 bg-white shadow-lg border-2 border-gray-100 hover:border-gray-300 rounded-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <FaTiktok size={24} className="relative z-10 text-gray-800" />
              </div>
              <span className="font-medium text-lg">@paragonhillbatam</span>
            </a>
          </div>
        </motion.div>

        {/* Professional Divider with Triangle Pattern */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-500 rotate-45"></div>
        </div>

        {/* Professional Copyright Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6"
        >
          <p className="text-gray-600">
            Copyright © 2025{" "}
            <span className="text-green-600 font-semibold">
              Paragon Hill Batam
            </span>
            . All Rights Reserved.
          </p>
        </motion.div>

        {/* Professional Disclaimer */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg relative overflow-hidden"
        >
          {/* Triangle decoration in corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 transform rotate-45 translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 transform rotate-45 -translate-x-6 translate-y-6"></div>
          
          <p className="text-xs text-gray-500 leading-relaxed text-justify max-w-6xl mx-auto relative z-10">
            <strong className="text-gray-700">Disclaimer:</strong> While every effort has been made to ensure the accuracy of
            the information herein at the time of press, the developer and our
            agents make no warranty, representation or undertaking whether
            expressed or implied, nor does it assume any legal liability, whether
            direct or indirect, or responsibility for the accuracy, completeness
            or usefulness of any information. The information herein is subject to
            change and does not form part of any offer contract. All layouts are
            not to scale and all illustrations are artist impressions only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}