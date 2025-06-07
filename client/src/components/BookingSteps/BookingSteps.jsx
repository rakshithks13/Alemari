
import { steps } from "../Data/bookingStepsData";


const formatDateRange = () => {
  const today = new Date()
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)

  const options = { day: "2-digit", month: "short" }

  const start = today.toLocaleDateString("en-GB", options)
  const end = nextWeek.toLocaleDateString("en-GB", options)

  return `${start} - ${end}`
}

const icons = [
  <span
    key="icon-1"
    className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5C07A] to-[#FAA356]"
  >
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect width="18" height="18" x="4" y="4" stroke="#fff" strokeWidth="2" rx="4" />
      <path d="M8 8h10v10H8z" stroke="#FAA356" strokeWidth="2" />
    </svg>
  </span>,
  <span
    key="icon-2"
    className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8682] to-[#FF6B6B]"
  >
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect width="18" height="18" x="4" y="4" stroke="#fff" strokeWidth="2" rx="4" />
      <path d="M8 18c3-2 7-2 10 0" stroke="#fff" strokeWidth="2" />
      <path d="M13 10v2m0 4h.01" stroke="#fff" strokeWidth="2" />
    </svg>
  </span>,
  <span
    key="icon-3"
    className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#3EC1E9] to-[#2196F3]"
  >
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect width="18" height="18" x="4" y="4" stroke="#fff" strokeWidth="2" rx="4" />
      <path d="M9 18l4-10 4 10" stroke="#fff" strokeWidth="2" />
    </svg>
  </span>,
]

const BookingSteps = () => {
  return (
    <div>
      <section className="container relative py-12 md:py-24 bg-white mb-10 md:mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20 px-5 relative z-10">
          {/* Left: Steps Column */}
          <div className="flex-1 w-full max-w-xl">
            <div className="text-lg md:text-xl text-[#5E6282] font-semibold mb-3">Easy and Fast</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#181E4B] leading-tight mb-9">
              Book Your Next Trip
              <br className="hidden md:block" /> In 3 Easy Steps
            </h2>
            <ul className="flex flex-col gap-10">
              {steps.map((step, idx) => (
                <li key={step.title} className="flex gap-5 items-start">
                  <div className="mt-1">{icons[idx]}</div>
                  <div>
                    <div className="text-lg text-[#5E6282] font-bold mb-1">{step.title}</div>
                    <div className="text-[#5E6282] text-base leading-snug">{step.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Card */}
          <div className="flex-1 w-full flex justify-center items-start relative">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-50 to-white rounded-[32px] blur-lg z-0"></div>
              <div className="relative bg-white rounded-[32px] shadow-2xl border border-[rgba(199,199,199,0.2)] w-[95vw] max-w-[370px] p-4 sm:p-6 pb-8 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=370&q=80"
                  alt="Santorini Greece"
                  className="rounded-2xl w-full h-32 sm:h-36 object-cover mb-5"
                />
                <div className="font-bold text-[#181E4B] text-lg mb-2">Trip To Andaman</div>
                <div className="flex gap-2 text-sm text-[#84829A]">
                  <span>{formatDateRange()}</span>
                  <span className="font-semibold">|</span>
                  <span>by Arun</span>
                </div>

                {/* Enhanced Eye-Catching Icons */}
                <div className="flex gap-4 items-center mb-5 mt-4">
                  {/* Calendar/Date Icon */}
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#fff" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" stroke="#fff" strokeWidth="2" />
                      <line x1="8" y1="2" x2="8" y2="6" stroke="#fff" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" stroke="#fff" strokeWidth="2" />
                      <circle cx="8" cy="14" r="1" fill="#fff" />
                      <circle cx="12" cy="14" r="1" fill="#fff" />
                      <circle cx="16" cy="14" r="1" fill="#fff" />
                    </svg>
                  </span>

                  {/* Location/Map Icon */}
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ECDC4] to-[#44A08D] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#fff" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>

                  {/* Weather/Sun Icon */}
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD93D] to-[#FF9500] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
                      <line x1="12" y1="1" x2="12" y2="3" stroke="#fff" strokeWidth="2" />
                      <line x1="12" y1="21" x2="12" y2="23" stroke="#fff" strokeWidth="2" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#fff" strokeWidth="2" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#fff" strokeWidth="2" />
                      <line x1="1" y1="12" x2="3" y2="12" stroke="#fff" strokeWidth="2" />
                      <line x1="21" y1="12" x2="23" y2="12" stroke="#fff" strokeWidth="2" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#fff" strokeWidth="2" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>

                  {/* Activity/Adventure Icon */}
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <polygon
                        points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#5E6282] text-base mb-4">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="2" />
                      <circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#fff" strokeWidth="2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#fff" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>10 people going</span>
                </div>

                <div className="absolute right-6 bottom-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <svg width="18" height="16" viewBox="0 0 22 20" fill="none">
                      <path
                        d="M11 18.727S2 12.236 2 7.09C2 4.066 4.686 2 7.16 2c1.47 0 2.88.606 3.84 1.581C12.96 2.606 14.37 2 15.84 2 18.314 2 21 4.066 21 7.09c0 5.146-9 11.637-9 11.637z"
                        fill="#fff"
                        stroke="#fff"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating trip progress card */}
                <div className="absolute right-[-85px] bottom-16 w-[200px] bg-white rounded-2xl shadow-lg border border-[#f5f5f5] px-4 py-4 flex-col gap-2 z-10 hidden lg:flex">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=36&q=80"
                      alt="Trip to rome"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-semibold text-[#84829A]">Ongoing</div>
                      <div className="text-sm font-bold text-[#181E4B] leading-tight">Trip to Havelock</div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center mt-1 text-xs">
                    <span className="text-[#8A79DF] font-semibold">40%</span>
                    <span className="text-[#84829A]">completed</span>
                  </div>
                  <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <div
                      className="h-1 rounded-full bg-gradient-to-r from-[#8A79DF] to-[#A855F7]"
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
              <div className="text-xs font-semibold text-[#84829A]">Ongoing</div>
              <div className="text-sm font-bold text-[#181E4B] leading-tight">Trip to rome</div>
            </div>
          </div>
          <div className="flex gap-1 items-center mt-1 text-xs">
            <span className="text-[#8A79DF] font-semibold">40%</span>
            <span className="text-[#84829A]">completed</span>
          </div>
          <div className="w-full h-1 bg-[#F5F5F5] rounded-full overflow-hidden">
            <div className="h-1 rounded-full bg-gradient-to-r from-[#8A79DF] to-[#A855F7]" style={{ width: "40%" }} />
          </div>
        </div>

        {/* BG radial for right card */}
        <div className="absolute right-0 top-0 bottom-0 w-3/4 md:w-2/5 z-0">
          <div className="h-full w-full bg-gradient-to-bl opacity-0 md:opacity-70 rounded-l-[50px]" />
        </div>
      </section>
    </div>
  )
}

export default BookingSteps
