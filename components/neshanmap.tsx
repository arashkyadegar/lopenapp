import React from "react";
import { useEffect, useRef } from "react";

export default function NeshanMapComponent({ props }: any) {
  const key = process.env.NEXT_PUBLIC_NESHANKEY;
  const src = `https://api.neshan.org/v1/static?key=${key}&type=neshan&zoom=16&center=37.479537,57.334059&width=940&height=400`;

  return (
    <>
      {/* user single comment */}
      <div className=" flex justify-center flex-row border-b even:bg-[#F3F4F8] border-gray-400 p-4 my-2">
        <iframe
          height="400 "
          className="w-full rounded-lg overflow-hidden "
          src={src}
        />
      </div>
    </>
  );
}
