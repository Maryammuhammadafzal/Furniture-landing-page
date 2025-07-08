import MapPicture from "@/components/MapPicture";
import StoryPictures from "@/components/StoryPictures";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactPage = () => {
   
  return (
    <div className="w-full h-auto py-10 relative bg-[#FFECD5] flex justify-center items-center">
      <div className="lg:w-[90%] w-full px-3 lg:px-0 flex gap-10 md:flex-row flex-col justify-between items-start">
        <div className="md:w-[50%] w-[90%] flex h-full justify-center flex-col gap-5">
          <h2 className="max-w-4xl font-mono text-5xl sm:text-6xl lg:text-5xl  md:text-5xl text-primary">
            Visit Us
          </h2>
          <p className="xl:text-2xl lg:text-xl text-lg max-w-xl font-sans">
           Explore our showroom at [Store Location(s)] or shop online for a seamless experience.
          </p>
          <div className="py-2 flex flex-col gap-4">
            <p className="text-primary text-3xl font-sans flex items-center gap-1"><span className="font-medium ">Email:</span><span className="text-2xl"> support@[YourDomain].com</span></p>
            <p className="text-primary text-3xl font-sans flex items-center gap-1"><span className="font-medium ">Phone:</span><span className="text-2xl"> +[Your Phone Number]</span></p>
            <p className="text-primary text-3xl font-sans flex items-center gap-1"><span className="font-medium ">Address:</span><span className="text-2xl"> [Your Address]</span></p>
          </div>
        </div>
        <div className="md:w-[50%] w-[90%] h-auto  flex justify-center items-center">
         <MapPicture/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
