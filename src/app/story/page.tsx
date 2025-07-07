import StoryPictures from "@/components/StoryPictures";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StoryPage = () => {
   
  return (
    <div className="w-full h-auto min-h-[550px] relative bg-[#FFECD5] flex justify-center items-center">
      <div className="w-[80px] h-[80px] absolute lg:top-[23%] md:top-[24%] flex justify-center items-center lg:left-[31%] xl:left-[28%]  md:left-[36%] 2xl:left-[25%]">
        <Image
          src="/images/star-4.png"
          alt="star-image"
          width={50}
          height={50}
          className="rotate"
        />
      </div>
      <div className="lg:w-[90%] w-full px-3 lg:px-0 flex gap-10 md:flex-row flex-col justify-between items-center md:py-20 py-14">
        <div className="md:w-[50%] w-[90%] flex h-auto flex-col gap-5">
          <h2 className="max-w-4xl font-mono text-5xl sm:text-6xl lg:text-5xl  md:text-5xl text-primary">
            Our Story
          </h2>
          <p className="xl:text-2xl lg:text-xl text-lg max-w-xl font-sans">
            At Harmony Home Interiors, we’ve been crafting furniture that
            enhances everyday living for years. Rooted in tradition and inspired
            by modern trends, our brand is committed to quality, innovation, and
            customer satisfaction. Every piece tells a story of passion and
            precision.
          </p>
          <div className="py-2">
            <Button className="text-secondary bg-primary px-8 py-6 text-lg rounded-full drop-shadow-lg drop-shadow-[#31554F78] hover:drop-shadow-none hover:scale-90 ">
              See All Collection
            </Button>
          </div>
        </div>
        <div className="md:w-[50%] w-[90%] h-auto p-3 flex justify-center items-center">
         <StoryPictures/>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
