"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const StoryPictures = () => {
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
    <div className="relative w-full flex justify-center  items-center h-[500px]">
      <div
        style={{
          transform: `${offset > 3800 && offset < 3900 && `rotate(-5deg)`}`,
          transition: "transform 0.3s linear",
        }}
        className="slider-image absolute top-0 w-[390px] transition-transform h-[435px] flex justify-center items-center "
      >
        <Image
          src="/images/story-image.jpg"
          alt="colleection-images"
          width={390}
          height={435}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        style={{
          transform: `${offset > 3800 && offset < 3900 && `rotate(5deg)`}`,
          transition: "transform 0.3s linear",
        }}
        className="slider-image absolute top-0 w-[390px] transition-transform h-[435px] flex justify-center items-center "
      >
        <Image
          src="/images/story-image.jpg"
          alt="colleection-images"
          width={390}
          height={435}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default StoryPictures;
