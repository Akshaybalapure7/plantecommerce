// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import bgImage from "../assets/images/bg.jpg";

const slides = [
  {
    id: 1,
    title: "Green Up Your Space",
    description: "Find the perfect plants to refresh your home.",
    image: hero1
  },
  {
    id: 2,
    title: "Fresh Air, Fresh Mind",
    description: "Indoor plants that bring life to your home.",
    image: hero2
  },
  {
    id: 3,
    title: "Nature at Your Doorstep",
    description: "Beautiful small plants delivered to you.",
    image: hero3
  }
];

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg"></div>
      <Carousel className="relative w-full max-w-6xl z-10">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="flex flex-col md:flex-row items-center justify-between p-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left z-10 max-w-lg bg-white bg-opacity-30 p-6 rounded-lg backdrop-blur-md shadow-lg"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-green-200 drop-shadow-lg">{slide.title}</h2>
                <p className="text-lg text-gray-200 mt-4 drop-shadow-md">{slide.description}</p>
              </motion.div>
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full md:w-1/2 max-h-[500px] rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Hero;