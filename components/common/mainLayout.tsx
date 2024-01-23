import React, { PropsWithChildren, useEffect } from "react";
import MainNavBar from "./mainNavbar";
import MainFooter from "./mainFooter";

export default function MainLayout({ children }: PropsWithChildren) {
  // let siteinfo;
  // console.log(children);
  // React.Children.forEach(children, (element) => {
  //   if (!React.isValidElement(element)) return;
  //   siteinfo = JSON.parse(element.props.siteinfo);
  //   //do something with source..
  // });

  return (
    <>
      <MainNavBar ></MainNavBar>
      <div>{children}</div>
      <MainFooter ></MainFooter>
    </>
  );
}
