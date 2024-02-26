import MainLayout from "@/components/common/mainLayout";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import NeshanMap, {
  NeshanMapRef,
} from "@neshan-maps-platform/react-openlayers";
import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import NeshanMapComponent from "@/components/neshanmap";
import React from "react";

export default function About() {
  return <NeshanMapComponent></NeshanMapComponent>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
