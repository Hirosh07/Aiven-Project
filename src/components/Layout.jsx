// src/utils/Layout.jsx
import React from "react";
import Navbar from "../components/NavBar";   // adjust if filename differs
import Footer from "../components/Footer";   // adjust if filename differs
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   {/* renders the active page */}
      <Footer />
    </>
  );
};

export default Layout;
