import React, { PropsWithChildren, useEffect } from "react";
import MainNavBar from "./mainNavbar";
import MainFooter from "./mainFooter";
import Head from "next/head";

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
      <Head>
        <title>آبنبات لوپن</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavBar></MainNavBar>
      <div>{children}</div>
      <MainFooter></MainFooter>
    </>
  );
}
