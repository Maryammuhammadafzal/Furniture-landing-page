"use client";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CollectionAnimation = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-[3000px] flex flex-col gap-16 md:gap-24 lg:gap-40 justify-start items-center px-4 sm:px-6 lg:px-8">
      <div
        style={{
          transform: `${
            offset > 400 && offset < 500 && `translateY(${10}px)`
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <h2
          style={{
            transform: `${
              offset > 600 && offset < 700 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px) translateY(50px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-normal font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Living Room Furniture
        </h2>
        <div
          className="flex relative bg-amber-300 justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <div
          style={{
            transform: `${
              offset > 500 && offset < 600 && `translateX(${Math.min(400, window.innerWidth * 0.4)}px) translateY(-${100}px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center rotate-6"
        >
          <Image
            src="/images/collection-image1.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div
        style={{
          transform: `${
            offset > 500 && offset < 600 && `translateY(${250}px)`
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <div
          style={{
            transform: `${
              offset > 900 && offset < 1000 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px) translateY(-${100}px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center -rotate-6"
        >
          <Image
            src="/images/collection-image2.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className={`flex relative rotate-180 justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow ${
            offset > 900 && offset < 1000 ? "flex" : "hidden"
          }`}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <h2
          style={{
            transform: `${
              offset > 900 && offset < 1000 && `translateX(${Math.min(500, window.innerWidth * 0.5)}px) translateY(50px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-16 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Bedroom Furniture
        </h2>
      </div>
      <div
        style={{
          transform: `${
            (offset > 500 && offset < 600 && `translateY(-${20}px)`) ||
            (offset > 900 && offset < 1000 && `translateY(500px)`)
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <h2
          style={{
            transform: `${
              offset > 1300 && offset < 1400 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px) translateY(50px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-16 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Dining Room Furniture
        </h2>
        <div
          className="flex relative justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <div
          style={{
            transform: `${
              offset > 1300 && offset < 1400 && `translateX(${Math.min(400, window.innerWidth * 0.4)}px) translateY(-100px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center rotate-6"
        >
          <Image
            src="/images/collection-image3.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div
        style={{
          transform: `${
            (offset > 500 && offset < 600 && `translateY(-${320}px)`) ||
            (offset > 900 && offset < 1000 && `translateY(230px)`) ||
            (offset > 1300 && offset < 1400 && `translateY(750px)`)
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <div
          style={{
            transform: `${
              offset > 2000 && offset < 2100 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px) translateY(-100px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center -rotate-6"
        >
          <Image
            src="/images/collection-image4.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="flex relative rotate-180 justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <h2
          style={{
            transform: `${
              offset > 2000 && offset < 2100 && `translateX(${Math.min(500, window.innerWidth * 0.5)}px) translateY(50px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-16 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Outdoor Furniture
        </h2>
      </div>
      <div
        style={{
          transform: `${
            (offset > 500 && offset < 600 && `translateY(-${600}px)`) ||
            (offset > 900 && offset < 1000 && `translateY(-60px)`) ||
            (offset > 1300 && offset < 1400 && `translateY(490px)`) ||
            (offset > 2000 && offset < 2100 && `translateY(1000px)`)
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <h2
          style={{
            transform: `${
              offset > 2600 && offset < 2700 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px) translateY(50px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-16 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Office Furniture
        </h2>
        <div
          className="flex relative justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <div
          style={{
            transform: `${
              offset > 2600 && offset < 2700 && `translateX(${Math.min(400, window.innerWidth * 0.4)}px) translateY(-100px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center rotate-6"
        >
          <Image
            src="/images/collection-image5.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div
        style={{
          transform: `${
            (offset > 500 && offset < 600 && `translateY(-${900}px)`) ||
            (offset > 900 && offset < 1000 && `translateY(-350px)`) ||
            (offset > 1300 && offset < 1400 && `translateY(200px)`) ||
            (offset > 2000 && offset < 2100 && `translateY(600px)`) ||
            (offset > 2600 && offset < 2700 && `translateY(1200px)`)
          }`,
          transition: "transform 0.3s linear",
        }}
        className="slide-card w-full h-auto flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-8 items-center"
      >
        <div
          style={{
            transform: `${
              offset > 3000 && offset < 3100 && `translateX(-${Math.min(350, window.innerWidth * 0.4)}px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="slider-image w-[300px] sm:w-[390px] h-[350px] sm:h-[435px] flex justify-center items-center -rotate-6"
        >
          <Image
            src="/images/collection-image6.jpg"
            alt="collection-images"
            width={390}
            height={435}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="flex relative rotate-180 justify-center items-center rounded-full h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] slide-arrow"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50%"
              ry="50%"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
          <div className="relative z-10 p-4">
            <MoveRightIcon size={36} className="sm:size-42" color="#31554F" />
          </div>
        </div>
        <h2
          style={{
            transform: `${
              offset > 3000 && offset < 3100 && `translateX(${Math.min(500, window.innerWidth * 0.5)}px) translateY(100px)`
            }`,
            transition: "transform 0.3s linear",
          }}
          className="card-heading max-w-lg leading-16 font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center md:text-left"
        >
          Custom Furniture
        </h2>
      </div>
    </div>
  );
};

export default CollectionAnimation;