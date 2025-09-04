"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
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
            Get In Touch
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
            Contact <span className="text-green-700">Us</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your dream home a reality? Our expert team is here to guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Professional Office Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sales Office Location</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>KANTOR PEMASARAN PARAGON HILL</strong><br />
                      PT. Sarana Bangun Sejati<br />
                      Komplek Ruko Paragon Hill Blok A1 No.1-2,<br />
                      Jalan Abulyatama Batam Center,<br />
                      Batam - Kepulauan Riau, Indonesia 29462
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-green-700 font-semibold">+62 812-3456-7890</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">@paragon.hill</p>
                      <p className="text-gray-600">@paragonhillbatam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Map Container */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.020492791938!2d104.039!3d1.130!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989d7c7e3dbf9%3A0x123456789!2sBatam%20Center!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* Professional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              className="bg-white rounded-2xl p-8 shadow-xl space-y-6 border border-gray-100"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message! We'll get back to you soon.");
              }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+62 xxx xxx xxxx"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your interest in Paragon Hill..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}