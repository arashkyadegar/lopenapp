import Image from "next/image";
import { Inter } from "next/font/google";
import SliderComponent from "@/components/slider";
import ProductCardComponent from "@/components/product_card";
import AdsDoubleComponent from "@/components/ads_double";
import TriplexTopButtonsComponent from "@/components/triplexـ_top_bottons";
import IndexComponent from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home(rslt: any) {

  return <IndexComponent props={rslt} />;
}
// This gets called on every request
export async function getStaticProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/wbproducts`);
  const repo = await res.json();
  const products = JSON.stringify(repo);
  return { props: { products } };
}

Home.Layout = "Main";
