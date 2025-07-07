import { Button } from "@/components/ui/button";
import React from "react";

const StoryPage = () => {
  return (
    <div className="w-full h-auto min-h-[550px] bg-[#FFECD5] flex justify-center items-center">
      <div className="w-[90%] flex md:flex-row flex-col justify-between items-center md:py-20 py-14">
        <div className="w-[50%] flex h-auto flex-col gap-3">
          <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
            Discover Our Unique Furniture Collections
          </h2>
          <p className="text-2xl max-w-xl font-sans" >
            At Harmony Home Interiors, we’ve been crafting furniture that
            enhances everyday living for years. Rooted in tradition and inspired
            by modern trends, our brand is committed to quality, innovation, and
            customer satisfaction. Every piece tells a story of passion and
            precision.
          </p>
          <div className="py-2">
            <Button className="text-white bg-primary px-8 py-3 rounded-full drop-shadow-lg shadow-[#31554F78] blur-md">See All Collection</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
