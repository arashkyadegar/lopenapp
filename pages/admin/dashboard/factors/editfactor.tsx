"use client";
import CheckoutGridComponent from "@/components/checkout_grid";
import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import CheckoutFormViewComponent from "@/components/checkout_formview";
import { factorFormFilled } from "@/redux/store/factorForm";
import { useAppDispatch } from "@/redux/store/hooks";
import { factorsRecieved } from "@/redux/store/factor";
import { useSearchParams } from "next/navigation";
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { req } = context;
  const { cookies } = req;

  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const response_factor = await fetch(`${baseURL}/api/factors/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: cookies.alonefighterx,
    },
  });
  const repo_factor = await response_factor.json();

  const response_factorDetails = await fetch(
    `${baseURL}/api/wbfactordetails/${id}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: cookies.alonefighterx,
      },
    }
  );
  const repo_factorDetails = await response_factorDetails.json();

  if (response_factor.status == 401) {
    return {
      redirect: {
        permanent: false,
        destination: process.env.NEXT_PUBLIC_LOGINREDIRECT,
      },
    };
  }

  const factor = JSON.stringify(repo_factor);
  const factorDetails = JSON.stringify(repo_factorDetails);
  return { props: { factor: factor, factorDetails: factorDetails } };
}
export default function EditFactor(rslt: any) {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const id = params.get("id");

  const factor = JSON.parse(rslt.factor)[0];
  const factorDetails = JSON.parse(rslt.factorDetails);


  useEffect(() => {
    dispatch(factorFormFilled(factor));
    dispatch(factorsRecieved(factorDetails));
  }, [factor]);
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col justify-between   gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                جزییات فاکتور
              </a>
            </div>
            <div className="flex flex-col ">
              <CheckoutGridComponent props={factorDetails} />
              <CheckoutFormViewComponent props={factor} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EditFactor.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
