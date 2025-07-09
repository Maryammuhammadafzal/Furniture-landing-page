"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MapPicture = () => {
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
    <div className=" w-full flex justify-center items-center h-auto">
      <div 
        className="w-full h-full rounded-2xl  flex justify-center items-center"
      >
        <div
        style={{
          transform: `${offset > 7200 && offset < 7300 && `rotate(-5deg)`}`,
          transition: "transform 0.3s linear",
        }} className="rounded-2xl relative sm:w-[440px] xs:w-[90%] w-[97%] transition-transform h-[435px] flex justify-center items-center ">
          <Image
            src="/images/map-image.png"
            alt="colleection-images"
            width={390}
            height={435}
            className="w-full h-full rounded-2xl object-cover object-center"
          />
        <div className="content bg-white rounded-br-2xl rounded-bl-2xl absolute bottom-0 sm:w-[440px] w-full transition-transform h-[100px] flex justify-center items-center ">
          <div className="w-full h-full flex-col gap-3 flex justify-center items-center">
            <p className="text-xl text-primary text-center">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <Link href="/" className="text-xs  text-primary underline">
              Get Directions
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MapPicture;
