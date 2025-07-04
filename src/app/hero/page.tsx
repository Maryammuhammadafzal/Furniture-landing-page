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
        <div className="lg:w-[70%] w-[90%] absolute z-40 lg:top-[13%] md:top-[10%] flex justify-center h-full items-end">
          <div className="w-full h-auto relative">
            <div className="vector absolute z-50 bottom-[30%] w-[200px] h-[200px]  right-0">
              <Image
                src="/images/vector-image.png"
                alt="vector-image"
                width={134}
                height={134}
                className="spin"
              />
            </div>
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
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
          <div className="flex lg:w-[42%] w-[49%] h-fit py-5 absolute top-60 lg:left-24 md:left-14 left-0  mx-auto justify-start">
            <p className="text-start text-primary  font-sans sm:px-5 px-2 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs">
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
          <div className="flex sm:w-[42%] w-[48%] max-md:px-6 max-sm:px-0 h-fit py-5 absolute top-60 justify-end">
            <p className="text-end text-secondary max-w-xs font-sans xl:text-2xl md:text-xl sm:text-lg text-base">
              your home is a reflection of your personality
            </p>
          </div>
        </div>
        <div className="w-[50px] h-[50px] absolute top-10 flex justify-center items-center right-[55%]">
          <Image
            src="/images/star.png"
            alt="star-image"
            width={30}
            height={30}
            className="rotate"
          />
        </div>
        <div className="w-[120px] h-[120px] absolute md:bottom-30 -bottom-5 flex justify-center items-center lg:left-[3%] md:left-[2%] left-0">
          <Image
            src="/images/star-2.png"
            alt="star-image"
            width={77}
            height={77}
            className="rotate max-lg:w-[65px] max-md:w-[55px] "
          />
        </div>
        <div className="w-[120px] h-[120px] absolute z-50 md:bottom-20 -bottom-5 flex justify-center items-center md:right-[2%] right-0 lg:right-[3%]">
          <Image
            src="/images/star-3.png"
            alt="star-image"
            width={77}
            height={77}
            className="rotate max-lg:w-[65px] max-md:w-[55px] "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
