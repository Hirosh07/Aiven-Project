import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/WebDevelopment";
import Campaign from "../src/services/Campaign";
import Cvs from "../src/services/Cvs";
import Ooh from "../src/services/Ooh"
import Td from "../src/services/Td";
import Gd from "../src/services/Gd";
import Vemg from "../src/services/Vemg"
import Em from "../src/services/Em"
import Hireus from "../src/services/Hireus";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import Blog from "../src/components/Blog";
import BlogDetails from "../src/components/BlogDetails";
// portfolio images
import app1 from "../src/img/portfolio/app-1.jpg";
import app2 from "../src/img/portfolio/app-2.jpg";
import app3 from "../src/img/portfolio/app-3.jpg";
import product1 from "../src/img/portfolio/product-1.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import branding1 from "../src/img/portfolio/branding-1.jpg";
import book1 from "../src/img/portfolio/books-1.jpg";
import book2 from "../src/img/portfolio/books-2.jpg";
import book3 from "../src/img/portfolio/books-3.jpg";

const Routings = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Services */}
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/campagin-creation" element={<Campaign />} />
      <Route path="/advertising" element={<Ooh />} />
      <Route path="/cvs" element={<Cvs />} />
      <Route path="/trad-ads" element={<Td />} />
      <Route path="/graphics-design" element={<Gd />} />
      <Route path="/ve-mg" element={<Vemg />} />
      <Route path="/Event-management" element={<Em />} />
      <Route path="/hireus" element={<Hireus />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      {/* Portfolio */}
      <Route path="/portfolio/app1" element={<ProductsTemp img={app1} />} />
      <Route path="/portfolio/product1" element={<ProductsTemp img={product1} />} />
      <Route path="/portfolio/brand1" element={<ProductsTemp img={branding1} />} />
      <Route path="/portfolio/book1" element={<ProductsTemp img={book1} />} />
      <Route path="/portfolio/app2" element={<ProductsTemp img={app2} />} />
      <Route path="/portfolio/book3" element={<ProductsTemp img={book3} />} />
      <Route path="/portfolio/product3" element={<ProductsTemp img={product3} />} />
      <Route path="/portfolio/book2" element={<ProductsTemp img={book2} />} />
      <Route path="/portfolio/app3" element={<ProductsTemp img={app3} />} />
    </Routes>
  );
};

export default Routings;
