import React from "react";
export default function AdsDoubleComponent({ props }: any) {
  return (
    <>
      <img
        src="/sugar.jpg"
        width={500}
        height={500}
        className="h-fit w-1/3 aspect-auto rounded-md "
        alt="adv image"
        crossOrigin = "anonymous"
      />
    </>
  );
}
