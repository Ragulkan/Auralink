import React from "react";

function EventCard({ imageSrc, title, type, registrationDate, web, status, total }) {
  const isComingSoon = status === "comingsoon";
  const isLive = status === "live";
  const isCompleted = status === "completed";

  return (
    <div className={`w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border group ${
      isComingSoon 
        ? "border-blue-100 hover:border-blue-200" 
        : isLive
        ? "border-green-100 hover:border-green-200"
        : isCompleted
        ? "border-gray-100 hover:border-gray-200"
        : "border-gray-100 hover:border-gray-200"
    }`}>
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isComingSoon ? "group-hover:scale-105" : "group-hover:scale-105"
            } ${isCompleted ? "grayscale" : ""}`}
          />
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border ${
            isComingSoon 
              ? "bg-blue-500/90 border-blue-400/20" 
              : isLive
              ? "bg-green-500/90 border-green-400/20"
              : isCompleted
              ? "bg-gray-500/90 border-gray-400/20"
              : "bg-purple-500/90 border-purple-400/20"
          }`}>
            {isComingSoon ? "Coming Soon" : isLive ? "Live Now" : isCompleted ? "Completed" : type}
          </span>
        </div>
        
        {/* Time Badge */}
        {!isComingSoon && !isCompleted && (
          <div className="absolute top-3 right-3">
            <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center space-x-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{isLive ? "Live" : "Ends Soon"}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className={`text-lg font-bold line-clamp-2 leading-tight mb-3 transition-colors duration-300 ${
          isComingSoon 
            ? "text-gray-900 group-hover:text-blue-700" 
            : isLive
            ? "text-gray-900 group-hover:text-green-700"
            : isCompleted
            ? "text-gray-500"
            : "text-gray-900 group-hover:text-purple-700"
        }`}>
          {title}
        </h3>

        {/* Registration Date - Only show if not coming soon */}
        {!isComingSoon && registrationDate && (
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">
              {isCompleted ? "Event completed:" : "Registration ends:"}
            </span>
            <span className="ml-1 text-gray-900 font-semibold">{registrationDate}</span>
          </div>
        )}

        {/* Coming Soon Message */}
        {isComingSoon && (
          <div className="flex items-center text-sm text-blue-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-normal text-[14px]">Stay tuned for updates</span>
          </div>
        )}

        {/* Progress Bar - Only for active events */}
        {!isComingSoon && !isCompleted && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Limited spots available</span>
              <span>65% filled</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className={`h-1.5 rounded-full w-2/3 ${
                isLive 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : "bg-gradient-to-r from-purple-500 to-pink-500"
              }`}></div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button 
          className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform shadow-md group/btn ${
            isComingSoon
              ? "bg-gray-100 text-gray-500 cursor-not-allowed hover:scale-100"
              : isCompleted
              ? "bg-gray-200 text-gray-600 cursor-not-allowed hover:scale-100"
              : isLive
              ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
              : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
          }`}
          onClick={() => { 
            if (!isComingSoon && !isCompleted && web) {
              window.location.href = web;
            }
          }}
          disabled={isComingSoon || isCompleted}
        >
          <span className="flex items-center justify-center">
            <span>
              {isComingSoon ? "Coming Soon" : isCompleted ? "Event Ended" : isLive ? "Join Now" : "Register Now"}
            </span>
            {!isComingSoon && !isCompleted && (
              <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </span>
        </button>

        {/* Additional Info - Show for all statuses except completed */}
        {!isCompleted && (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{total || "500+"} Participants</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{type === "Virtual" ? "Virtual Event" : "24hr Hackathon"}</span>
            </div>
          </div>
        )}

        {/* Completed Event Message */}
        {isCompleted && (
          <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Event successfully completed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;