import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import CtaButton from "./CtaButton";
import logo from "../img/assets/logo1.png"; // update path if needed

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const clickHandler = () => {
    setShow(!show);
  };

  // ✅ Scroll handler
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setVisible(false);
    } else {
      // scrolling up
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 bg-transparent backdrop-blur-sm text-orange-500 secondary-font transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* logo */}
      <Link
        to="/"
        className="lg:text-3xl text-2xl tracking-wide font-light flex items-center gap-2"
      >
        <img src={logo} alt="Logo" className="h-12 w-15 object-contain" />
      </Link>

      {/* desktop menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <Link to="/" className="nav-link">Home</Link>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <Link to="/blog" className="nav-link">Blog</Link>
        <a href="#contact">
          <CtaButton name={"Contact"} />
        </a>
      </div>

      {/* mobile menu button */}
      <div className="lg:hidden">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {/* mobile dropdown */}
      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-black/60 text-white backdrop-blur-md transition-all duration-300">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <Link to="/blog" className="nav-link">Blog</Link>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="mt-2 flex justify-center items-center">
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
