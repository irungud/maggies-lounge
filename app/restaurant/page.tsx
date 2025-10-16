import { Bitings, breakfast, MainCourse } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Restaurant() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-3xl text-xl font-bold text-neutral-700">
            Breakfast &{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Snacks
            </span>
          </h4>
          <div className="grid grid-cols-auto-sm md:gap-4 gap-2 md:mt-4 mt-2">
            {breakfast.map((dish, i) => (
              <Link href={`/restaurant/foods/${dish.id}`} key={i}>
                <div>
                  <Image
                    src={dish.img}
                    width={250}
                    height={250}
                    alt={dish.name}
                    className="rounded-2xl"
                  />
                  <div className="md:mt-2 mt-1">
                    <h5 className="md:text-lg text-sm font-bold text-neutral-700">
                      {dish.name}
                    </h5>
                    <p className="text-xs md:text-sm text-neutral-500">
                      {dish.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center border-t border-neutral-300">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-3xl text-xl font-bold text-neutral-700">
            Bitings
          </h4>
          <div className="grid grid-cols-auto-sm md:gap-4 gap-2 md:mt-4 mt-2">
            {Bitings.map((dish, i) => (
              <Link href={`/restaurant/bitings/${dish.id}`} key={i}>
                <div>
                  <Image
                    src={dish.img}
                    width={250}
                    height={250}
                    alt={dish.name}
                    className="rounded-2xl"
                  />
                  <div className="md:mt-2 mt-1">
                    <h5 className="md:text-lg text-sm font-bold text-neutral-700">
                      {dish.name}
                    </h5>
                    <p className="text-xs md:text-sm text-neutral-500">
                      {dish.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center border-t border-neutral-300">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-3xl text-xl font-bold text-neutral-700">
            Main{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Course
            </span>
          </h4>
          <div className="grid grid-cols-auto-sm md:gap-4 gap-2 md:mt-4 mt-2">
            {MainCourse.map((dish, i) => (
              <Link href={`/restaurant/main-course/${dish.id}`} key={i}>
                <div>
                  <Image
                    src={dish.img}
                    width={250}
                    height={250}
                    alt={dish.name}
                    className="rounded-2xl"
                  />
                  <div className="md:mt-2 mt-1">
                    <h5 className="md:text-lg text-sm font-bold text-neutral-700">
                      {dish.name}
                    </h5>
                    <p className="text-xs md:text-sm text-neutral-500">
                      {dish.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
