import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0c0024] via-[#180040] to-[#3a0091] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#b24cff] to-[#00d4ff] text-transparent bg-clip-text mb-2">
              AuraLinks
            </h2>
            <p className="text-gray-300 text-sm">Hack. Learn. Build.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/company/auralinks-edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-white/10 hover:bg-gradient-to-r from-[#b24cff] to-[#00d4ff] flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com/auralinks.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-white/10 hover:bg-gradient-to-r from-[#b24cff] to-[#00d4ff] flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297zm7.72 0c-.36 0-.652-.292-.652-.652s.292-.652.652-.652c.36 0 .652.292.652.652s-.292.652-.652.652zm1.386-3.008c0 .36-.292.652-.652.652-.36 0-.652-.292-.652-.652s.292-.652.652-.652c.36 0 .652.292.652.652zm-1.386 2.356c.36 0 .652-.292.652-.652s-.292-.652-.652-.652c-.36 0-.652.292-.652.652s.292.652.652.652z"/>
              </svg>
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">auralinks25@gmail.com</p>
            <p className="text-gray-300 text-sm">8925172636 / 8940125273</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#b24cff]/30 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AuraLinks. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;