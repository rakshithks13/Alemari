import React from "react";
import Hero from "../components/Hero/Hero";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import Services from "../components/Services/services";
import Subscribe from "../components/subscribe/subscribe";
import Testimonial2 from "../components/Testimonial/Testimonial2";
import BookingSteps from "../components/BookingSteps/bookingSteps";
import TrendingDestinations from "../components/TrendingDestinnations/trendingDestinations";
import Categories from "../components/Categories/categories";
import Destinations from "../components/Destininations/Destininations";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="overflow-hidden">
          <section className="relative min-h-screen">
            <Hero />
          </section>
          <Categories />
          <TrendingDestinations />

          <Services />
          <Destinations />
          <Subscribe />
          <Testimonial2 />
          <BookingSteps />
          <Places handleOrderPopup={() => setOrderPopup(true)} />

          {/* Keep other components as needed */}
          <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
        <BlogsComp />
        <Banner />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
