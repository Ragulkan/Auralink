import React, { useState, useEffect, useRef } from "react";
import EventCard from "./EventCard";
import Nerdathon from "./Nerdathon";
import eventsData from "./events.json";

function Slider() {
  const images = [
    "/nerdathon thumbnail.png",
    "/nerdathon01.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNerdathon, setShowNerdathon] = useState(false);
  const isUserInteracting = useRef(false);
  const sliderRef = useRef(null);

  // Toggle function to show/hide Nerdathon
  const toggleNerdathon = () => {
    setShowNerdathon((prev) => !prev);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting.current && sliderRef.current) {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        scrollToImage(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Scroll to selected image
  const scrollToImage = (index) => {
    isUserInteracting.current = true;
    setCurrentIndex(index);

    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }

    // Reset user interaction flag after 3 seconds
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      isUserInteracting.current = false;
    }, 3000);
  };

  // Handle manual scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;

    isUserInteracting.current = true;
    const container = sliderRef.current;
    const scrollPosition = container.scrollLeft;
    const imageWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / imageWidth);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }

    // Reset user interaction flag
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      isUserInteracting.current = false;
    }, 3000);
  };

  // Go to next/previous slide
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToImage(nextIndex);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToImage(prevIndex);
  };

  return (
    <>
      {showNerdathon ? (
        <Nerdathon />
      ) : (
        <>
          {/* Hero Slider Section */}
          <div className="w-full flex flex-col items-center min-h-fit lg:min-h-[100vh] px-4 sm:px-6 lg:px-8 pt-4 pb-4">
            {/* Image Slider Container */}
            <div className="relative w-full max-w-7xl">
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Slider */}
              <div
                ref={sliderRef}
                id="image-slider"
                className="relative w-full h-[45vh] lg:h-[70vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex rounded-xl"
                onScroll={handleScroll}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-full flex-shrink-0 snap-center"
                  >
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              {/* Enhanced Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToImage(i)}
                    className={`flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
                      i === currentIndex
                        ? "scale-125"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-purple-600 w-3 h-3"
                          : "bg-purple-300 w-2 h-2 hover:bg-purple-400"
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slide Progress Indicator */}
            <div className="w-full max-w-7xl mt-4">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-purple-600 h-1 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentIndex + 1) / images.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Hackathon Highlight Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-10">
            {/* Left Content */}
            <div className="flex flex-col text-start p-4 sm:p-6 md:p-0 md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-mont font-medium text-black">
                87% of hackathon participants say <br />
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  "it helped them land internships or jobs."
                </span>
              </h1>
              <div className="bg-gradient-to-r from-[rgb(169,0,192)] to-[rgb(135,0,154)] border-2 border-[rgb(135,0,154)] p-4 sm:p-6 rounded-xl mt-6 max-w-md mx-auto md:mx-0 shadow-lg">
                <p className="text-white text-sm sm:text-base md:text-lg font-mont">
                  Hackathons are one of the most powerful platforms to demonstrate your skills and attract opportunities with leading global companies.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[35%] flex justify-center">
              <img
                src="/div2side.png"
                alt="Side Graphic"
                className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] object-contain"
              />
            </div>
          </div>

          {/* Group Image Section */}
          <div className="w-full mt-10 sm:mt-16">
            <img
              src="/groupimg.png"
              alt="Group"
              className="w-full h-[120px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover"
            />
          </div>

          {/* "Where Talent Meets Opportunity" Section */}
          <div className="flex flex-col items-center text-center mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-open font-bold">
              Where Talent Meets Opportunity 🫱🏻‍🫲
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl font-open font-normal text-gray-800">
              Compete, learn, and grow through hackathons, webinars, and cohorts. Build skills, gain recognition, and unlock your future opportunities.
            </p>
          </div>

          {/* Three Containers Section */}
          <div className="flex justify-center w-full mt-12 sm:mt-16 px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-7xl">
              <img src="hackathons.png" alt="Hackathons" className="w-full md:w-[30%] rounded-lg shadow-md" />
              <img src="einner.png" alt="Courses" className="w-full md:w-[30%] rounded-lg shadow-md" />
              <img src="webinars.png" alt="Webinars" className="w-full md:w-[30%] rounded-lg shadow-md" />
            </div>
          </div>

          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden mt-12 sm:mt-16 py-4 sm:py-6">
            <div className="flex animate-marquee whitespace-nowrap will-change-transform">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel font-bold px-4 sm:px-6 md:px-8">
                EXPLORE OPPORTUNITIES 🏆
              </span>
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-16.67%); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 4s linear infinite;
              will-change: transform;
            }
            /* Hide scrollbar but keep functionality */
            #image-slider::-webkit-scrollbar {
              display: none;
            }
            #image-slider {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            /* Smooth scrolling for the slider */
            #image-slider {
              scroll-behavior: smooth;
            }
          `}</style>

          {/* Event Cards Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 max-w-7xl w-full mx-auto mt-12 sm:mt-16 px-4">
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                imageSrc={event.imageSrc}
                title={event.title}
                type={event.type}
                registrationDate={event.registrationDate}
                web={event.web}
                toggleNerdathon={toggleNerdathon}
                className="w-full sm:w-[45%] md:w-[28%] lg:w-[22%] shadow-md rounded-lg overflow-hidden"
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Slider;