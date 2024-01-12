import MainLayout from "@/components/common/mainLayout";
import { ReactElement } from "react";
import React from "react";
import FaqsComponent from "@/components/faqs";
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbfaqs/`);
  const repo = await res.json();
  const faqs = JSON.stringify(repo);
  return { props: { faqs } };
}

export default function Faqs(rslt: any) {
  return <FaqsComponent props={rslt} />;
}
Faqs.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
