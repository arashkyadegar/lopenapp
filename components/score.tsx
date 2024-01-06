import { PropsWithChildren } from "react";

import Image from "next/image";
import React from "react";
import ProductCardComponent from "./product_card";
import GoldenStarComponent from "./golden_star";
import GrayStarComponent from "./gray_star";
export default function ScoreComponent({ props }: any) {
  const score = props;

  const goldScore = createGoldenStars(score);
  const grayScore = createGrayStars(5 - Math.round(score));
  function createGoldenStars(n: number) {
    let result = [];
    for (let index = 0; index < n; index++) {
      result.push(<GoldenStarComponent />);
    }
    return result;
  }
  function createGrayStars(n: number) {
    let result = [];
    for (let index = 0; index < n; index++) {
      result.push(<GrayStarComponent />);
    }
    return result;
  }
  return (
    <>
      <div className="flex flex-row gap-2">
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {Math.round(score)}
          </span>
        </div>
        <div className="flex flex-row items-center  rtl:space-x-reverse">
          {goldScore}
          {grayScore}
        </div>
      </div>
    </>
  );
}
