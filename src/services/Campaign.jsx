import React from "react";
import image from "../img/Dm.jpg";
import Template from "./Template";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Campaign = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Digital Marketing"}
        desc={
          "To build brand awareness, increase customer engagement, and boost online visibility through strategic social media marketing, search engine optimization (SEO), and creative content. We craft compelling branding campaigns and analyze it through tools like google analytics that connect emotionally and deliver real conversions & organic rankings. We optimize every touch point – from landing pages to sales funnel for measurable ROI with organic SEO. Choose top digital marketing agency  near Chennai and Bangalore that focuses on real growth"
        }
        image={image}
      />
      <section className="w-full py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-white">
        <Footer />
      </section>
    </div>
  );
};

export default Campaign;
