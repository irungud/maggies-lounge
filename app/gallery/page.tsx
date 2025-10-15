import { gallery } from "@/constants";
import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-3xl text-xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Photos
            </span>
          </h4>
          <div className="grid grid-cols-auto md:gap-5 gap-2 md:mt-4 mt-2">
            {gallery.map((pic, i) => (
              <div key={i}>
                <Image src={pic.img} width={550} height={550} alt={pic.alt} className="rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-3xl text-xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Videos
            </span>
          </h4>
        </div>
      </div> */}
    </div>
  );
}

export default Gallery;
