import { Inter } from "next/font/google";
import IndexComponent from "@/components";
import { ReactElement } from "react";
import MainLayout from "@/components/common/mainLayout";
import Head from "next/head";

export default function Home(rslt: any) {
  return (
    <>
      <IndexComponent props={rslt} />
    </>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbproducts`);
  const repo = await res.json();
  const products = JSON.stringify(repo);

  const res_siteinfo = await fetch(`${baseURL}/api/wbsiteinfos`);
  const repo_siteinfo = await res_siteinfo.json();
  const siteinfo = JSON.stringify(repo_siteinfo);
  return { props: { products, siteinfo } };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
