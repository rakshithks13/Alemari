import React from "react";

const Subscribe = () => {
  return (
    <>
      <div>
        <div className="text-center mb-10">
          <h3 className="text-xs mb-1 text-gray-500 tracking-wide uppercase font-semibold">
            SUBSCRIBE
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            For more information
          </h2>
        </div>
        <section className="container relative flex justify-center items-center bg-transparent">
          {/* Decorative SVG Background */}
          <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none select-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 900 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block w-[900px] h-[300px]"
            >
              <ellipse cx="680" cy="110" rx="170" ry="100" fill="#F5F5F5" />
              <ellipse cx="300" cy="210" rx="335" ry="150" fill="#F5F5F5" />
            </svg>
          </div>

          {/* Subscribe Box */}
          <div className="relative z-10 w-full max-w-3xl bg-gray-100 rounded-3xl shadow-xl px-6 md:px-20 py-12 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h2>

            <form
              className="w-full flex flex-col md:flex-row gap-4 mt-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-base shadow-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold rounded-lg shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Subscribe;
