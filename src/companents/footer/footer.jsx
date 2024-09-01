import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        <div className="flex flex-col gap-5">
          <img
            className="w-[120px] object-contain h-[40px]"
            src="https://logodix.com/logo/26494.png"
            alt=""
          />
          <div className="flex items-start md:flex lg:flex gap-[8px] ">
            <button className="pt-[5px]">
              <IoLocationOutline />
            </button>
            <p className="text-[#253D4E] text-[14px] text-start">
              Address: 5171 W Campbell Ave
            </p>
          </div>
          <div className="flex items-start md:flex lg:flex gap-[8px] ">
            <button className="pt-[5px]">
              <FaHeadphonesAlt />
            </button>
            <p className="text-[#253D4E] text-[14px] text-start">
              undefined Kent, Utah 53127 United State
            </p>
          </div>
          <div className="flex items-start md:flex lg:flex gap-[8px] ">
            <button className="pt-[5px]">
              <FaTelegramPlane />
            </button>
            <p className="text-[#253D4E] text-[14px] text-start">
              Email:sale@Nest.com
            </p>
          </div>
          <div className="flex items-start md:flex lg:flex gap-[8px] ">
            <button className="pt-[5px]">
              <CiClock1 />
            </button>
            <p className="text-[#253D4E] text-[14px] text-start">
              Hours:10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <b className="text-[22px] text-[#253D4E] font-[700] text-start">
            About Us
          </b>
          <p className="text-[14px] text-[#253D4E] text-start">
            Delivery Information
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Privacy Policy
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Terms & Conditions
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">Contact Us</p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Support Center
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">Careers</p>
        </div>
        <div className="lg:flex flex-col hidden gap-5">
          <b className="text-[22px] text-[#253D4E] font-[700] text-start">
            Account
          </b>
          <p className="text-[14px] text-[#253D4E] text-start">Sign In</p>
          <p className="text-[14px] text-[#253D4E] text-start">My Wishlist</p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Track My Order
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Shipping Details
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Compare products
          </p>
        </div>
        <div className="md:flex lg:flex  hidden flex-col gap-5">
          <b className="text-[22px] text-[#253D4E] font-[700] text-start">
            Corporate
          </b>
          <p className="text-[14px] text-[#253D4E] text-start">
            Become a Vendor
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Affiliate Program
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
          <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
          <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
          <p className="text-[14px] text-[#253D4E] text-start">Our Suppliers</p>
        </div>
        <div className="md:flex lg:flex  hidden flex-col gap-5">
          <b className="text-[22px] text-[#253D4E] font-[700] text-start">
            Popular
          </b>
          <p className="text-[14px] text-[#253D4E] text-start">
            Become a Vendor
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">
            Affiliate Program
          </p>
          <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
          <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
          <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
          <p className="text-[14px] text-[#253D4E] text-start">Cheese</p>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col gap-1 items-center mt-[20px]">
        <p className="text-[15px] text-[#0009] text-start">
          © 2022, Nest - HTML Ecommerce Template
        </p>
        <p className="text-[12px] text-start text-[#0009]">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
