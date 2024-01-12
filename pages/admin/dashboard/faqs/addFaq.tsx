import MainLayout from "@/components/common/mainLayout";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";

export default function AddFaq() {
  return <>this is faqs AddFaq</>;
}
AddFaq.getLayout = function EditFaq(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
