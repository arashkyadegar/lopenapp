import MainLayout from "@/components/common/mainLayout";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";

export default function EditFaq() {
  return <>this is faqs edit</>;
}
EditFaq.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
