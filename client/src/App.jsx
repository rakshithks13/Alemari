import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import ScrollToTop from "./pages/ScrollToTop";

import TirupatiBlog from "./components/BlogPages/Tirupathi";
import MysoreBlog from "./components/BlogPages/MysoreBlog";
import Bengaluru from "./components/BlogPages/Bengaluru";
import FloatingWhatsApp from "./components/FloatingIcons/Whatsapp";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize GTM & GA4 once
const tagManagerArgs = {
  gtmId: "GTM-59GXFW3R",
};
TagManager.initialize(tagManagerArgs);
ReactGA.initialize("G-NB0FP6LYJV");

// ✅ Hook to track page views
const usePageTracking = () => {
  const location = useLocation();

  React.useEffect(() => {
    const pagePath = location.pathname + location.search;

    // GA4 tracking
    ReactGA.send({
      hitType: "pageview",
      page: pagePath,
    });

    // GTM tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);
};

// ✅ Inner App with Router
const AppContent = () => {
  usePageTracking();

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="blogs/Tirupathi" element={<TirupatiBlog />} />
          <Route path="blogs/MysoreBlog" element={<MysoreBlog />} />
          <Route path="blogs/Bengaluru" element={<Bengaluru />} />
        </Route>
      </Routes>
      <FloatingWhatsApp />
    </>
  );
};

// ✅ Main App
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;