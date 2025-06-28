import React from "react";
import TagManager from 'react-gtm-module';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import FloatingWhatsApp from "./components/FloatingIcons/Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";
import TirupatiBlog from "./components/BlogPages/Tirupathi";
import MysoreBlog from "./components/BlogPages/MysoreBlog";
import ScrollToTop from "./pages/ScrollToTop";

import ReactGA from "react-ga4";
import Bengaluru from "./components/BlogPages/Bengaluru";

ReactGA.initialize("G-NB0FP6LYJV");
ReactGA.send("pageview");

const tagManagerArgs = {
  gtmId: 'GTM-59GXFW3R'
};

TagManager.initialize(tagManagerArgs);

const App = () => {
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
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="blogs/Tirupathi" element={<TirupatiBlog/>}/>
            <Route path="blogs/MysoreBlog" element={<MysoreBlog/>}/>
            <Route path="blogs/Bengaluru" element={<Bengaluru/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <FloatingWhatsApp />
    </>
  );
};

export default App;
