'use client'
import React, { useState } from "react";
import { LineChart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  let nav_data = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/service",
      name: "Services"
    },
    {
      link: "/about",
      name: "Why Choose Us",
    },
    {
      link: "/team",
      name: "Team",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];
  return (
    <header className="flex w-full font-mono h-full justify-center items-center py-5 lg:px-3 px-2">
      <div className="flex justify-between items-center h-auto w-full">
        <a href="/" className="logo lg:ml-8 xl:ml-12 md:ml-5 sm:ml-3">
          <img src='/images/logo.png' alt="logo" className="w-auto h-auto" />
        </a>
        <nav className="w-auto h-auto flex  items-center ">
          <ul className="w-auto md:flex xl:gap-3 lg:gap-2 gap-1 justify-center items-center hidden">
            {nav_data.map(({ link, name }, index) => (
              <li key={index} className="p-[5px] flex justify-center items-center">
                <a href={link} className="text-secondary hover:font-bold font-medium active:font-bold focus:font-bold xl:text-lg min-[880px]:text-sm text-xs lg:text-base">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div  onClick={() => setIsMenuOpen(!IsMenuOpen)} className="menu-button md:hidden block px-3 text-secondary">
            <Menu />
          </div>

        </nav>
        <div
  className={`w-60 flex h-screen absolute top-0 bottom-0 right-0 z-50 transition-transform duration-300 drop-shadow-md rounded-tl-2xl rounded-bl-2xl  bg-white drop-shadow-primary ${
    IsMenuOpen ? "translate-x-0 " : "translate-x-100 md:hidden"
  }`}
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
            {nav_data &&
              nav_data.map((item, index) => (
                <Link href={item.link}>
                  <li
                    key={index}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-3 border-b text-xl text-primary font-mono border-primary/20 text-left w-full h-auto"
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;