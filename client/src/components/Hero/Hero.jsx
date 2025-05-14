import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Home/home.png";

const LandingHero = () => {
  const [selectedDestination, setSelectedDestination] =
    React.useState("Tirupathi");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [timeSlot, setTimeSlot] = React.useState("6 AM - 9 AM");
  const navigate = useNavigate();

  const destinations = ["Tirupathi", "Ooty", "Kerala", "Goa"];
  const timeSlots = [
    "6 AM - 9 AM",
    "10 AM - 1 PM",
    "2 PM - 5 PM",
    "6 PM - 9 PM",
  ];
  const today = new Date().toISOString().split("T")[0];

  const handleSearch = () => {
    if (selectedDestination === "Tirupathi") {
      navigate("/blogs/");
    } else {
      navigate(`/blogs/${selectedDestination.toLowerCase()}`);
    }
  };

  return (
    <section className="container bg-white py-16 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left: Image */}
        <div className="relative h-fit md:w-1/2 flex justify-center">
          <div>
            <img
              src={img}
              alt="Traveler"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Right: Text and Filters */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Explore the world
            <br className="hidden sm:block" />
            like never before!
          </h1>
          <p className="text-gray-600 text-lg">
            Trips tailored to the experiences you want to remember for the rest
            of your life. From parties, educational, spiritual and nature, we
            have it all!
          </p>

          {/* Filter Section */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Destination */}
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm text-gray-600"
                >
                  Choose Destination
                </label>
                <select
                  id="destination"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-gray-100 mt-1 rounded-full px-4 py-2"
                >
                  {destinations.map((dest, idx) => (
                    <option key={idx} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-gray-100 mt-1 rounded-full px-4 py-2"
                />
              </div>

              {/* Time Slot */}
              <div>
                <label
                  htmlFor="timeSlot"
                  className="block text-sm text-gray-600"
                >
                  Time Slot
                </label>
                <select
                  id="timeSlot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-gray-100 mt-1 rounded-full px-4 py-2"
                >
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSearch}
                className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-full transition duration-300"
              >
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
