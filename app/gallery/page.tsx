"use client";

import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { gallery, videos } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { LuImages, LuVideo } from "react-icons/lu";

function Gallery() {
  const [mediaType, setMediaType] = useState("photos");
  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10">
        <div className="flex items-center justify-center gap-2 border border-neutral-200 w-fit mx-auto rounded-full p-2">
          <span
            onClick={() => setMediaType("photos")}
            className={
              mediaType === "photos"
                ? "flex items-center gap-2 px-3 py-2 text-xs md:text-sm cursor-pointer bg-linear-to-r from-[#fb0200] to-[#0ccf06] text-white rounded-full"
                : "flex items-center gap-2 px-3 py-2 text-xs md:text-sm cursor-pointer bg-white text-neutral-500"
            }
          >
            <LuImages /> Photos
          </span>
          <span
            onClick={() => setMediaType("videos")}
            className={
              mediaType === "videos"
                ? "flex items-center gap-2 px-3 py-2 text-xs md:text-sm cursor-pointer bg-linear-to-r from-[#fb0200] to-[#0ccf06] text-white rounded-full"
                : "flex items-center gap-2 px-3 py-2 text-xs md:text-sm cursor-pointer bg-white text-neutral-500"
            }
          >
            <LuVideo /> Videos
          </span>
        </div>
        <div className="w-full max-w-7xl">
          <h4 className="md:text-4xl text-2xl font-bold text-center text-neutral-700 mt-2 md:mt-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
              {mediaType === "photos" ? "Photos" : "Videos"}
            </span>
          </h4>
          {mediaType === "photos" && (
            <div className="grid grid-cols-auto md:gap-5 gap-2 md:mt-4 mt-2">
              {gallery.map((pic, i) => (
                <div
                  key={i}
                  className="aspect-[15/11] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={pic.img}
                    width={750}
                    height={550}
                    alt={pic.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
          {mediaType === "videos" && (
            <div className="grid grid-cols-auto md:gap-5 gap-2 md:mt-4 mt-2">
              {videos.map((vid, i) => (
                <div
                  key={i}
                  className="aspect-[15/11] overflow-hidden rounded-3xl"
                >
                  <video
                    src={vid.video}
                    controls
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Subscription />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Gallery;
