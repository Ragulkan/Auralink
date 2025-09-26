import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Why Auralinks?", "Explore", "Contact Us", "Join Us 🤝"];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 bg-white text-black font-[Montserrat]  w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="w-28 h-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative group transition-colors duration-300"
            >
              <span className="group-hover:text-[rgb(135,0,154)]">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[rgb(135,0,154)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Glassmorphism */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-start pt-24 z-40"
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className="bg-white/20 backdrop-blur-md rounded-xl w-11/12 max-w-sm shadow-lg py-6"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
          >
            <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="relative group transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="group-hover:text-pink-400">{item}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
