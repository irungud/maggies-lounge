import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex justify-between flex-wrap gap-5">
          <div className="w-full max-w-lg">
            <Link href="/">
              <Image
                src="/maggies-logo-2.png"
                width={120}
                height={120}
                alt="maggies-logo"
                className="w-auto h-16 rounded-full"
              />
            </Link>
            <p className="text-neutral-500 md:mt-4 mt-2 max-w-md">
              At Maggies Lounge, great food meets great vibes. Enjoy a
              mouthwatering selection of freshly prepared dishes while soaking
              in lively entertainment from top performers and DJs. Whether
              you’re here for a meal, a drink, or a night of fun, we’ve got
              everything you need to satisfy your taste and lift your spirit.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-5">
            <div>
              <h4 className="text-xl font-bold text-neutral-700">
                Quick Links
              </h4>
              <ul className="flex flex-col md:gap-3 gap-1 md:mt-3 mt-1">
                <Link href="/">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Home
                  </li>
                </Link>
                <Link href="/about-us">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> About
                  </li>
                </Link>
                <Link href="/restaurant">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Restaurant
                  </li>
                </Link>
                <Link href="/bar">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Bar
                  </li>
                </Link>
                <Link href="/accomodation">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Accomodation
                  </li>
                </Link>
                <Link href="/gallery">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Gallery
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Contact
                  </li>
                </Link>
                {/*<Link href="/book-now">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2 hover:text-[#0ccf06] transition-all duration-500 hover:underline">
                    <FaArrowRight /> Book Now
                  </li>
                </Link>*/}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-neutral-700">
                Contact Links
              </h4>
              <ul className="flex flex-col md:gap-3 gap-1 md:mt-3 mt-1">
                <Link href="tel:+254738936218">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0ccf06] rounded-full flex items-center justify-center">
                      <LuPhoneCall className="text-white" />
                    </span>
                    <p>+254 738 936 218 - Restaurant</p>
                  </li>
                </Link>
                <Link href="tel:+254786484277">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0ccf06] rounded-full flex items-center justify-center">
                      <LuPhoneCall className="text-white" />
                    </span>
                    <p>+254 786 484 277 - Accomodation</p>
                  </li>
                </Link>
                <Link href="tel:+254725939703">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0ccf06] rounded-full flex items-center justify-center">
                      <LuPhoneCall className="text-white" />
                    </span>
                    <p>+254 725 939 703 - Accomodation</p>
                  </li>
                </Link>
                <Link href="mailto:info@maggieslounge.com">
                  <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0ccf06] rounded-full flex items-center justify-center">
                      <MdOutlineMarkEmailUnread className="text-white" />
                    </span>
                    <p>info@maggieslounge.com</p>
                  </li>
                </Link>
                <li className="text-xs md:text-sm text-neutral-500 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#0ccf06] rounded-full flex items-center justify-center">
                    <MdOutlineLocationOn className="text-white" />
                  </span>
                  <p>Along Ndwaru Rd.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
