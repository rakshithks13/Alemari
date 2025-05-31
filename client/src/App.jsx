import React from "react";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="blogs/Tirupathi" element={<TirupatiBlog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <FloatingWhatsApp />
    </>
  );
};

export default App;
