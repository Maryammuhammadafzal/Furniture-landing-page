"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";



const FeaturedProduct = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("chair");

  const allCategories = ["chair", "sofa", "cupboard", "swing", "table"];

const products = [
  // Sofa
  {
    id: 1,
    name: "Classic Grey Sofa",
    price: 40,
    image: "/images/sofa1.png",
    category: "sofa",
  },
  {
    id: 2,
    name: "Velvet Comfort Sofa",
    price: 40,
    image: "/images/sofa2.png",
    category: "sofa",
  },
  {
    id: 3,
    name: "Luxury Leather Sofa",
    price: 40,
    image: "/images/sofa3.png",
    category: "sofa",
  },
  {
    id: 4,
    name: "Minimalist Fabric Sofa",
    price: 40,
    image: "/images/sofa4.png",
    category: "sofa",
  },
  {
    id: 5,
    name: "Cozy Corner Sofa",
    price: 40,
    image: "/images/sofa5.png",
    category: "sofa",
  },
  {
    id: 6,
    name: "Modern L-Shape Sofa",
    price: 40,
    image: "/images/sofa6.png",
    category: "sofa",
  },

  // Chair
  {
    id: 7,
    name: "Modern Lounge Chair",
    price: 25,
    image: "/images/chair1.png",
    category: "chair",
  },
  {
    id: 8,
    name: "Rocking Wooden Chair",
    price: 25,
    image: "/images/chair2.png",
    category: "chair",
  },
  {
    id: 9,
    name: "Patio Garden Chair",
    price: 25,
    image: "/images/chair3.png",
    category: "chair",
  },
  {
    id: 10,
    name: "Ergonomic Office Chair",
    price: 25,
    image: "/images/chair4.png",
    category: "chair",
  },
  {
    id: 11,
    name: "Accent Armchair",
    price: 25,
    image: "/images/chair5.png",
    category: "chair",
  },
  {
    id: 12,
    name: "Foldable Beach Chair",
    price: 25,
    image: "/images/chair6.png",
    category: "chair",
  },

  // Cupboard
  {
    id: 13,
    name: "Oak Wooden Cupboard",
    price: 100,
    image: "/images/cupboard1.png",
    category: "cupboard",
  },
  {
    id: 14,
    name: "Sliding Door Cupboard",
    price: 100,
    image: "/images/cupboard2.png",
    category: "cupboard",
  },
  {
    id: 15,
    name: "White Glossy Cupboard",
    price: 100,
    image: "/images/cupboard3.png",
    category: "cupboard",
  },

  // Swing
  {
    id: 16,
    name: "Patio Swing Set",
    price: 65,
    image: "/images/swing1.png",
    category: "swing",
  },
  {
    id: 17,
    name: "Rattan Hanging Swing",
    price: 65,
    image: "/images/swing2.png",
    category: "swing",
  },
  {
    id: 18,
    name: "Wooden Porch Swing",
    price: 65,
    image: "/images/swing3.png",
    category: "swing",
  },
  {
    id: 19,
    name: "Iron Stand Swing",
    price: 65,
    image: "/images/swing4.png",
    category: "swing",
  },
  {
    id: 20,
    name: "Canopy Twin Swing",
    price: 65,
    image: "/images/swing5.png",
    category: "swing",
  },
  {
    id: 21,
    name: "Indoor Net Swing",
    price: 65,
    image: "/images/swing6.png",
    category: "swing",
  },

  // Table
  {
    id: 22,
    name: "Glass Top Table",
    price: 45,
    image: "/images/table1.png",
    category: "table",
  },
  {
    id: 23,
    name: "Solid Wood Table",
    price: 45,
    image: "/images/table2.png",
    category: "table",
  },
  {
    id: 24,
    name: "Round Marble Table",
    price: 45,
    image: "/images/table3.png",
    category: "table",
  },
  {
    id: 25,
    name: "Foldable Study Table",
    price: 45,
    image: "/images/table4.png",
    category: "table",
  },
  {
    id: 26,
    name: "Metal Frame Table",
    price: 45,
    image: "/images/table5.png",
    category: "table",
  },
  {
    id: 27,
    name: "Small Side Table",
    price: 45,
    image: "/images/table6.png",
    category: "table",
  },
];



  const filteredProducts = products
    .filter((product) => product.category === selectedCategory)
    .slice(0, 6);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full h-auto sm:justify-between justify-center gap-6 items-center">
      <div
        className="menu-con w-10 h-10 absolute top-[12%] left-[11%]"
        onClick={() => setIsMenuOpen(!IsMenuOpen)}
      >
        <Image src="/images/menu-icon.png" alt="icon" width={35} height={14} />
      </div>
      <div
        className={`${
          IsMenuOpen ? "flex" : "hidden"
        } w-60 h-auto absolute top-0 bottom-0 left-0 z-50 drop-shadow-md rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-white drop-shadow-primary`}
      >
        <ul className="w-full h-full flex gap-3 p-3 flex-col">
          <li
            className="menu-con w-full h-auto p-2 flex justify-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/cross-icon.png"
              alt="icon"
              width={25}
              height={25}
            />
          </li>
          {allCategories &&
            allCategories.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCategory(item);
                  setIsMenuOpen(false);
                }}
                className="px-3 py-3 border-b text-xl text-primary font-mono border-primary/20 text-left w-full h-auto"
              >
                {item}
              </li>
            ))}
        </ul>
      </div>

      {filteredProducts &&
        filteredProducts.map((product, index) => (
          <Card key={index} className="w-[380px] border-none p-0 shadow-none h-[480px] flex justify-center items-center">
            <CardContent className="flex flex-col h-full justify-between gap-4">
              <div className="h-auto  w-auto flex min-h-[350px]  max-h-[400px] max-w-[370px] justify-center items-end">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={200}
                  height={200}
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="flex justify-between w-full h-auto items-center">
                <h4 className="text-lg font-mono flex items-center gap-[2px]">
                  {product.name} <hr className="w-[17px] border border-primary " />
                </h4>
                <p className="text-xl font-mono">${product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default FeaturedProduct;
