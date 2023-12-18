import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1 className="text-pink-600">Home</h1>;
}

Home.Layout = "Main";