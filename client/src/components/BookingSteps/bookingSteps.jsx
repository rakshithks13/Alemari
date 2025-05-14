import React from "react";
import { steps } from "../Data/bookingStepsData";

const icons = [
  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F5C07A]">
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect
        width="18"
        height="18"
        x="4"
        y="4"
        stroke="#fff"
        strokeWidth="2"
        rx="4"
      />
      <path d="M8 8h10v10H8z" stroke="#FAA356" strokeWidth="2" />
    </svg>
  </span>,
  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF8682]">
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect
        width="18"
        height="18"
        x="4"
        y="4"
        stroke="#fff"
        strokeWidth="2"
        rx="4"
      />
      <path d="M8 18c3-2 7-2 10 0" stroke="#fff" strokeWidth="2" />
      <path d="M13 10v2m0 4h.01" stroke="#fff" strokeWidth="2" />
    </svg>
  </span>,
  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#3EC1E9]">
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect
        width="18"
        height="18"
        x="4"
        y="4"
        stroke="#fff"
        strokeWidth="2"
        rx="4"
      />
      <path d="M9 18l4-10 4 10" stroke="#fff" strokeWidth="2" />
    </svg>
  </span>,
];

const BookingSteps = () => {
  return (
    <div>
      <section className="container relative py-12 md:py-24 bg-white mb-10 md:mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20 px-5 relative z-10">
          {/* Left: Steps Column */}
          <div className="flex-1 w-full max-w-xl">
            <div className="text-lg md:text-xl text-[#5E6282] font-semibold mb-3">
              Easy and Fast
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#181E4B] leading-tight mb-9">
              Book Your Next Trip
              <br className="hidden md:block" /> In 3 Easy Steps
            </h2>
            <ul className="flex flex-col gap-10">
              {steps.map((step, idx) => (
                <li key={step.title} className="flex gap-5 items-start">
                  <div className="mt-1">{icons[idx]}</div>
                  <div>
                    <div className="text-lg text-[#5E6282] font-bold mb-1">
                      {step.title}
                    </div>
                    <div className="text-[#5E6282] text-base leading-snug">
                      {step.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Card */}
          <div className="flex-1 w-full flex justify-center items-start relative">
            {/* Card with soft shadow and bg gradient */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-50 to-white rounded-[32px] blur-lg z-0"></div>
              <div
                className="relative bg-white rounded-[32px] shadow-2xl border border-[rgba(199,199,199,0.2)]
                w-[95vw] max-w-[370px] p-4 sm:p-6 pb-8 transition-all
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=370&q=80"
                  alt="Santorini Greece"
                  className="rounded-2xl w-full h-32 sm:h-36 object-cover mb-5"
                />
                <div className="font-bold text-[#181E4B] text-lg mb-2">
                  Trip To Greece
                </div>
                <div className="flex items-center gap-2 text-[#5E6282] text-base mb-4">
                  <span>14-29 June</span>
                  <span className="font-semibold text-[#84829A]">|</span>
                  <span>by Robbin Joseph</span>
                </div>
                <div className="flex gap-8 items-center mb-5">
                  <span className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <circle
                        cx="9"
                        cy="9"
                        r="8.25"
                        stroke="#84829A"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 2.5V9l3.6 2.15"
                        stroke="#84829A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <rect
                        x="4.12"
                        y="4.12"
                        width="9.75"
                        height="9.75"
                        rx="4.875"
                        stroke="#84829A"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 6.61V9L10.42 10.42"
                        stroke="#84829A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                      <path
                        d="M11.5 2.75c-2-1-5-1-7 1s-2 5-1 7c2 2.5 8 2.5 10 0s2-5-1-7Z"
                        stroke="#84829A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#5E6282] text-base mb-4">
                  <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                    <path
                      d="M9 2.5V9l3.6 2.15"
                      stroke="#84829A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="9"
                      r="8"
                      stroke="#84829A"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>24 people going</span>
                </div>
                <div className="absolute right-6 bottom-8">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="#4152CA"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 18.727S2 12.236 2 7.09C2 4.066 4.686 2 7.16 2c1.47 0 2.88.606 3.84 1.581C12.96 2.606 14.37 2 15.84 2 18.314 2 21 4.066 21 7.09c0 5.146-9 11.637-9 11.637z"
                      fill="transparent"
                      stroke="#4152CA"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>
                {/* Floating trip progress card */}
                <div className="absolute right-[-85px] bottom-16 w-[200px] bg-white rounded-2xl shadow-lg border border-[#f5f5f5] px-4 py-4  flex-col gap-2 z-10 hidden lg:flex">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=36&q=80"
                      alt="Trip to rome"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#84829A]">
                        Ongoing
                      </div>
                      <div className="text-sm font-bold text-[#181E4B] leading-tight">
                        Trip to rome
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center mt-1 text-xs">
                    <span className="text-[#8A79DF] font-semibold">40%</span>
                    <span className="text-[#84829A]">completed</span>
                  </div>
                  <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <div
                      className="h-1 rounded-full bg-[#8A79DF]"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive trip progress card for mobile */}
        <div className="absolute w-[92vw] max-w-xs mx-auto lg:hidden mt-[-25px] ml-2 bg-white rounded-2xl shadow-lg border border-[#f5f5f5] px-4 py-4 flex flex-col gap-2 z-10">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=36&q=80"
              alt="Trip to rome"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div className="text-xs font-semibold text-[#84829A]">
                Ongoing
              </div>
              <div className="text-sm font-bold text-[#181E4B] leading-tight">
                Trip to rome
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center mt-1 text-xs">
            <span className="text-[#8A79DF] font-semibold">40%</span>
            <span className="text-[#84829A]">completed</span>
          </div>
          <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
            <div
              className="h-1 rounded-full bg-[#8A79DF]"
              style={{ width: "40%" }}
            />
          </div>
        </div>
        {/* BG radial for right card */}
        <div className="absolute right-0 top-0 bottom-0 w-3/4 md:w-2/5 z-0">
          <div className="h-full w-full bg-gradient-to-bl from-[#e5eeff] via-white to-white opacity-0 md:opacity-70  rounded-l-[50px]" />
        </div>
      </section>
    </div>
  );
};

export default BookingSteps;
