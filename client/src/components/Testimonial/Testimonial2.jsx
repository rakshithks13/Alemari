import React, { useEffect, useState, useRef } from "react";
import { testimonials } from "../Data/testimonialData";

const AUTO_CYCLE_MS = 3000;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  // Auto-cycle logic
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_CYCLE_MS);

    return () => clearTimeout(timerRef.current);
  }, [active]);

  return (
    <>
      <div className="pt-20 pb-16 container">
        <section className="max-w-6xl mx-auto px-5 md:px-0 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Heading and Indicator Dots */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <div className="mb-3 text-base font-semibold text-gray-400 uppercase tracking-wide">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232340] leading-tight md:leading-snug mb-6">
              What People Say <br className="hidden md:block" /> About Us
            </h2>
            <div className="flex items-center gap-3 mt-2 md:mt-4 mb-1 md:mb-0">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-200 border-none outline-none
                    ${active === idx ? "bg-[#232340]" : "bg-gray-200"}
                  `}
                  style={{
                    boxShadow:
                      active === idx
                        ? "0 0 0 2px #fff, 0 1px 6px rgba(0,0,0,0.06)"
                        : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Testimonial Card Carousel (Unchanged) */}
          <div className="flex-1 relative min-h-[300px] md:min-h-[300px] w-full justify-center">
            <div className="w-full max-w-xl mx-auto relative">
              {testimonials.map((t, i) => {
                const isActive = i === active;
                const isNext = i === (active + 1) % testimonials.length;

                if (!isActive && !isNext) return null;

                return (
                  <div
                    key={t.name}
                    className={`absolute w-full transition-all duration-700 ${
                      isActive ? "z-10" : "z-0"
                    }`}
                    style={{
                      top: isActive ? "0px" : "80px",
                      opacity: isActive ? 1 : 0.5,
                      transform: isActive ? "scale(1)" : "scale(0.93)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl px-7 pt-8 pb-7 md:pb-10 flex flex-col gap-3 md:gap-5 transition-all duration-700">
                      <div className="flex items-center gap-3 mb-1">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary-orange"
                        />
                        <div>
                          <div className="text-primary-blue font-semibold leading-snug">
                            {t.name}
                          </div>
                          <div className="text-sm text-gray-400">{t.role}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-[15px] leading-snug mb-2">
                        “{t.feedback}”
                      </p>
                      <div className="text-sm text-gray-400">{t.company}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
