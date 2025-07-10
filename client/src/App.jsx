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
import TermsConditions from "./components/Legal/Terms"
import PrivacyPolicy from "./components/Legal/Privacy";
import Cookie from "./components/Legal/CookieTerms"

import TirupatiBlog from "./components/BlogPages/Tirupathi";
import MysoreBlog from "./components/BlogPages/MysoreBlog";
import Bengaluru from "./components/BlogPages/Bengaluru";
import Shirdi from "./components/BlogPages/Shirdi";
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
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="itinerary" element={<Blogs />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="itinerary/Tirupathi" element={<TirupatiBlog />} />
          <Route path="itinerary/MysoreBlog" element={<MysoreBlog />} />
          <Route path="itinerary/Bengaluru" element={<Bengaluru />} />
          <Route path="itinerary/Shirdi" element={<Shirdi />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="cookie" element={<Cookie />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          
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