import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { barMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";


function Bar() {
  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10">
        <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
          Maggies{" "}
          <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
            Bar
          </span>
        </h4>
        <div className="w-full max-w-7xl grid grid-cols-auto md:gap-4 gap-2 mt-2 md:mt-4">
          {barMenu.map((drink, i) => (
            <Link href={`/bar/drinks/${drink.id}`} key={i}>
              <div className="md:p-4 p-2 border border-neutral-200 md:rounded-4xl rounded-2xl">
                <Image
                  src={drink.img}
                  width={450}
                  height={450}
                  alt={drink.name}
                  className="rounded-2xl border border-neutral-200"
                />
                <div className="md:mt-2 mt-1">
                  <h5 className="md:text-lg text-sm font-bold text-[#0ccf06]">
                    {drink.name}
                  </h5>
                  <p className="text-xs md:text-sm text-neutral-500">
                    {drink.category}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Subscription />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Bar;
