import { Button } from "@/components/ui/button";
import React from "react";

const JoinPage = () => {
  return (
    <div className="w-full h-auto md:py-20 sm:py-10 py-5 relative bg-[#FFECD5] flex justify-center items-center">
      <div className="lg:w-[90%] w-full px-3 lg:px-0 flex gap-10 md:flex-row flex-col justify-between items-start">
        <div className="md:w-[60%] w-[90%] flex h-full justify-center flex-col gap-5">
          <h2 className="max-w-4xl font-mono text-5xl sm:text-6xl lg:text-5xl  md:text-5xl text-primary">
            Join Our Community
          </h2>
          <p className="xl:text-2xl lg:text-xl text-lg max-w-xl font-sans">
            Stay updated with our latest collections, exclusive offers, and
            interior design tips. Subscribe to our newsletter and follow us on
            social media for daily inspiration.
          </p>
        </div>
        <div className="md:w-[40%] w-[90%] h-auto  flex justify-end items-center">
             <div className="py-2">
            <Button className="text-secondary bg-primary px-8 py-6 text-lg rounded-full drop-shadow-lg drop-shadow-[#31554F78] hover:drop-shadow-none hover:scale-90 ">
              See All Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
