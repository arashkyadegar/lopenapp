import { PropsWithChildren } from "react";

import Image from "next/image";
import React from "react";
export default function CommentComponent({ props }: any) {
  return (
    <>
      {/* user single comment */}
      <div className="flex flex-col border-b even:bg-[#F3F4F8] border-gray-400 p-4 my-2">
        <div className="flex flex-row justify-between">
          <a className="text-base font-bold ">ارشک یادگار</a>
          <a>1392/01/01</a>
        </div>

        <p className="text-sm text-justify mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده
        </p>
      </div>
    </>
  );
}
