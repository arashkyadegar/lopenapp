import MainLayout from "@/components/common/mainLayout";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";

export default function Faqs() {
  return <>this is faqs index</>;
}
Faqs.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
