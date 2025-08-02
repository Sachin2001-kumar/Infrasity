"use client";
import React from "react";
import { motion } from "motion/react";
import { NAV_LINKS } from "../data/Data";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <header className="z-[999] relative">
        <motion.div
          className="hidden sm:block fixed top-0 sm:top-6 left-1/2 -translate-x-1/2
             h-[4.5rem] w-full sm:w-[50%] bg-purple-950 border-none rounded-xl sm:border sm:rounded-xl
              items-center justify-between px-4"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ opacity: 1, x: "0", y: 0 }}
        >
          <motion.div className="flex gap-4 text-center justify-center items-center mt-3">
            <motion.ul className="flex gap-4 list-none">
              {NAV_LINKS.map((item) =>
                item.href ? (
                  <li key={item.href} className="">
                    <Link href={item.href} className="">
                      {item.text}
                    </Link>
                  </li>
                ) : null
              )}
            </motion.ul>
            <motion.button
              className="bg-green-400 p-2 px-4 border border-neutral-800 rounded-xl text-black
             transition-transform duration-200 hover:bg-green-600 hover:-translate-y-0.5 hover:scale-105"
            >
              Book A Developer
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Desktop View */}
        {/* <nav  className="">
            <ul></ul>
        </nav> */}
      </header>
    </>
  );
};
