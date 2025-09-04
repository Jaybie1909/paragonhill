"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


export default function Contact() {
  return (
    <>
      <Helmet>
    <title>Contact Us - Paragon Hill Batam</title>
    <meta name="description" content="Hubungi tim profesional Paragon Hill Batam untuk informasi properti premium dan hunian eksklusif." />
    <meta name="keywords" content="Paragon Hill, Batam, properti, hunian, premium, kontak" />
    <link rel="canonical" href="https://jb-paragonhill.vercel.app/contact" />
  </Helmet>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/about/header-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border border-green-400/20 transform rotate-45"
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 right-40 w-20 h-20 bg-green-500/10 transform rotate-12"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-1 bg-green-500"></div>
              <span className="text-green-400 font-medium tracking-wide">GET IN TOUCH</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
              Contact
              <span className="block text-green-400">Us Today</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light max-w-2xl">
              Ready to make your dream property a reality? Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced MAP Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border border-green-500 transform rotate-12"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-gray-400 transform -rotate-12"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={28} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-700 bg-clip-text text-transparent">
                LOCATION & CONTACT
              </h2>
            </div>
            <p className="text-xl text-gray-700 font-medium">Your Gateway to Premium Living</p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover our prime location and connect with our expert team to explore 
              exclusive property opportunities at Paragon Hill Batam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Map & Form Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Enhanced Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-gray-50 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="text-green-600 mr-3" size={28} />
                  Find Us Here
                </h3>
                <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.100070195908!2d104.0511!3d1.1301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98907e917c2f5%3A0x8d3d0d9c6e9f9287!2sBatam%20Center!5e0!3m2!1sen!2sid!4v1693567890123!5m2!1sen!2sid"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                    <Clock className="text-green-600 mb-2" size={20} />
                    <p className="text-sm font-medium text-gray-800">Office Hours</p>
                    <p className="text-xs text-gray-600">Mon-Sun: 9AM-6PM</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border border-green-100">
                    <MapPin className="text-green-600 mb-2" size={20} />
                    <p className="text-sm font-medium text-gray-800">Easy Access</p>
                    <p className="text-xs text-gray-600">Batam Center</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Enhanced Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                      <Send className="text-white" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Submit a Request
                    </h3>
                  </div>

                  <form className="space-y-6">
                    {/* Enhanced Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-4 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 bg-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Enhanced Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 bg-white"
                          required
                        />
                      </div>
                    </div>

                    {/* Enhanced Phone Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 bg-white"
                        />
                      </div>
                    </div>

                    {/* Enhanced Message Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageCircle className="absolute left-4 top-4 text-gray-400" size={20} />
                        <textarea
                          placeholder="Tell us about your property interests..."
                          rows="5"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 bg-white resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                  </form>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 border border-green-200/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-300/30 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our professional team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h4>
              <p className="text-gray-600 mb-4">Ready to assist you</p>
              <p className="text-lg font-semibold text-green-600 hover:text-green-700 cursor-pointer">
                +62 821 6989 8898
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h4>
              <p className="text-gray-600 mb-4">Drop us a line</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer">
                  admin@paragonhillbatam.id
                </p>
                <p className="text-sm font-medium text-green-600 hover:text-green-700 cursor-pointer">
                  paragonhill18@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Office Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h4>
              <p className="text-gray-600 mb-4">Our office location</p>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-800 mb-2">PARAGON HILL BATAM</p>
                <p className="font-medium text-green-600 mb-2">PT. SARANA BANGUN SEJATI</p>
                <p>Komplek Ruko Paragon Hill</p>
                <p>Blok A1 No.1-2</p>
                <p>Jl. Abulyatama Batam Center</p>
                <p>Batam - Kepulauan Riau</p>
                <p>Indonesia 29462</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}