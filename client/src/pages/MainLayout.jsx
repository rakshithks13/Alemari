import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // your existing public navbar

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default MainLayout;
