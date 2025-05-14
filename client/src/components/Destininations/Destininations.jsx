import React from "react";
import destinations from "../Data/destininationsData";

const Destinations = () => {
  return (
    <>
      <div className="mb-10">
        <div className="text-center  py-10">
          <h3 className="text-xs mb-1 text-gray-500 tracking-wide uppercase font-semibold">
            Top Selling
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Top Destinations
          </h2>
        </div>

        <div className="relative flex justify-center  bg-white overflow-hidden">
          {/* Decorative SVG background */}
          <svg
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 z-0"
            width="210"
            height="200"
            viewBox="0 0 210 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g opacity="0.3" stroke="#E5E5E5" strokeWidth="2">
              <path d="M105 100c74 0 100 100 100 100" />
              <path d="M105 100c54 0 73 80 73 80" />
              <path d="M105 100c34 0 46 52 46 52" />
              <path d="M105 100c14 0 19 20 19 20" />
            </g>
          </svg>

          {/* Destination Cards */}
          <div className="relative z-10 flex flex-wrap justify-center gap-7 md:gap-10">
            {destinations.map((dest) => (
              <div
                key={dest.location}
                className="bg-white rounded-[26px] shadow-lg overflow-hidden flex flex-col w-[285px] min-w-[250px] border border-[#f5f5f5]"
                style={{
                  boxShadow: "0px 20px 50px rgba(34, 35, 40, 0.08)",
                }}
              >
                <div className="h-[300px] w-auto">
                  <img
                    src={dest.image}
                    alt={dest.location || "Destination image"}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    draggable="false"
                  />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-sm md:text-base text-[#5E6282]">
                      {dest.location}
                    </span>
                    <span className="text-[#5E6282] font-semibold text-sm md:text-base">
                      {dest.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                      role="img"
                      aria-label="Duration Icon"
                    >
                      <path
                        d="M9 2.5V9l3.6 2.15"
                        stroke="#080809"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="9"
                        cy="9"
                        r="8"
                        stroke="#080809"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="text-[#5E6282]">{dest.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
