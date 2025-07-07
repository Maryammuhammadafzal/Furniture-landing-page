import CollectionAnimation from "@/components/CollectionAnimation";
import React from "react";

const CollectionPage = () => {
  return (
    <div className="w-full h-auto md:py-30 sm:py-20 py-10 flex flex-col justify-center items-center">
      <h2 className="max-w-4xl font-mono md:text-6xl sm:text-5xl text-4xl text-primary text-center">
        Discover Our Unique Furniture Collections
      </h2>

      <div className="w-full px-6 py-30 h-auto flex justify-center items-center">
        <CollectionAnimation/>
      </div>
    </div>
  );
};

export default CollectionPage;
