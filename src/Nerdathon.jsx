import React from "react";

function Nerdathon() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">Nerdathon</h1>
          <nav className="space-x-6">
            <a href="#about" className="text-gray-700 hover:text-purple-700">About</a>
            <a href="#problems" className="text-gray-700 hover:text-purple-700">Problem Statements</a>
            <a href="#judges" className="text-gray-700 hover:text-purple-700">Judges</a>
            <a href="#schedule" className="text-gray-700 hover:text-purple-700">Schedule</a>
            <a href="#partners" className="text-gray-700 hover:text-purple-700">Partners</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-700">Contact</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-700">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Nerdathon</h1>
          <p className="text-xl mb-6">Innovating the Future of Technology, Together.</p>
          <p className="text-lg mb-4">Offline | 2 - 5 Team Members</p>
          <p className="text-md mb-6">Registration ends: October 20, 2025</p>
          <button 
            className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
            onClick={() => window.location.href = '/register'}
          >
            Register Now
          </button>
          <p className="text-3xl font-bold mt-8">Stand a chance to win cash prizes worth INR 15 Lakhs</p>
        </div>
      </section>

      {/* Problem Statements Section */}
      <section id="problems" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Problem Statements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Optimizing Peak Usage in Tech Apps</h3>
              <p className="text-gray-600 mb-4">During peak hours, wait times on tech apps lead to user frustration and disengagement.</p>
              <a href="#problem1" className="text-purple-700 hover:underline">View More</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Monetizing Tech Data</h3>
              <p className="text-gray-600 mb-4">Leverage vast user data in tech services while addressing ethical and technical challenges.</p>
              <a href="#problem2" className="text-purple-700 hover:underline">View More</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Accessible Designs for Visually Impaired Users</h3>
              <p className="text-gray-600 mb-4">Create inclusive tech apps with better accessibility features for visually impaired users.</p>
              <a href="#problem3" className="text-purple-700 hover:underline">View More</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Reducing Customer Service Time in Tech</h3>
              <p className="text-gray-600 mb-4">Streamline identity verification and information gathering in customer support calls.</p>
              <a href="#problem4" className="text-purple-700 hover:underline">View More</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI to Accelerate Development in Tech</h3>
              <p className="text-gray-600 mb-4">Use AI to cut development time and costs in creating tech solutions.</p>
              <a href="#problem5" className="text-purple-700 hover:underline">View More</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Efficient Content Discovery in Tech Ecosystems</h3>
              <p className="text-gray-600 mb-4">Improve recommendation systems for content in connected tech ecosystems.</p>
              <a href="#problem6" className="text-purple-700 hover:underline">View More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Phase-1 Judges | Idea Submissions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Arun Joseph</h3>
              <p className="text-gray-600">Architecture & Engineering Leader: Applied AI</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Pankaj Arora</h3>
              <p className="text-gray-600">Senior Director - Magenta Products and Platforms</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Reghu Ram Thanumalayan</h3>
              <p className="text-gray-600">Senior Vice President, Fintech Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-lg">Tue Oct 1 2025 - Registration Opens</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <p className="text-lg">Thu Oct 10 2025 - Idea Submission Deadline</p>
            </div>
            <p className="text-sm text-gray-500 italic text-center">*Timeline is subject to change/tentative</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partners</h2>
          <div className="flex justify-center space-x-12">
            <img src="https://example.com/volkswagen-logo.png" alt="Volkswagen" className="h-20" />
            <img src="https://example.com/hack2skill-logo.png" alt="Hack2skill" className="h-20" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact us for queries</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:nerdathon@hack2skill.com" className="text-purple-700 hover:text-purple-900">Email Us</a>
            <a href="https://discord.gg/example" className="text-purple-700 hover:text-purple-900">Join Discord</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Who can participate?</h3>
              <p className="text-gray-600">Nerdathon is open for professionals, startups, and student developers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What are the phases?</h3>
              <p className="text-gray-600">Idea Submission phase followed by Prototype Development phase.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How to form a team?</h3>
              <p className="text-gray-600">Join the Discord server to find team members. <a href="https://discord.gg/example" className="text-purple-700 hover:underline">Join Discord Community</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-6 text-center">
        <p>&copy; 2025 Hack2skill. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="https://twitter.com/hack2skill" className="hover:underline">Twitter</a>
          <a href="https://linkedin.com/company/hack2skill" className="hover:underline">LinkedIn</a>
          <a href="https://youtube.com/@hack2skill" className="hover:underline">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default Nerdathon;