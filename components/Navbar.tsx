"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [navList, setNavList] = useState("");
  return (
    <div>
      <div className="px-[8%] h-20 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Link href="/">
            <Image
              src="/maggies-logo.png"
              width={120}
              height={120}
              alt="maggies-logo"
              className="w-16 h-auto rounded-full"
            />
          </Link>
          <nav className="max-sm:hidden">
            <ul className="flex items-center gap-5">
              <Link href="/">
                <li className="text-xs md:text-sm text-neutral-500">Home</li>
              </Link>
              <Link href="/about-us">
                <li className="text-xs md:text-sm text-neutral-500">About</li>
              </Link>
              <Link href="/restaurant">
                <li className="text-xs md:text-sm text-neutral-500">
                  Restaurant
                </li>
              </Link>
              <Link href="/bar">
                <li className="text-xs md:text-sm text-neutral-500">Bar</li>
              </Link>
              <Link href="/accomodation">
                <li className="text-xs md:text-sm text-neutral-500">
                  Accomodation
                </li>
              </Link>
              <Link href="/gallery">
                <li className="text-xs md:text-sm text-neutral-500">Gallery</li>
              </Link>
              {/*<Link href="/contact">
                <li className="text-xs md:text-sm text-neutral-500">Contact</li>
              </Link>*/}
              <Link href="/contact">
                <li>
                  <button className="bg-gradient-to-r from-[#b86320] to-[#f1852d] px-6 py-3 rounded-full text-xs md:text-sm text-white cursor-pointer">
                    Contact
                  </button>
                </li>
              </Link>
            </ul>
          </nav>
          <button
            className="md:hidden border border-neutral-200 w-10 h-10 rounded-md"
            onClick={() => setNavList(!navList)}
          >
            X
          </button>
          {navList ? (
            <ul className="flex md:hidden flex-col absolute left-0 top-20 w-full bg-white shadow p-[8%] gap-3">
              <Link href="/" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">Home</li>
              </Link>
              <Link href="/about-us" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">About</li>
              </Link>
              <Link href="/restaurant" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">
                  Restaurant
                </li>
              </Link>
              <Link href="/bar" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">Bar</li>
              </Link>
              <Link href="/accomodation" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">
                  Accomodation
                </li>
              </Link>
              <Link href="/gallery" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">Gallery</li>
              </Link>
              <Link href="/contact" onClick={() => setNavList(!navList)}>
                <li className="text-xs md:text-sm text-neutral-500">Contact</li>
              </Link>
              <Link href="/book-now" onClick={() => setNavList(!navList)}>
                <button className="w-full bg-gradient-to-r from-[#b86320] to-[#f1852d] px-6 py-4 text-xs md:text-sm rounded-full text-white">
                  Book Now
                </button>
              </Link>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
