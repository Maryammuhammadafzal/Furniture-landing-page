import { Button } from "@/components/ui/button";
import React from "react";

const JoinPage = () => {
  return (
    <div className="w-full h-auto md:py-20 sm:py-10 py-5 flex justify-center items-center">
      <div className="lg:w-[90%] w-full h-full px-3 lg:px-0 flex gap-10 md:flex-row flex-col justify-between items-center">
        <div className="2xl:w-[60%] xl:w-[75%] lg:w-[90%] w-[98%] flex h-full justify-center flex-col gap-5">
          <h2 className=" font-mono xs:text-4xl max-xs:text-center text-3xl sm:text-5xl lg:text-5xl xl:text-6xl  md:text-4xl text-primary">
            Join Our Community
          </h2>
          <p className="xl:text-2xl lg:text-xl max-xs:text-center text-primary sm:text-lg text-base font-sans">
            Stay updated with our latest collections, exclusive offers, and
            interior design tips. Subscribe to our newsletter and follow us on
            social media for daily inspiration.
          </p>
        </div>
        <div className="md:w-[40%] w-[90%] h-full flex justify-center flex-col items-end">
             <div className="py-2 flex w-full h-full items-center justify-center md:justify-end">
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
