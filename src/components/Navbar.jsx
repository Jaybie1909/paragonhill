"use client";
import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/facilities", label: "Facilities" },
  { to: "/plans", label: "Plans" },
  { to: "/news", label: "News & Updates" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100" 
            : "bg-white/90 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Paragon Hill"
                className="h-12 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="cursor-pointer text-gray-700 hover:text-green-700 transition-all duration-300 font-medium relative group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* E-Brochure Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="/files/paragon-hill-ebrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Download size={16} />
              <span>e-Brochure</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <img src="/images/logo.png" alt="Paragon Hill" className="h-10" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-700">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <nav className="p-6 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-gray-700 hover:text-green-700 transition-colors cursor-pointer font-medium border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          
          <a
            href="/files/paragon-hill-ebrochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 py-3 px-4 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-lg font-medium mt-6 transition-all duration-300"
          >
            <Download size={16} />
            <span>Download e-Brochure</span>
          </a>
        </nav>
      </div>
    </>
  );
}
