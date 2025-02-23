import BestSellers from "@/wcomponents/BestSellers";
import Blog from "@/wcomponents/Blog";
import Categories from "@/wcomponents/Categories";
import Deals from "@/wcomponents/Deal";
import Hero from "@/wcomponents/Hero";
import SocialFeed from "@/wcomponents/SocialFeed";
import Testimonials from "@/wcomponents/Testimonials";
import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg.jpg";
  const Home = () => (
    <>
        <Hero/>
        <Categories/>
        <div
            className="mt-8 text-center py-10 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Overlay inside a relative container */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

            {/* Content on top of overlay */}
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white">Welcome to Our Plant Store</h1>
              <Link
                to="/shop"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        <Deals/>
        <BestSellers/>
        <Blog/>
        <Testimonials/>
        <SocialFeed/>
        
  </> 
);

export default Home;