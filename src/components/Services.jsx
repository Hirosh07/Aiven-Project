import React, { useEffect, useState } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// Define all 9 services
const allServices = [
  {
    path: "/app-development",
    title: "Apps Development",
    desc: "App Development process is like a signature recipe — clean code, intuitive UI, and powerful backend, all seasoned with strategy.",
  },
  {
    path: "/web-development",
    title: "Web Development",
    desc: "Professional web development ensures your site is fast, mobile-responsive, and optimized for user experience. ",
  },
  {
    path: "/campagin-creation",
    title: "Digital Marketing",
    desc: "We provide digital marketing solutions that increase brand awareness drives targeted traffic, boost online visibility using meta ads & google ads.",
  },
  {
    path: "/advertising",
    title: "O-O-H Ads",
    desc: "We are an OOH branding agency near Chennai and Bangalore, delivering bold billboard campaigns and eye-catching metro ads to help brands stand out in high-traffic areas with effective outdoor marketing strategies.",
  },
  {
    path: "/cvs",
    title: "Corporate Video Shoots",
    desc: "A well-produced corporate video is a powerful way to showcase your brand’s identity, values, and offerings. ",
  },
  {
    path: "/trad-ads",
    title: "Traditional Advertisements",
    desc: "We offer classic branding through traditional ads on TV and radio, with direct access to major networks like Sun, Vijay, Zee, and leading OTT platforms like Prime Video, JioCinema, Hotstar, and Aha.",
  },
  {
    path: "/graphics-design",
    title: "Graphics Design",
    desc: "At Aiven Creatives, we deliver stunning and strategic graphic design services that leave a lasting impression.",
  },
  {
    path: "/ve-mg",
    title: "Video Editing/Motion Graphics",
    desc: "We deliver high-quality video editing and motion graphics that captivate and convert.We transform raw footage into polished, engaging content that tells your brand story with impact.",
  },
  {
    path: "/Event-management",
    title: "Event Management",
    desc: "At Aiven Creatives, we offer complete event management solutions in Chennai, from concept to flawless execution.",
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    AOS.init();
  }, []);

  // Function to handle moving right
  const handleMoveRight = () => {
    setDirection("right");
    setStartIndex((prevIndex) => (prevIndex + 1) % allServices.length);
  };

  // Function to handle moving left
  const handleMoveLeft = () => {
    setDirection("left");
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + allServices.length) % allServices.length
    );
  };

  // Get the 3 services to display based on the current startIndex
  const visibleServices = [];
  for (let i = 0; i < 3; i++) {
    const serviceIndex = (startIndex + i) % allServices.length;
    visibleServices.push(allServices[serviceIndex]);
  }

  // The CSS for the animations is now a string within the component
  const animationStyles = `
    .slide-container {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }

    @media (min-width: 1024px) {
      .slide-container {
        flex-direction: row;
      }
    }

    @keyframes slide-right-animation {
      from {
        transform: translateX(20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slide-left-animation {
      from {
        transform: translateX(-20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .slide-container.right {
      animation-name: slide-right-animation;
    }

    .slide-container.left {
      animation-name: slide-left-animation;
    }
  `;

  return (
    <div className="text-[#7A6960] relative">
      <style>{animationStyles}</style>
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
      Services are everywhere…  but direction and execution are rare. Before you choose what we offer , choose why it matters.
      </p>

      <div
        className="flex flex-col lg:flex-row items-center gap-5 justify-center"
        data-aos="fade-up"
      >
        {/* Left button */}
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors hidden lg:block"
          aria-label="Move to previous services"
        >
          <FaArrowLeft />
        </button>

        {/* The services cards with animation class */}
        <div className={`slide-container ${direction}`}>
          {visibleServices.map((service) => (
            <div key={service.title} onClick={() => navigate(service.path)}>
              <Card
                img={<HiOutlineChartPie />}
                title={service.title}
                desc={service.desc}
              />
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={handleMoveRight}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors hidden lg:block"
          aria-label="Move to next services"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* For mobile view, show the buttons at the bottom */}
      <div className="flex justify-center gap-4 mt-5 lg:hidden">
        <button
          onClick={handleMoveLeft}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
          aria-label="Move to previous services"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleMoveRight}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors"
          aria-label="Move to next services"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;