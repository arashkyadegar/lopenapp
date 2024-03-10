import MainLayout from "@/components/common/mainLayout";
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import React from "react";

export default function About() {
  return (
    <div className="container px-4">
      <div className="flex flex-col w-full">
        <div className="flex flex-col  w-4/4 rounded-xl  bg-white">
          <div className="p-2 ">
            <a className=" flex text-2xl border-b  border-gray-400">
              درباره ما
            </a>
          </div>
          <div className="flex  max-w-max  flex-col sm:flex-row items-center justify-center mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
