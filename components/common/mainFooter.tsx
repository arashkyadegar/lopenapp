// components/common/MainFooter.tsx
import React, { PropsWithChildren } from "react";
import Image from "next/image";
export default function MainFooter({ children }: PropsWithChildren) {
  return (
    <>
      <div className="w-full">
        <Image
          src="/Capture123.PNG"
          width={500}
          height={500}
          className="w-full"
          alt="footer"
        />
      </div>
    </>
  );
}
