import Link from "next/link";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";

function Topbar() {
  return (
    <div>
      <div className="px-[8%] py-2 md:flex hidden items-center justify-center bg-neutral-950">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-20">
            <Link
              href="tel:+254785546302"
              className="flex items-center gap-2 text-xs md:text-sm"
            >
              <span className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                <LuPhoneCall className="text-neutral-950" />
              </span>
              <p className="text-white">+254 785 546 302</p>
            </Link>
            <Link
              href="tel:+254786484277"
              className="flex items-center gap-2 text-xs md:text-sm"
            >
              <span className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
                <LuPhoneCall className="text-neutral-950" />
              </span>
              <p className="text-white">+254 786 484 277</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
