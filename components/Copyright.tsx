import Image from "next/image";
import Link from "next/link";
import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center border-t-2 border-neutral-100">
        <div className="w-full max-w-7xl flex items-center justify-between flex-wrap gap-5">
          <p className="text-xs md:text-sm text-neutral-500">
            Copyright &copy;{currentYear} - Maggies Lounge - All Rights Reserved
          </p>
          <Link href="https://wa.me/254711129536" target="_blank">
            <Image
              src="/powered-by-jeinet.png"
              width={250}
              height={100}
              alt="powered-by-jeinet"
              className="w-32 h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
