import { barMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Bar() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl grid grid-cols-auto-sm md:gap-4 gap-2">
          {barMenu.map((drink, i) => (
            <Link href="/">
              <div>
                <Image
                  src={drink.img}
                  width={450}
                  height={450}
                  alt={drink.name}
                  className="rounded-2xl border border-neutral-200"
                />
                <div className="md:mt-2 mt-1">
                  <h5 className="md:text-lg text-sm font-bold text-neutral-700">
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
    </div>
  );
}

export default Bar;
