"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MapPicture = () => {
  return (
    <div className="relative w-full flex justify-center  items-center h-[500px]">
      <div
        className="w-auto h-auto rounded-2xl flex justify-center items-center"
      >
        <div className="slider-image rounded-2xl absolute top-0 w-[440px] transition-transform h-[435px] flex justify-center items-center ">
          <Image
            src="/images/map-image.png"
            alt="colleection-images"
            width={390}
            height={435}
            className="w-full h-full rounded-2xl object-cover object-center"
          />
        </div>
        <div className="content bg-white rounded-br-2xl rounded-bl-2xl absolute bottom-0 w-[440px] transition-transform h-[100px] flex justify-center items-center ">
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
  );
};

export default MapPicture;
