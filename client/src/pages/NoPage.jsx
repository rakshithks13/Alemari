"use client"

import { useState, useEffect } from "react"
import { Home, Search, ArrowLeft, Compass, MapPin, Plane, Camera } from "lucide-react"

const NoPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Plane, delay: "0s", duration: "6s" },
    { Icon: Camera, delay: "1s", duration: "8s" },
    { Icon: MapPin, delay: "2s", duration: "7s" },
    { Icon: Compass, delay: "3s", duration: "9s" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-indigo-200/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 bg-pink-200/30 rounded-full animate-pulse delay-500"></div>

        {/* Floating travel icons */}
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-20"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          >
            <Icon className="w-8 h-8 text-blue-400 animate-bounce" />
          </div>
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-6 h-6 bg-blue-400/20 rounded-full pointer-events-none z-10 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 404 Animation */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-blue-100 -z-10 blur-sm">404</div>
          </div>
        </div>

        {/* Main Message */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl">
            Looks like you've wandered off the beaten path!
          </p>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl">
            The page you're looking for doesn't exist, but don't worry - every great journey has a few detours.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Home
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              Looking for something specific?
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for pages, content..."
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // Handle search functionality here
                    console.log("Search:", e.currentTarget.value)
                  }
                }}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div> */}
        </div>

        {/* Popular Links */}
        <div
          className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mt-12">
            <p className="text-gray-600 mb-6">Or try these popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "Blog", href: "/blog" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div
          className={`transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 max-w-lg">
            <p className="text-sm text-gray-600 italic">
              💡 <strong>Fun Fact:</strong> The HTTP 404 error was named after room 404 at CERN, where the World Wide
              Web was born. You're experiencing a piece of internet history!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>

      {/* Animated waves at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-100/30"
          />
        </svg>
      </div>
    </div>
  )
}

export default NoPage
