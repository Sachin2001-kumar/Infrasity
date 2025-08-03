"use client";
import React from "react";
import Image from "next/image";

export const ROI = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-400  py-12 rounded-lg max-xs:mx-4 max-sm:mx-8 mx-12 my-12 gap-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="">
          <img
            src="/Infrasity.png"
            alt="Infrasity_Logo"
            loading="lazy"
            width={60}
            height={60}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col text-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#130101d4] tracking-tight font-bold">
            Get Started With Infrasity
          </h1>
          <p className="w-2/3 md:w-2/3 font-bold text-[#483108] pt-2">
            Infrasity is the only platform which provides you with developer
            focused content for your products or services
          </p>
        </div>

        <div className="flex gap-5 pt-5 cursor-pointer">
          <a
            href="/tools/roi-cal"
            className="bg-white text-black font-semibold py-2 px-4 rounded shadow hover:bg-gray-900 hover:text-white"
          >
            ROI Calculator
          </a>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-900">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};
