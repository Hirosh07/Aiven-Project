import React, { useEffect } from "react";
import Routings from "../utils/Routings";

const App = () => {
  useEffect(() => {
    // Scroll to home section on refresh
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return <Routings />;
};

export default App;
