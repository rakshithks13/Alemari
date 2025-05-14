import React from "react";
import { useNavigate } from "react-router-dom"; // Assumes you are using React Router

const Hero = () => {
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

  const handleSearch = () => {
    // Redirect to blog post URL - customize as needed
    if (selectedDestination === "Tirupathi") {
      navigate("/blogs/");
    } else {
      navigate(`/blogs/${selectedDestination.toLowerCase()}`);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-3">
              {/* Destination Dropdown */}
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Choose Destination
                </label>
                <select
                  id="destination"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                >
                  {destinations.map((dest, idx) => (
                    <option key={idx} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                />
              </div>

              {/* Time Slot Dropdown */}
              <div>
                <label htmlFor="timeSlot" className="opacity-70">
                  Time Slot
                </label>
                <select
                  id="timeSlot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-gray-100 my-2 rounded-full p-2"
                >
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
