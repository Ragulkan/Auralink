import React, { useState, useEffect } from "react";

function Slider() {
  const images = ["/competion.png", "/course.png", "/hackaton1.png", "/slideimage.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8 pb-16">
      {/* Image container */}
      <div className="w-full max-w-7xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] relative overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover rounded-xl shadow-lg absolute top-0 left-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex space-x-2 sm:space-x-3 mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex
                ? "bg-[rgb(135,0,154)] scale-125"
                : "bg-[rgb(200,150,220)]"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
     <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-6 mt-10 w-full">
  {/* Left side: text */}
  <div className="flex-1 md:ml-7 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-4 font-mont font-medium">
      87% of hackathon participants say <br />
      <span className="font-bold">
        “it helped them land internships <br />
        or jobs.”
      </span>
    </h1>

    {/* Pink container below */}
    <div className="bg-[rgb(169,0,192)] border-[3px] border-[rgb(135,0,154)] p-4 rounded-lg mb-4 w-full sm:w-[90%] md:w-[700px] mt-6 font-mont mx-auto md:mx-0">
      <p className="text-white text-sm sm:text-base">
        Hackathons are one of the most powerful platforms to demonstrate your skills and attract opportunities with leading global companies.
      </p>
    </div>
  </div>

  {/* Right side: image */}
  <div className="flex-shrink-0 w-full sm:w-[80%] md:w-[300px] lg:w-[400px] mx-auto md:mx-0">
    <img src="/div2side.png" alt="Logo" className="w-full h-auto" />
  </div>
</div> 
<div className="w-screen mt-10">
  <img
    src="/groupimg.png"
    alt="gpimg"
    className="w-full h-auto object-cover"
  />
</div>
<div className="flex flex-col items-center mt-11 px-4 sm:px-6 lg:px-8">
  <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-open font-bold text-center">
    Where Talent Meets Opportunity 🫱🏻‍🫲
  </h1>
  <div className="w-full max-w-3xl mt-4">
    <p className="font-open font-normal text-center text-sm sm:text-base md:text-lg lg:text-xl">
      Compete, learn, and grow through hackathons, webinars, and cohorts. Build skills, gain recognition, and unlock your future opportunities.
    </p>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4 p-4 mt-10 w-full">
  {/* Container 1 */}
  <div className="flex-1 border-2 border-[rgba(255,183,0,0.5)] bg-[rgba(255,183,0,0.42)] p-6 rounded-lg text-white text-center w-full h-64 sm:h-72 md:h-80 lg:h-96">
    Container 1
  </div>

  {/* Container 2 */}
  <div className="flex-1 border-2 border-[#008eaa65] bg-[#436fff60] p-6 rounded-lg text-white text-center w-full h-64 sm:h-72 md:h-80 lg:h-96">
    Container 2
  </div>

  {/* Container 3 */}
  <div className="flex-1 border-2 border-[#ff4b5d77] bg-[#ff56728a] p-6 rounded-lg text-white text-center w-full h-64 sm:h-72 md:h-80 lg:h-96">
    Container 3
  </div>
</div>
<div className="overflow-hidden mt-10">
  <div className="flex animate-marquee whitespace-nowrap">
    {[...Array(60)].map((_, i) => ( // Increase the number of spans
      <span
        key={i}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel font-bold mr-10 rounded-xl px-4 py-1"
      >
        EXPLORE OPPORTUNITIES 🏆
      </span>
    ))}
  </div>
</div>










    </div>
  );
}

export default Slider;
