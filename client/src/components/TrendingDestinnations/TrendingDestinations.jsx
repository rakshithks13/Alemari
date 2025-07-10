"use client"

import { useEffect, useState, useRef } from "react"

const destinations = [
    {
    label: "Bangkok",
    img: "https://images.unsplash.com/photo-1451471016731-e963a8588be8?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Bali",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Phuket",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Singapore",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Roma",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Tokyo",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
  {
    label: "Cappadocia",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    alt: "Travihara",
    badge: "Coming Soon",
  },
]

const TrendingDestinations = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef(null)

  // Calculate items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerSlide(4) // lg: 4 items
      } else if (width >= 768) {
        setItemsPerSlide(3) // md: 3 items
      } else if (width >= 640) {
        setItemsPerSlide(2) // sm: 2 items
      } else {
        setItemsPerSlide(1) // mobile: 1 item
      }
    }

    updateItemsPerSlide()
    window.addEventListener("resize", updateItemsPerSlide)
    return () => window.removeEventListener("resize", updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(destinations.length / itemsPerSlide)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides, isAutoPlaying])

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }

    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

//   const getCurrentSlideItems = () => {
//     const startIndex = currentSlide * itemsPerSlide
//     return destinations.slice(startIndex, startIndex + itemsPerSlide)
//   }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Upcoming Destinations</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover the worlds most popular travel destinations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
                    {destinations
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((destination, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                        >
                          {/* Image Container */}
                          <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                            <img
                              src={destination.img || "/placeholder.svg"}
                              alt={destination.alt}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              draggable="false"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            {/* Badge */}
                            {destination.badge && (
                              <div className="absolute top-4 right-4">
                                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                  {destination.badge}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-4">
                            <h3 className="text-xl flex justify-center font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                              {destination.label}
                            </h3>
                            {/* <p className="text-slate-600 mb-4">{destination.description}</p> */}
                          </div>

                          {/* Hover Effect Border */}
                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-200 rounded-xl transition-colors duration-300" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={() => goToSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => goToSlide(Math.min(totalSlides - 1, currentSlide + 1))}
                disabled={currentSlide === totalSlides - 1}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-orange-500 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile Swipe Indicator */}
        {/* <div className="md:hidden text-center mt-6">
          <p className="text-slate-500 text-sm">Swipe left or right to explore more destinations</p>
        </div> */}
      </div>
    </section>
  )
}

export default TrendingDestinations
