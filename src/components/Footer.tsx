import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:p-3 p-2 flex justify-center items-center w-full h-full">
      <div className="lg:w-[90%] w-full h-full flex justify-center items-center flex-col gap-6">
        <div className="py-10 flex flex-wrap justify-start 2xl:gap-28 xl:gap-20 lg:gap-14 gap-7 w-full h-auto items-start">
          <div className="w-auto h-auto flex gap-3 flex-col">
            <h3 className="text-primary font-mono lg:text-3xl md:text-2xl text-xl">Quick Links</h3>
            <ul className="flex flex-col text-primary font-sans lg:text-xl md:text-lg text-base gap-2">
              <li className="">Home</li>
              <li className="">About Us</li>
              <li className="">Category</li>
              <li className="">Shop</li>
              <li className="">Contact Us</li>
            </ul>
          </div>
          <div className="w-auto h-auto flex gap-3 flex-col">
            <h3 className="text-primary font-mono lg:text-3xl md:text-2xl text-xl">Contact Us</h3>
            <ul className="flex flex-col text-primary font-sans lg:text-xl md:text-lg text-base gap-2">
              <li className="">michelle.rivera@example.com</li>
              <li className="">(808) 555-0111</li>
              <li className="">1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
            </ul>
          </div>
          <div className="w-auto h-auto flex gap-3 flex-col">
            <h3 className="text-primary font-mono lg:text-3xl md:text-2xl text-xl">Social Media</h3>
            <ul className="flex flex-wrap text-primary font-sans md:text-3xl text-2xl gap-8 lg:max-w-[200px] max-w-[150px]">
              <li className=""><FaFacebook /></li>
              <li className=""><FaXTwitter /></li>
              <li className=""><FaLinkedin /></li>
              <li className=""><FaInstagram /></li>
              <li className=""><FaWhatsapp /></li>
            </ul>
          </div>
        </div>
        <div className="copy-right w-full flex justify-between flex-wrap gap-3 items-center">
          <p className="text-primary lg:text-xl md:text-lg text-center text-base font-sans">
            © 2021 all copyright reserved. All Rights Reserved.
          </p>
          <ul className="flex gap-3 ">
            <li className="text-primary md:text-xl text-lg font-sans">
              privacy policy
            </li>
            <li className="text-primary md:text-xl text-lg font-sans">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
