import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const TestimonialCard = () => {
  const testimonial = [
    {
      name: "Kristin Watson",
      description: `"The sectional sofa we purchased from Harmony Home Interiors transformed our living room. It’s beautiful and incredibly comfortable!"`,
      image: "/images/testimonial-image.png",
    },
    {
      name: "Kristin Watson",
      description: `"The sectional sofa we purchased from Harmony Home Interiors transformed our living room. It’s beautiful and incredibly comfortable!"`,
      image: "/images/testimonial-image.png",
    },
    {
      name: "Kristin Watson",
      description: `"The sectional sofa we purchased from Harmony Home Interiors transformed our living room. It’s beautiful and incredibly comfortable!"`,
      image: "/images/testimonial-image.png",
    },
    {
      name: "Kristin Watson",
      description: `"The sectional sofa we purchased from Harmony Home Interiors transformed our living room. It’s beautiful and incredibly comfortable!"`,
      image: "/images/testimonial-image.png",
    },
    {
      name: "Kristin Watson",
      description: `"The sectional sofa we purchased from Harmony Home Interiors transformed our living room. It’s beautiful and incredibly comfortable!"`,
      image: "/images/testimonial-image.png",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center gap-8">
      {testimonial &&
        testimonial.map((testimonial) => (
          <Card className="w-[310px] h-[340px] flex justify-center items-center relative p-0 shadow-none border-none">
              <div className="w-full h-[260px] z-10 flex justify-center items-center bg-primary-foreground absolute bottom-0 left-0"></div>
            <CardContent className="w-full h-full flex flex-col justify-center absolute top-0 left-0 z-20 items-center px-4 gap-4">
              <div className="w-[103px] h-[103px] flex justify-center items-center">
                <Image
                  src={testimonial.image}
                  alt="icon"
                  width={35}
                  height={14}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-lg font-sans text-center leading-6 text-primary">
                {`${testimonial.description}`}
              </p>
              <div className="py-1">
                <Button className="text-secondary rounded-none bg-primary px-8 py-6 text-lg drop-shadow-lg drop-shadow-[#31554F78] hover:drop-shadow-none hover:scale-90 ">
                  {testimonial.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default TestimonialCard;
