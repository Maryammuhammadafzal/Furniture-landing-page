import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="header w-full h-[140px] z-50 absolute top-0 left-0">
        <Header />
      </div>
      <div className="flex justify-center h-full relative w-full items-center">
        <div className="w-[80%] absolute z-40 top-[19%] flex justify-center h-full items-end">
           <div className="w-full h-auto relative">
            <div className="vector absolute z-50 bottom-64 w-[200px] h-[200px]  right-0">
                 <Image src='/images/vector-image.png' alt="vector-image" width={134} height={134} className="animate-spin duration-1000"  />
            </div>
             <Image src='/images/hero-image.png' alt="hero-image" width={600} height={300} className="w-full h-full" />
           </div>
        </div>
        <div className="w-[50%] h-full flex pt-40 bg-secondary">
          <div className="py-3 flex justify-center items-center relative w-full h-auto overflow-x-hidden">
            <h1 className=" w-full font-mono text-8xl absolute top-0 left-0 animate-marquee text-primary">
              Welcome to Harmony Home Interiors Welcome to Harmony Home
              Interiors Welcome to Harmony Home Interiors Welcome to Harmony
              Home Interiors Welcome to Harmony Home Interiors Welcome to
              Harmony Home Interiors Welcome to Harmony Home Interiors Welcome
              to Harmony Home Interiors
            </h1>
          </div>
          <div className="flex w-[42%] h-fit py-5 absolute top-60 left-24  mx-auto justify-start">
            <p className="text-start text-primary  font-sans px-5 text-2xl">
              At Harmony Home Interiors, we believe your home is a reflection of
              your personality. That’s why we offer furniture that combines
              style, comfort, and durability to create spaces you love.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-full pt-40 flex bg-primary">
          <div className="py-2 flex justify-center items-center relative w-full h-auto overflow-x-hidden">
            <h1 className=" w-full font-mono text-8xl absolute top-0 right-[100%] animate-marquee-2 text-secondary">
              Welcome to Harmony Home Interiors Welcome to Harmony Home
              Interiors Welcome to Harmony Home Interiors Welcome to Harmony
              Home Interiors Welcome to Harmony Home Interiors Welcome to
              Harmony Home Interiors Welcome to Harmony Home Interiors Welcome
              to Harmony Home Interiors
            </h1>
          </div>
          <div className="flex w-[42%] h-fit py-5 absolute top-60 justify-end">
            <p className="text-end text-secondary max-w-xs font-sans text-2xl">
              your home is a reflection of your personality
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HeroPage;
