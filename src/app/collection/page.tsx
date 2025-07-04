import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const CollectionPage = () => {
    
  return (
    <div className="w-full h-auto md:py-30 sm:py-20 py-10 flex flex-col justify-center items-center">
      <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
        Discover Our Unique Furniture Collections
      </h2>

      <div className="w-full px-6 py-30 h-auto flex justify-center items-center">
        <div className="relative w-full min-h-[700px] flex flex-col gap-40 justify-center items-center">
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Living Room Furniture
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
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image1.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center -rotate-6">
              <Image
                src="/images/collection-image2.jpg"
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
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Bedroom Furniture
            </h2>
          </div>
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
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
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image3.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center -rotate-6">
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
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Outdoor Furniture
            </h2>
          </div>
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
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
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
              <Image
                src="/images/collection-image5.jpg"
                alt="colleection-images"
                width={390}
                height={435}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="slide-card w-full h-auto flex justify-evenly gap-8 items-center">
            <div className="slider-image w-[390px] h-[435px] flex justify-center items-center rotate-6">
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
            <h2 className="card-heading max-w-lg leading-16 font-mono md:text-6xl sm:text-5xl text-4xl text-primary ">
              Custom Furniture
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
