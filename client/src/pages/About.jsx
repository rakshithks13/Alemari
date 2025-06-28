import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="relative border-2 border-blue-500 p-6 rounded-md shadow-sm">
              <p className="text-red-600 font-semibold tracking-widest text-xs mb-2">
                A BIT
              </p>
              <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
              <p className="text-gray-600 mb-6">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded incommode. Why kept very ever home mrs. Considered
                sympathize ten uncommonly occasional assistance sufficient not.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200">
                EXPLORE MORE
              </button>
            </div>

            {/* Right - Custom Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top full-width image */}
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
                  alt="Mountains"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>

              {/* Bottom-left tall image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Coastal Town"
                  className="rounded-xl w-full h-40 object-cover"
                />
              </div>

              {/* Bottom-right with badge */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Hiking"
                  className="rounded-xl w-full h-40 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-md text-center">
                  10+
                  <br />
                  Places
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
