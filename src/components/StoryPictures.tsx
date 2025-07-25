"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const StoryPictures = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative w-full flex justify-center  items-center h-[500px]">
      <div
        style={{
          transform: `${offset > 3800 && offset < 3900 && `rotate(-5deg)`}`,
          transition: "transform 0.3s linear",
        }}
        className="slider-image absolute top-0 xs:w-[390px] w-[95%] transition-transform xs:h-[435px] h-auto flex justify-center items-center "
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
        className="slider-image absolute top-0 xs:w-[390px] w-[95%] transition-transform xs:h-[435px] h-auto flex justify-center items-center "
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
