import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBed } from "react-icons/fa";
import { IoMdWine } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

function About() {
  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-6xl text-3xl font-bold text-neutral-700">
              We Offer You Delicious Meals{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                & Entertainment
              </span>
            </h4>
            <p className="md:mt-8 mt-4 text-neutral-500">
              At Maggies Lounge, great food meets great vibes. Enjoy a
              mouthwatering selection of freshly prepared dishes while soaking
              in lively entertainment from top performers and DJs. Whether
              you’re here for a meal, a drink, or a night of fun, we’ve got
              everything you need to satisfy your taste and lift your spirit.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-about-img.jpeg"
              width={650}
              height={400}
              alt="maggies-about-img"
              className="w-full h-auto md:rounded-3xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-linear-to-r from-[#fb0200] to-[#0ccf06]">
        <div className="w-full max-w-7xl grid grid-cols-auto md:gap-4 gap-2">
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoFastFoodOutline className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Restaurant
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Delicious Dishes
              </p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoMdWine className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Bar
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Refreshing Drinks
              </p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <FaBed className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Accomodation
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">Comfortable</p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <MdOutlineCalendarMonth className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Events
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Top Performances
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center md:flex-row flex-col gap-5 md:gap-10">
          <div className="w-full">
            <h4 className="md:text-5xl text-2xl font-bold text-neutral-700">
              At Maggies Lounge, You're Served{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                by Professionals
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              At Maggies Lounge, we take pride in offering service that goes
              beyond expectations. Our experienced chefs, bartenders, and
              attendants are passionate about what they do — ensuring that every
              dish, drink, and detail is handled with care. From the moment you
              arrive to the time you leave, our friendly team is committed to
              making your visit comfortable, enjoyable, and truly unforgettable.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-staff.png"
              width={650}
              height={400}
              alt="maggies-staff"
              className="w-full h-auto md:rounded-3xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl text-center">
          <h4 className="md:text-5xl text-2xl font-bold max-w-lg mx-auto text-neutral-700">
            Welcome to Maggies Lounge{" "}
            <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
              Garden
            </span>
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 max-w-2xl mx-auto md:mt-8 mt-4">
            Step into the serene atmosphere of our beautiful garden — a perfect
            spot to relax, dine, and enjoy the fresh air. Whether you’re sipping
            your favorite drink, sharing a meal with friends, or attending an
            event, Maggies Lounge Garden offers the ideal outdoor experience.
          </p>

          <div className="w-full md:p-4 p-2 bg-white grid grid-cols-auto md:gap-4 gap-2 rounded-4xl md:mt-12 mt-6 drop-shadow-xl">
            <div className="aspect-[15/11] overflow-hidden">
              <Image
                src="/maggies-garden-1.jpeg"
                width={650}
                height={650}
                alt="maggies-garden-1"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[15/11] overflow-hidden">
              <Image
                src="/maggies-garden-2.jpeg"
                width={650}
                height={650}
                alt="maggies-garden-2"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[15/11] overflow-hidden">
              <Image
                src="/maggies-garden-3.jpeg"
                width={650}
                height={650}
                alt="maggies-garden-3"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[15/11] overflow-hidden">
              <Image
                src="/maggies-garden-4.jpeg"
                width={650}
                height={650}
                alt="maggies-garden-4"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-5xl text-2xl font-bold text-neutral-700">
              Experience Unmatched Luxury at{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                Maggies VIP
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              Indulge in an exclusive experience designed for ultimate comfort
              and sophistication. At Maggies VIP, you’ll enjoy premium service,
              a refined ambiance, and personalized attention that make every
              moment feel truly special.
            </p>
          </div>
          <div className=" flex items-center md:flex-row flex-col md:gap-4 gap-2">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/maggies-vip-1.jpeg"
                width={650}
                height={650}
                alt="maggies-vip-1"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/maggies-vip-2.jpeg"
                width={650}
                height={650}
                alt="maggies-vip-2"
                className="md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Subscription />
      <Footer />
      <Copyright />
    </div>
  );
}

export default About;
