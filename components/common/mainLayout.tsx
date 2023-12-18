import React, { PropsWithChildren } from "react";
import MainNavBar from "./mainNavbar";
import MainFooter from "./mainFooter";
export default function MainLayout({ children }: PropsWithChildren)  {
  return (
    <>
      <MainNavBar />
      <div >{children}</div>
      <MainFooter />
    </>
  );
};