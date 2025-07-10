

import { useEffect, useState } from "react"

const destinations = [
  {
    label: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "100+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Singapore",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "300+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Roma",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "400+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Bangkok",
    img: "https://images.unsplash.com/photo-1451471016731-e963a8588be8?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "100+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Bali",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "600+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Phuket",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "200+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Tokyo",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "700+ Tours",
    badge: "Coming Soon",
  },
  {
    label: "Cappadocia",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    // tours: "900+ Tours",
    badge: "Coming Soon",
  },
]

// Custom visible count for responsive (mobile: 2, sm: 3, md: 4, lg: 6)
const getVisibleCount = (width) => {
  if (width < 640) return 2
  if (width < 768) return 3
  if (width < 1024) return 4
  return 6
}

const TrendingDestinations = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(6) // Default to avoid SSR issues

  useEffect(() => {
    // Set initial visible count after component mounts
    setVisibleCount(getVisibleCount(window.innerWidth))

    const onResize = () => setVisibleCount(getVisibleCount(window.innerWidth))
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Calculate maximum possible slides
  const maxSlides = Math.max(0, destinations.length - visibleCount)

  // Calculate dots count - only show dots if we can actually slide
  const dotsCount = maxSlides > 0 ? maxSlides - 1 : 1

  // Reset current index if it exceeds maximum when visible count changes
  useEffect(() => {
    if (currentIdx > maxSlides) {
      setCurrentIdx(0)
    }
  }, [visibleCount, maxSlides, currentIdx])

  // Auto-scroll effect
  useEffect(() => {
    // Only auto-scroll if there are items to scroll to
    if (maxSlides <= 0) return

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev >= maxSlides ? 0 : prev + 1))
    }, 2500)

    return () => clearInterval(timer)
  }, [maxSlides])

  // If there are fewer or equal destinations than visible count, don't show carousel
  if (destinations.length <= visibleCount) {
    return (
      <div className="container">
        <section className="py-10 md:py-16 bg-white select-none">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#181E4B] mb-8" data-aos="fade-right" data-aos-duration="1000">Trending destinations</h2>
            <div className="flex justify-center gap-4 md:gap-8">
              {destinations.map((dest) => (
                <div key={dest.label} className="flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden flex items-center justify-center mb-3 shadow-sm">
                    <img
                      src={dest.img || "/placeholder.svg"}
                      alt={dest.label}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    {dest.badge && (
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[0.25rem] sm:-translate-y-[0.5rem] px-3 sm:px-5 py-1 sm:py-1.5 bg-white/80 text-[#222] font-semibold rounded-full text-sm sm:text-base select-none shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {dest.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-[#181E4B] text-sm sm:text-base">{dest.label}</div>
                  <div className="text-[#181E4B] opacity-60 text-xs">{dest.tours}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="container">
      <section className="py-10 md:py-16 bg-white select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181E4B] mb-8">Trending destinations</h2>
          <div className="relative flex flex-col items-center">
            {/* Carousel */}
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700"
                style={{
                  transform: `translateX(-${(currentIdx * 100) / visibleCount}%)`,
                  width: `${(destinations.length * 100) / visibleCount}%`,
                }}
              >
                {destinations.map((dest) => (
                  <div
                    key={dest.label}
                    className="flex flex-col items-center flex-shrink-0"
                    style={{ width: `${100 / destinations.length}%` }}
                  >
                    <div className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden flex items-center justify-center mb-3 shadow-sm">
                      <img
                        src={dest.img || "/placeholder.svg"}
                        alt={dest.label}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        draggable="false"
                      />

                      {dest.badge && (
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 sm:px-5 py-1 sm:py-1.5 bg-white/80 text-[#222] font-semibold rounded-full text-sm sm:text-base select-none shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {dest.badge}
                        </span>
                      )}
                    </div>

                    <div className="font-semibold text-[#181E4B] text-sm sm:text-base">{dest.label}</div>
                    <div className="text-[#181E4B] opacity-60 text-xs">{dest.tours}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots - Only show if there are multiple slides */}
            {dotsCount >  1 && (
              <div className="flex gap-2 justify-center mt-7">
                {Array.from({ length: dotsCount }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-6 h-1.5 rounded-full transition-all duration-200 ${idx === currentIdx ? "bg-[#181E4B]" : "bg-[#E5E5E5]"
                      }`}
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Go to carousel position ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrendingDestinations
