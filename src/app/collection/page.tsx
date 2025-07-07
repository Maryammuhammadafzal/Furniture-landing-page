"use client";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { off } from "process";
import React, { useEffect, useState } from "react";

const CollectionPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
      console.log(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(offset);

  return (
    <div className="w-full h-auto md:py-30 sm:py-20 py-10 flex flex-col justify-center items-center">
      <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
        Discover Our Unique Furniture Collections
      </h2>

      <div className="w-full px-6 py-30 h-auto flex justify-center items-center">
        <div className="relative w-full min-h-[3000px] flex flex-col gap-40 justify-start items-center">
          <div style={{
                transform: `${
                  offset > 400 && offset < 500 &&
                  `translateY(${10}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="slide-card h-auto w-full flex justify-evenly gap-8 items-center">
            <h2
              style={{
                transform: `${
                  offset > 600 && offset < 700 && `translateX(-${300}px)`
                }`,
                transition: "transform 0.3s linear",
              }}
              className="card-heading max-w-lg leading-normal font-mono md:text-6xl sm:text-5xl text-4xl text-primary"
            >
              Living Room Furniture
            </h2>
            <div
              className={`flex relative justify-center items-center rounded-full h-[100px] w-[100px] slide-arrow`}
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <div
              style={{
                transform: `${
                  offset > 500 &&
                  offset < 600 &&
                  `translateX(${400}px) translateY(-${100}px)`
                }`,
                transition: "transform 0.3s linear",
              }}
              className="slider-image w-[390px] transition-transform h-[435px] flex justify-center items-center rotate-6"
            >
              <Image
                src="/images/collection-image1.jpg"
                alt="colleection-images"
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
            className="slide-card w-full h-auto flex justify-evenly gap-8 items-center"
          >
            <div
              style={{
                transform: `${
                  offset > 900 && offset < 1000 &&
                  `translateX(-${400}px) translateY(-${100}px)`
                }`,
                transition: "transform 0.3s linear", 
              }}
              className="slider-image w-[390px] h-[435px] flex justify-center items-center -rotate-6"
            >
              <Image
                src="/images/collection-image2.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              className={` ${
                offset > 900 && offset < 1000 && `flex`
              } hidden relative rotate-180 justify-center items-center rounded-full h-[100px] w-[100px] slide-arrow`}
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <h2  style={{
                transform: `${
                  offset > 900 && offset < 1000 &&
                  `translateX(${500}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Bedroom Furniture
            </h2>
          </div>
          <div
            style={{
              transform: `${
                offset > 500 && offset < 600 && `translateY(-${20}px)` ||
                offset > 900 && offset < 1000 && `translateY(500px)`
              }`,
              transition: "transform 0.3s linear",
            }}
            className="slide-card w-full h-auto flex justify-evenly gap-8 items-center"
          >
            <h2 
             style={{
                transform: `${
                  offset > 1300 && offset < 1400 &&
                  `translateX(-${300}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Dining Room Furniture
            </h2>
            <div className="flex relative justify-center items-center rounded-full h-[100px] w-[100px] slide-arrow">
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <div 
             style={{
                transform: `${
                  offset > 1300 && offset < 1400 &&
                  `translateX(${400}px) translateY(-100px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image3.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div
            style={{
              transform: `${
                offset > 500 && offset < 600 && `translateY(-${320}px)` ||
                offset > 900 && offset < 1000 && `translateY(230px)` || 
                offset > 1300 && offset < 1400 && `translateY(750px)`
              }`,
              transition: "transform 0.3s linear",
            }}
            className="slide-card w-full h-auto flex justify-evenly gap-8 items-center"
          >
            <div 
            style={{
                transform: `${
                  offset > 2000 && offset < 2100 &&
                  `translateX(-${400}px) translateY(-100px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="slider-image w-[390px] h-[435px] flex justify-center items-center -rotate-6">
              <Image
                src="/images/collection-image4.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex relative rotate-180 justify-center items-center rounded-full h-[100px] w-[100px] slide-arrow">
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <h2  style={{
                transform: `${
                   offset > 2000 && offset < 2100  &&
                  `translateX(${500}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Outdoor Furniture
            </h2>
          </div>
          <div
            style={{
              transform: `${
                offset > 500 && offset < 600 && `translateY(-${600}px)`||
                offset > 900 && offset < 1000 && `translateY(-60px)` || 
                offset > 1300 && offset < 1400 && `translateY(490px)` || 
                 offset > 2000 && offset < 2100 && `translateY(1000px)` 
              }`,
              transition: "transform 0.3s linear",
            }}
            className="slide-card w-full h-auto flex justify-evenly gap-8 items-center"
          >
            <h2 style={{
                transform: `${
                  offset > 2600 && offset < 2700 &&
                  `translateX(-${300}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Office Furniture
            </h2>
            <div className="flex relative justify-center items-center rounded-full h-[100px] w-[100px] slide-arrow">
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <div style={{
                transform: `${
                  offset > 2600 && offset < 2700 &&
                  `translateX(${400}px) translateY(-100px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image5.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div
            style={{
              transform: `${
                offset > 500 && offset < 600 && `translateY(-${900}px)` ||
                offset > 900 && offset < 1000 && `translateY(-350px)`  || 
                offset > 1300 && offset < 1400 && `translateY(200px)` || 
                 offset > 2000 && offset < 2100  && `translateY(600px)` || 
                offset > 2600 && offset < 2700 && `translateY(1200px)`
                
              }`,
              transition: "transform 0.3s linear",
            }}
            className="slide-card w-full h-auto flex justify-evenly gap-8 items-center"
          >
            <div style={{
                transform: `${
                  offset > 3000 && offset < 3100 &&
                  `translateX(-${400}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image6.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex relative justify-center rotate-180 items-center rounded-full h-[100px] w-[100px] slide-arrow">
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
                <MoveRightIcon size={42} color="#31554F" />
              </div>
            </div>
            <h2 style={{
                transform: `${
                  offset > 3000 && offset < 3100 &&
                  `translateX(${400}px)`
                }`,
                transition: "transform 0.3s linear", 
              }} className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Custom Furniture
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
