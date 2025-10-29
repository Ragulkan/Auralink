import "@fontsource/poppins/400.css"; // regular
import "@fontsource/poppins/600.css"; // medium
import "@fontsource/poppins/700.css"; // bold
import { useRef, useState, useEffect } from "react";

function Nerdathon() {
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const rulesRef = useRef(null);
  const faqsRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [shinePhase, setShinePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShinePhase((prev) => (prev + 1) % 3);
    }, 500); // Update every 0.5s for a 2s cycle (0 -> 1 -> 2)
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false); // Close menu after clicking a link
  };

  const getShineStyle = () => {
    switch (shinePhase) {
      case 0:
        return { boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" };
      case 1:
        return { boxShadow: "0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(109, 40, 217, 0.5)" };
      case 2:
        return { boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" };
      default:
        return { boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Banner Section */}
      <div className="md:static sticky top-16 w-full mx-auto px-0 z-0">
        <img 
          src="nerdathonbanner.png" 
          alt="Nerdathon Banner" 
          className="w-full h-auto shadow-lg transform hover:scale-[1.01] transition-transform duration-300" 
        />
      </div>

      {/* Sticky Navigation Section */}
      <div className="md:sticky md:top-0 z-10">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md p-4 z-20 flex items-center justify-between">
            <img 
              src="logo.png" 
              alt="Logo" 
              className="h-8 w-auto" 
            />
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {isNavOpen && (
            <div className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg p-4 z-10 transition-transform duration-300 ease-in-out">
              <div className="flex flex-col space-y-4">
                <h1 
                  className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300 text-base"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About
                </h1>
                <h1 
                  className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300 text-base"
                  onClick={() => scrollToSection(timelineRef)}
                >
                  Timeline
                </h1>
                <h1 
                  className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300 text-base"
                  onClick={() => scrollToSection(rulesRef)}
                >
                  Rules
                </h1>
                <h1 
                  className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300 text-base"
                  onClick={() => scrollToSection(faqsRef)}
                >
                  FAQs
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-16 border-t border-b border-gray-200 py-6 font-['Poppins'] text-base font-medium tracking-wide bg-white/90 backdrop-blur-lg shadow-md">
          <h1 
            className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300" 
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </h1>
          <h1 
            className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300" 
            onClick={() => scrollToSection(timelineRef)}
          >
            Timeline
          </h1>
          <h1 
            className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300" 
            onClick={() => scrollToSection(rulesRef)}
          >
            Rules
          </h1>
          <h1 
            className="cursor-pointer text-gray-700 hover:text-indigo-500 transition-colors duration-300" 
            onClick={() => scrollToSection(faqsRef)}
          >
            FAQs
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6 sm:mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-16 font-['Poppins'] max-w-7xl mx-auto">
          {/* Left: About and Nerdathon Section */}
          <div className="w-full md:w-[60%]">
            <div ref={aboutRef}>
              <h1 className="font-semibold text-base sm:text-2xl md:text-3xl text-gray-800 mb-2 sm:mb-4">About</h1>
              <p className="text-sm sm:text-lg leading-relaxed text-gray-600">
                Qbitio Technologies is an emerging innovation-driven startup founded by a team of young engineers and technologists committed to bridging the gap between academic learning and real-world application. The company focuses on developing intelligent software solutions, educational technologies, and automation systems that empower students, institutions, and industries to adopt next-generation digital tools.
                <br /><br />
                Qbitio’s core areas include web development, artificial intelligence, robotics, and cloud-based platforms, with a strong emphasis on experiential learning and technical excellence. Through its projects, workshops, and collaborations, Qbitio Technologies aims to cultivate a culture of innovation, problem-solving, and continuous learning among the next generation of creators and developers.
              </p>
            </div>
            <div ref={timelineRef} className="mt-6 sm:mt-12">
              <h1 className="font-semibold text-base sm:text-2xl md:text-3xl text-gray-800 mb-2 sm:mb-6">Nerdathon 1.0</h1>
              <p className="text-sm sm:text-lg leading-relaxed text-gray-600">
                Nerdathon 1.0 is the flagship hackathon jointly organized by AuraLinks and Qbitio Technologies, designed to foster innovation through hands-on creation and collaboration. In this event, participants — particularly Qbitio Atom S3 users — will build creative and impactful projects using the ATOMS3 development board and the NerdEditor code environment.
                <br /><br />
                The hackathon aims to showcase the ingenuity of young developers and their ability to translate ideas into working prototypes. Top-performing teams and individuals demonstrating exceptional creativity, technical skill, and problem-solving will be recognized and rewarded.
              </p>
              <div className="mt-6 sm:mt-12">
                <h1 className="font-semibold text-base sm:text-lg md:text-2xl text-gray-800 mb-2 sm:mb-4">Timeline</h1>
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-center w-full bg-blue-100 p-2 sm:p-4 rounded-lg">
                    <span className="w-1/4 text-gray-700 text-sm sm:text-base">25 Oct 2025</span>
                    <span className="w-3/4 text-gray-700 text-sm sm:text-base">Registration window opens</span>
                  </div>
                  <div className="flex items-center w-full bg-pink-100 p-2 sm:p-4 rounded-lg">
                    <span className="w-1/4 text-gray-700 text-sm sm:text-base">28 Nov 2025</span>
                    <span className="w-3/4 text-gray-700 text-sm sm:text-base">Registration and Submission closes</span>
                  </div>
                  <div className="flex items-center w-full bg-yellow-100 p-2 sm:p-4 rounded-lg">
                    <span className="w-1/4 text-gray-700 text-sm sm:text-base">29 Nov 2025</span>
                    <span className="w-3/4 text-gray-700 text-sm sm:text-base">Prize Distribution Ceremony and Presentation</span>
                  </div>
                </div>
              </div>
            </div>
            <div ref={rulesRef} className="mt-6 sm:mt-12">
              <h1 className="font-semibold text-base sm:text-2xl md:text-3xl text-gray-800 mb-2 sm:mb-6">Rules and Regulations</h1>
              <ul className="list-disc pl-3 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600">
                <li>
                  Participants must develop a unique and innovative project using the Atom S3 development board by Qbitio Technologies and the NerdEditor code environment.
                </li>
                <li>
                  During the build phase, the team leader (or the most active Instagram member) must post daily project progress updates as Instagram Stories, tagging @qbitio.labs and @auralinks.in with the caption “Day N – #Nerdathon”, and ensure all teammates repost the story.
                </li>
                <li>
                  <span className="font-semibold text-sm sm:text-base">Submission Requirements:</span>
                  <ul className="list-decimal pl-3 sm:pl-5 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                    <li>A PowerPoint presentation (PPT) showcasing the project’s concept, design, implementation, and outcome. No fixed template is required—participants are encouraged to use their creativity, but Qbitio Technologies and AuraLinks logos must be placed prominently at the top corners of every slide.</li>
                    <li>A video presentation clearly demonstrating the project’s functionality, innovation, and potential impact.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold text-sm sm:text-base">Evaluation Criteria:</span>
                  <ul className="list-decimal pl-3 sm:pl-5 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                    <li>Technical Innovation & Implementation – originality, technical soundness, and effective use of Atom S3.</li>
                    <li>Design & Presentation Quality – clarity, visual appeal, and engagement in both PPT and video.</li>
                    <li>Practical Relevance & Impact – how meaningfully the project addresses real-world needs or problems.</li>
                  </ul>
                </li>
                <li>
                  After evaluation, the best-performing teams will be recognized during the Closing & Awards Ceremony, where prizes and honors will be officially presented.
                </li>
              </ul>
            </div>
            <div ref={faqsRef} className="mt-6 sm:mt-12">
              <h1 className="font-semibold text-base sm:text-2xl md:text-3xl text-gray-800 mb-2 sm:mb-6">FAQs</h1>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">This section is under development. Please check back later for frequently asked questions and answers.</p>
            </div>
          </div>

          {/* Right: Minimal Sticky Event Card at Bottom */}
          <div className="md:hidden fixed bottom-0 left-0 w-full bg-white p-4 shadow-sm z-10 border-t border-gray-200">
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-semibold text-gray-900 mb-2">Nerdathon 1.0</h1>
              <button
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                style={getShineStyle()}
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="hidden md:block w-[30%] sticky top-16 bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Nerdathon 1.0</h1>
            <p className="text-sm text-gray-600 mb-6">Join us to innovate and create impactful solutions!</p>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <span className="text-indigo-500 text-lg">📅</span>
                <div>
                  <h3 className="text-sm font-medium uppercase text-gray-500 tracking-wide">Date</h3>
                  <p className="text-base text-gray-700">22nd - 23rd November 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-indigo-500 text-lg">🕒</span>
                <div>
                  <h3 className="text-sm font-medium uppercase text-gray-500 tracking-wide">Time</h3>
                  <p className="text-base text-gray-700">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-indigo-500 text-lg">📍</span>
                <div>
                  <h3 className="text-sm font-medium uppercase text-gray-500 tracking-wide">Location</h3>
                  <p className="text-base text-gray-700">Online & Qbitio Tech Hub, Bengaluru</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-indigo-500 text-lg">📌</span>
                <div>
                  <h3 className="text-sm font-medium uppercase text-gray-500 tracking-wide">Registration Deadline</h3>
                  <p className="text-base text-gray-700">20th November 2025</p>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nerdathon;