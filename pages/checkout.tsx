import React, { ReactElement, useEffect, useState } from "react";
import CheckoutFormComponent from "@/components/checkout_form";
import CheckoutGridComponent from "@/components/checkout_grid";
import MainLayout from "@/components/common/mainLayout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { ToastFail } from "@/utility/tostify";
import { factorItemRecieved, submitAddFactorAction } from "@/redux/store/factorItems";
import { factorFormCleard } from "@/redux/store/factorForm";

export async function getServerSideProps(context: any) {
  let invoice: any;
  const { id, terminalid, invoiceid, amount, cardnumber, hash, rrn, tracenumber, digitalreceipt, datePaid, respcode, respmsg, issuerbank } = context.query;
  let result = {};
  let token = {};
  const { ts } = context.query;


  if (respcode != undefined && respcode == "0") {
    result = { terminalid, invoiceid, amount, cardnumber, hash, rrn, tracenumber, digitalreceipt, datePaid, respcode, respmsg, issuerbank };
  }
  console.log(ts);
  if (ts != undefined) {

    try {
      invoice = Date.now();
      const requestOptions = {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          Amount: ts.toString(),
          callbackURL: 'https://lopencandy.ir/checkout',
          invoiceID: invoice,
          terminalID: '98651197'
        })
      };
      const response = await fetch(`https://sepehr.shaparak.ir:8081/V1/PeymentApi/GetToken`, requestOptions);
      token = await response.text();
    } catch (err) {
      console.log('er');
    }

  }
  return { props: { token, result, ts, invoice } };
}

export default function Checkout(props: any) {
  let totalSum = "0";
  let token: any;
  let sepehrToken: any;
  let invoice: any;
  const dispatch = useAppDispatch();
  const factorFormState = useAppSelector((state) => state.entities.factorForm);
  const factorItemsState = useAppSelector(
    (state) => state.entities.factorItems
  );
  
  if (props.result.terminalid === undefined) {
    console.log(token);
    invoice = JSON.parse(props.invoice);
    token = JSON.parse(props.token);
    sepehrToken = token.Accesstoken;
    totalSum = JSON.parse(props.ts);
  }

  useEffect(() => {
    if (props.result.respcode === "0") {
      const factor = {
        _id: "",
        wbuserId: "",
        refCode: "",
        factorContent: "",
        additionalInfo: "",
        price: props.result.amount,
        statusId: 0,
        paymentType: 0,
        factorNumber: props.result.invoiceid,
        cardnumber: props.result.cardnumber,
        digitalreceipt: props.result.digitalreceipt,
        respcode: props.result.respcode,
        invoiceid: props.result.invoiceid,
        tracenumber: props.result.tracenumber,
        rrn: props.result.rrn,
        datePaid: props.result.datePaid,
        issuerbank: props.result.issuerbank,
        fName: factorFormState.data.fName,
        lName: factorFormState.data.lName,
        email: factorFormState.data.email,
        tel: factorFormState.data.tel,
        mobile: factorFormState.data.mobile,
        state: factorFormState.data.state,
        city: factorFormState.data.city,
        postalCode: factorFormState.data.postalCode,
        address: factorFormState.data.address,
        desc: factorFormState.data.desc,
      };
      const items = factorItemsState.list;
      console.log('logged here')
      console.log(factor);
      console.log(items);

      try {
        dispatch(submitAddFactorAction(factor, items));
        dispatch(factorItemRecieved([]));
        dispatch(factorFormCleard());
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  function formValidation(event: any) {
    if (factorFormState.data.formIsValid) {
    } else {
      event.preventDefault();
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }
  return (
    <>
      <div className="container px-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-between w-4/4 rounded-xl  gap-4 py-4  my-4 bg-white">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                جزیات محصول
              </a>

            </div>
            <div className="">
              <CheckoutGridComponent props={true} />
              <CheckoutFormComponent />
            </div>
            <form method="post" onSubmit={formValidation} className="flex flex-col" action="https://sepehr.shaparak.ir:8080/Pay">
              <input type="text" name="terminalID" value="98651197" hidden />
              <input type="text" name="token" value={sepehrToken} hidden />
              <input type="text" name="invoiceID" value={invoice} hidden />
              <input type="text" name="CellNumber" value="099906832043" hidden />
              <input type="text" name="Amount" value={totalSum} hidden />
              <input name="getMethod" type="hidden" required={true} value="1" hidden />
              <div className="flex flex-row justify-end p-4">
                <input type="submit" value=" پرداخت " className="inline text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
