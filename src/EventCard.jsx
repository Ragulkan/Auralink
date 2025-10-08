import React from "react";

function EventCard({ imageSrc, title, type, registrationDate }) {
  return (
    <div className="w-[20rem] sm:w-[20rem] md:w-[20rem] lg:w-[20rem] border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-[12rem] p-3">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="p-3 text-center">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-xs text-gray-500 uppercase mt-1">{type}</p>
        <p className="text-xs text-gray-600 mt-1">
          Registration ends on: {registrationDate}
        </p>
        <button className="mt-3 w-[80%] bg-purple-600 text-xs text-white py-1.5 px-3 rounded hover:bg-purple-700 transition-colors">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}

export default EventCard;