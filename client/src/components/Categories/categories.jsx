import React, { useState } from "react";
import desert from "../../assets/Categories/desert.jpg";
import Balaji from "../../assets/Categories/balaji.jpg";
import Pyramid from "../../assets/Categories/pyramid.jpg";
const categories = [
  {
    title: "Beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    badge: "Coming Soon",
  },
  {
    title: "Desert",
    img: desert,
    badge: "Coming Soon",
  },

  {
    title: "Mountain",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    badge: "Coming Soon",
  },
  {
    title: "Temple",
    img: Balaji,
    badge: "Coming Soon",
  },
  {
    title: "Tower",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    badge: "Coming Soon",
  },
  {
    title: "Pyramid",
    img: Pyramid,
    badge: "Coming Soon",
  },
];

const CATEGORIES_SHOWN = 6;

const Categories = () => {
  const [slide, setSlide] = useState(0);

  const [shown, setShown] = useState(
    window.innerWidth < 640
      ? 2
      : window.innerWidth < 1024
      ? 3
      : CATEGORIES_SHOWN
  );

  React.useEffect(() => {
    const handleResize = () => {
      setShown(
        window.innerWidth < 640
          ? 2
          : window.innerWidth < 1024
          ? 3
          : CATEGORIES_SHOWN
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = categories.length - shown;
  const canPrev = slide > 0;
  const canNext = slide < maxSlide;

  return (
    <section className="container py-10 md:py-10 px-2 sm:px-0">
      <div className="mx-auto w-full flex flex-col items-center">
        {/* Heading and Controls Together */}
        <div className="container w-full mb-10 md:mb-12 flex flex-col md:flex-row items-center md:items-end justify-between text-center md:text-left gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-3">
              Categories
            </h2>
            <p className="text-gray-500 text-base md:text-sm leading-relaxed max-w-xl">
              Here are lots of interesting destinations to visit, but don’t be
              confused—they’re already grouped by category.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={() => setSlide((s) => Math.max(0, s - 1))}
              disabled={!canPrev}
              className={`rounded-full border border-gray-300 bg-white w-10 h-10 flex items-center justify-center mr-2
        transition ${
          !canPrev ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
              aria-label="Previous"
              type="button"
            >
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="#E1E3E6"
                  strokeWidth="2"
                />
                <path
                  d="M12.5 15L8 10L12.5 5"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setSlide((s) => Math.min(maxSlide, s + 1))}
              disabled={!canNext}
              className={`rounded-full border border-gray-300 bg-white w-10 h-10 flex items-center justify-center
        transition ${
          !canNext ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
              aria-label="Next"
              type="button"
            >
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="#E1E3E6"
                  strokeWidth="2"
                />
                <path
                  d="M8 5L12.5 10L8 15"
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-x-hidden w-full">
          <div
            className="flex transition-transform duration-500 gap-4 md:gap-6 justify-center"
            style={{
              transform: `translateX(-${slide * (100 / shown)}%)`,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col items-center"
                style={{
                  minWidth:
                    shown === 2 ? "45vw" : shown === 3 ? "28vw" : "120px",
                  maxWidth: shown < 5 ? "210px" : "160px",
                  flex: "0 0 auto",
                }}
              >
                <div className="relative w-[88px] h-[110px] md:w-[140px] md:h-[180px] rounded-t-full rounded-b-full overflow-hidden flex items-center justify-center shadow-md bg-white group">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {cat.badge && (
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[0.25rem] sm:-translate-y-[0.5rem] px-3 sm:px-5 py-1 sm:py-1.5 bg-white/80 text-[#222] font-semibold rounded-full text-sm sm:text-base select-none shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <span className="mt-4 text-base md:text-lg font-medium text-gray-700 tracking-wide">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
