// import React from "react";
// import Slider from "react-slick";

// const testimonialData = [
//   {
//     id: 1,
//     name: "Samuel",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/101/101",
//   },
//   {
//     id: 1,
//     name: "John Doe",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/102/102",
//   },
//   {
//     id: 1,
//     name: "Smith",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
//     img: "https://picsum.photos/103/103",
//   },
// ];

// const Testimonial = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div data-aos="fade-up" data-aos-duration="300" className="py-10">
//         <div className="container">
//           {/* Header section */}
//           <div className="text-center mb-20 max-w-[400px] mx-auto">
//             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//               Testimonial
//             </p>
//             <h1 className="text-3xl font-bold">Testimonial</h1>
//             <p className="text-xs text-gray-400">
//               {" "}
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
//               nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
//               quam! Nulla?
//             </p>
//           </div>
//           {/* testimonial section */}
//           <div
//             data-aos="zoom-in"
//             data-aos-duration="300"
//             className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
//           >
//             <Slider {...settings}>
//               {testimonialData.map(({ id, name, text, img }) => {
//                 return (
//                   <div key={id} className="my-6">
//                     <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
//                       <img
//                         src={img}
//                         alt=""
//                         className="rounded-full block mx-auto"
//                       />
//                       <h1 className="text-xl font-bold">{name}</h1>
//                       <p className="text-gray-500 text-sm">{text}</p>
//                       <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                         ,,
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    title: "Lead designer",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
  },
  {
    id: 2,
    name: "James Carter",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Nunc tristique purus in urna tempor, non congue justo sagittis. Nulla facilisi. Fusce dapibus efficitur magna vel malesuada. Aenean vitae bibendum nunc. Nullam id dolor non sapien lacinia bibendum.",
  },
  {
    id: 3,
    name: "Sophie Lane",
    title: "UX Specialist",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Aliquam erat volutpat. Sed blandit, diam in suscipit placerat, lorem ipsum sollicitudin purus, sit amet bibendum purus justo nec justo. Suspendisse fringilla nisl at posuere sollicitudin.",
  },
  {
    id: 4,
    name: "Daniel Craig",
    title: "Developer Advocate",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer non lectus in ligula egestas tristique sed et mauris.",
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`relative bg-black rounded-3xl shadow-lg text-white px-8 py-10 mx-4 transition-transform duration-500 ease-in-out ${
        isActive
          ? "scale-105 z-20 text-white"
          : "scale-90 z-0 text-white/50 blur-sm"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: isActive ? 1.05 : 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full border-4 border-purple-600 shadow-lg"
        />
      </div>
      <div className="pt-16 text-center">
        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-400">{testimonial.title}</p>
        <span className="text-purple-500 text-5xl leading-none mt-4 inline-block">
          “
        </span>
        <p className="mt-4 text-base font-light">{testimonial.text}</p>
      </div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
        What Our Clients Say About Us
      </h2>

      <div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-stretch gap-4 sm:gap-0 sm:space-x-[-50px] md:space-x-[-80px] overflow-visible">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      <div className="mt-6 flex space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? "bg-purple-500" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
