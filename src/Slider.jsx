import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import eventsData from "./events.json";

function Slider() {
  const images = [
    "/nerdathon thumbnail.png",
    "/anadearmasnerd.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Slider Section */}
      <div className="w-full flex flex-col items-center min-h-[50vh] lg:min-h-[100vh] px-0 lg:px-0 pt-10 pb-16">
        {/* Image Slider */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] overflow-hidden lg:rounded-none shadow-2xl lg:shadow-none">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 space-x-2 sm:space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-[rgb(135,0,154)] scale-125"
                  : "bg-[rgb(200,150,220)]"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Hackathon Highlight Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-10">
        {/* Left Content */}
        <div className="flex flex-col text-start p-4 sm:p-6 md:p-0 md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-mont font-medium text-black">
            87% of hackathon participants say <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              “it helped them land internships or jobs.”
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

      {/* “Where Talent Meets Opportunity” Section */}
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
            className="w-full sm:w-[45%] md:w-[28%] lg:w-[22%] shadow-md rounded-lg overflow-hidden"
          />
        ))}
      </div>
    </>
  );
}

export default Slider;