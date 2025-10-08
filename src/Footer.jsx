import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-mont mb-2">AuraLinks</h2>
          <p className="text-gray-400 font-mont">Hack. Learn. Build.</p>
        </div>

        {/* Navigation Links */}
    

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-mont mb-2">Contact Us</h3>
          <p>Email: auralinks25@gmail.com </p>
          <p>Phone: 8925172636 / 8940125273</p>
       
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 AuraLinks. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
