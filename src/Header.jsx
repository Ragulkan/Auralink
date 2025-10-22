import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["About", "Why Auralinks?", "Explore", "Contact Us", "Join Us 🤝"];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Main Header Container */}
      <div className={`relative mx-4 sm:mx-6 lg:mx-8 mt-4 transition-all duration-500 ${
        scrolled ? "mt-3" : "mt-4"
      }`}>
        {/* Glass Background */}
        <div className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl transition-all duration-500 ${
          scrolled 
            ? "bg-white/15 border-white/25 shadow-2xl" 
            : "bg-white/5 border-white/15 shadow-xl"
        }`}>
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 pointer-events-none"></div>
          
          {/* Header Content */}
          <div className="relative flex justify-between items-center px-4 sm:px-4 py-2 z-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute mr-4 inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/logo.png" 
                  alt="Auralinks Logo" 
                  className="relative w-28 h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative px-6 py-3 text-[15px] font-semibold text-gray-800 hover:text-purple-700 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  
                  {/* Bottom Border Effect */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4/5 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Desktop Navigation for Medium Screens */}
            <nav className="hidden md:flex lg:hidden items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative px-4 py-3 text-sm font-semibold text-gray-800 hover:text-purple-700 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative p-3 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-gray-700 hover:text-purple-700 hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300/50"
              >
                {menuOpen ? (
                  <HiX className="text-xl" />
                ) : (
                  <HiMenu className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 backdrop-blur-sm bg-black/20"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Mobile Menu Container */}
          <div className="absolute top-24 right-4 left-4 backdrop-blur-2xl bg-white/15 border border-white/25 rounded-2xl shadow-2xl overflow-hidden">
            {/* Menu Header */}
            <div className="p-4 border-b border-white/20 bg-white/10">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-gray-700 hover:text-purple-700 hover:bg-white/20 transition-all duration-300"
                >
                  <HiX className="text-lg" />
                </button>
              </div>
            </div>
            
            {/* Menu Items */}
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center px-4 py-4 rounded-xl text-gray-800 hover:text-purple-700 font-medium hover:bg-white/20 border border-transparent hover:border-white/30 transition-all duration-300 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="flex-1">{item}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Menu Footer */}
            <div className="p-4 border-t border-white/20 bg-white/10">
              <div className="text-center text-sm text-gray-600">
                Auralinks © 2024
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        header {
          background: transparent;
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </header>
  );
}

export default Header;