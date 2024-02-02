import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { siteinfoFormFilled } from "@/redux/store/siteInfoForm";
import validator from "validator";
import { FileService } from "@/services/fileService";
import { ResponseStatus } from "@/utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "@/utility/tostify";
import { getDefaultImageAvator } from "@/utility/imageUtility";
import { getSiteinfoAction, submitEditSiteinfoAction } from "@/redux/store/siteInfo";

export default function EditSiteInfo(rslt: any) {
  const formdata = new FormData();
  const formdata2 = new FormData();
  const dispatch = useAppDispatch();
  

  const siteInfoFormState = useAppSelector(
    (state) => state.entities.siteInfoForm
  );
  
  useEffect(() => {
    dispatch(getSiteinfoAction());
  }, []);
  async function submitEditSiteinfo(event: any): Promise<void> {
    if (siteInfoFormState.data.formIsValid) {
      const x = {
        _id: "1",
        address1: siteInfoFormState.data.address1,
        address2: siteInfoFormState.data.address2,
        tel1: siteInfoFormState.data.tel1,
        tel2: siteInfoFormState.data.tel2,
        mobile1: siteInfoFormState.data.mobile1,
        mobile2: siteInfoFormState.data.mobile2,
        email1: siteInfoFormState.data.email1,
        email2: siteInfoFormState.data.email2,
        twitter: siteInfoFormState.data.twitter,
        instagram: siteInfoFormState.data.instagram,
        linkedin: siteInfoFormState.data.linkedin,
        whatsapp: siteInfoFormState.data.whatsapp,
        headerImages: siteInfoFormState.data.headerImages,
        logo1: siteInfoFormState.data.logo1,
        logo2: siteInfoFormState.data.logo2,
        headerTitle: siteInfoFormState.data.headerTitle,
        copyRightText: siteInfoFormState.data.copyRightText,
        copyRightYear: siteInfoFormState.data.copyRightYear,
      };
      try {
        console.log("vvv");
        dispatch(submitEditSiteinfoAction(x));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }
  function fillAddress1(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          address1Error: "لطفا  آدرس اول را وارد کنید",
          formIsValid: false,
          address1: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          address1Error: "",
          address1: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillWhatsapp(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          whatsappError: "لطفا واتزاپ را وارد کنید",
          formIsValid: false,
          whatsapp: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          whatsappError: "",
          whatsapp: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillLinkedin(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          linkedinError: "لطفا لینکدین را وارد کنید",
          formIsValid: false,
          linkedin: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          linkedinError: "",
          linkedin: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillTwitter(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          twitterError: "لطفا تویتر را وارد کنید",
          formIsValid: false,
          twitter: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          twitterError: "",
          twitter: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillInstagram(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          instagramError: "لطفا اینستاگرام را وارد کنید",
          formIsValid: false,
          instagram: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          instagramError: "",
          instagram: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillheaderTitle(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          headerTitleError: "لطفا عنوان بالای صفحه را وارد کنید",
          formIsValid: false,
          headerTitle: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          headerTitleError: "",
          headerTitle: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillEmail2(event: any): void {
    let text: string = event.target.value;
    if (!validator.isEmail(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          email2Error: "لطفا ایمیل ۲ را درست وارد کنید",
          formIsValid: false,
          email2: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          email2Error: "",
          email2: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillEmail1(event: any): void {
    let text: string = event.target.value;
    if (!validator.isEmail(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          email1Error: "لطفا ایمیل ۱ را درست وارد کنید",
          formIsValid: false,
          email1: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          email1Error: "",
          email1: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillMobile2(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (!validator.isNumeric(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          mobile2Error: "لطفا موبایل ۲ را وارد کنید",
          formIsValid: false,
          mobile2: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          mobile2Error: "",
          mobile2: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillMobile1(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (!validator.isNumeric(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          mobile1Error: "لطفا موبایل ۱ را وارد کنید",
          formIsValid: false,
          mobile1: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          mobile1Error: "",
          mobile1: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillTel2(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (!validator.isNumeric(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          tel2Error: "لطفا تلفن ۲ را  وارد کنید",
          formIsValid: false,
          tel2: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          tel2Error: "",
          tel2: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillTel1(event: any): void {
    let text: string = event.target.value;
    if (!validator.isNumeric(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          tel1Error: "لطفا تلفن ۱ را  وارد کنید",
          formIsValid: false,
          tel1: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          tel1Error: "",
          tel1: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillCopyRightYear(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          copyRightYearError: "لطفا سال کپی رایت را  وارد کنید",
          formIsValid: false,
          copyRightYear: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          copyRightYearError: "",
          copyRightYear: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillCopyRightText(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          copyRightTextError: "لطفا متن کپی رایت را  وارد کنید",
          formIsValid: false,
          copyRightText: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          copyRightTextError: "",
          copyRightText: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillAddress2(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          address2Error: "لطفا  آدرس دوم را وارد کنید",
          formIsValid: false,
          address2: text,
        })
      );
    } else {
      dispatch(
        siteinfoFormFilled({
          ...siteInfoFormState.data,
          address2Error: "",
          address2: text,
          formIsValid: true,
        })
      );
    }
  }

  async function fillLogo1File(event: any): Promise<void> {
    let count = event.target.files.length;
    if (count === 1) {
      formdata2.append("files", event.target.files[0]);
      const uploader = new FileService();
      // try {
      const response = await uploader.uploadSingle(formdata2);
      switch (response.status) {
        case ResponseStatus.OK: {
          const repo = await response.json();
          console.log(repo);
          dispatch(
            siteinfoFormFilled({
              ...siteInfoFormState.data,
              logo1Error: "",
              logo1: repo.files[0],
              formIsValid: true,
            })
          );
          ToastSuccess();
          break;
        }
        case ResponseStatus.BAD_REQUEST: {
          ToastFail();
          break;
        }
        case ResponseStatus.UNAUTHORIZED: {
          ToastAuthFail();
        }
      }
    }
  }

  async function fillheaderImagesFile(event: any): Promise<void> {
    let count = event.target.files.length;
    if (count === 3) {
      formdata.append("files", event.target.files[0]);
      formdata.append("files", event.target.files[1]);
      formdata.append("files", event.target.files[2]);
      const uploader = new FileService();
      // try {
      const response = await uploader.upload(formdata);
      switch (response.status) {
        case ResponseStatus.OK: {
          const repo = await response.json();
          dispatch(
            siteinfoFormFilled({
              ...siteInfoFormState.data,
              headerImagesError: "",
              headerImages: repo.files,
              formIsValid: true,
            })
          );
          ToastSuccess();
          break;
        }
        case ResponseStatus.BAD_REQUEST: {
          ToastFail();
          break;
        }
        case ResponseStatus.UNAUTHORIZED: {
          ToastAuthFail();
        }
      }
    }
  }
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full  aspect-video gap-4">
          <main className="flex flex-col justify-between w-4/4  gap-4   mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-1 border-gray-400">
                  تنظیمات سایت
              </a>
            </div>
            <div>
              <div>
                <div className="w-1/2 mx-auto">
                  <div className="flex flex-col gap-2 m-2">
                    <input
                      id="files"
                      name="files"
                      type="file"
                      accept=".png,.jpg"
                      multiple
                      onChange={fillheaderImagesFile}
                    />

                    {siteInfoFormState.data.headerImages !== undefined && (
                      <div className="flex flex-row gap-2 m-2">
                        {siteInfoFormState.data.headerImages.map(
                          (image: any) => (
                            <img
                              key={image}
                              src={getDefaultImageAvator(image)}
                              width={800}
                              height={800}
                              className="w-10 h-10"
                              alt="headers images"
                            />
                          )
                        )}
                      </div>
                    )}

                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.headerImagesError}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 m-2">
                    <input
                      id="files2"
                      name="files2"
                      type="file"
                      accept=".png,.jpg"
                      onChange={fillLogo1File}
                    />

                    {siteInfoFormState.data.logo1 !== undefined && (
                      <div className="flex flex-row gap-2 m-2">
                        <img
                          src={getDefaultImageAvator(
                            siteInfoFormState.data.logo1
                          )}
                          width={800}
                          height={800}
                          className="w-10 h-10"
                          alt="main logo"
                        />
                      </div>
                    )}

                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.headerImagesError}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mx-2 sm:mt-2">
                    <label
                      htmlFor="address1"
                      className="w-20 text-sm font-bold"
                    >
                      آدرس اول
                    </label>
                    <textarea
                      name="address1"
                      id="address1"
                      rows={2}
                      className="grow p-2 outline-none border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillAddress1}
                      value={siteInfoFormState.data.address1}
                    ></textarea>
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.address1Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mx-2">
                    <label
                      htmlFor="address2"
                      className="w-20 text-sm font-bold"
                    >
                      آدرس دوم
                    </label>
                    <textarea
                      name="address2"
                      id="address2"
                      rows={2}
                      className="grow p-2 outline-none border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillAddress2}
                      value={siteInfoFormState.data.address2}
                    ></textarea>
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.address2Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="copyRightText"
                      className="w-40 text-sm font-bold"
                    >
                      متن کپی رایت
                    </label>
                    <input
                      type="text"
                      name="copyRightText"
                      id="copyRightText"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillCopyRightText}
                      value={siteInfoFormState.data.copyRightText}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.copyRightTextError}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="copyRightYear"
                      className="w-40 text-sm font-bold"
                    >
                      سال کپی رایت
                    </label>
                    <input
                      type="text"
                      name="copyRightYear"
                      id="copyRightYear"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillCopyRightYear}
                      value={siteInfoFormState.data.copyRightYear}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.copyRightYearError}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="tel1" className="w-40 text-sm font-bold">
                      تلفن ۱
                    </label>
                    <input
                      type="text"
                      name="tel1"
                      id="tel1"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillTel1}
                      value={siteInfoFormState.data.tel1}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.tel1Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="tel2" className="w-40 text-sm font-bold">
                      تلفن ۲
                    </label>
                    <input
                      type="text"
                      name="tel2"
                      id="tel2"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillTel2}
                      value={siteInfoFormState.data.tel2}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.tel2Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="mobile1" className="w-40 text-sm font-bold">
                      موبایل ۱
                    </label>
                    <input
                      type="text"
                      name="mobile1"
                      id="mobile1"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillMobile1}
                      value={siteInfoFormState.data.mobile1}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.mobile1Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="mobile2" className="w-40 text-sm font-bold">
                      موبایل ۲
                    </label>
                    <input
                      type="text"
                      name="mobile2"
                      id="mobile2"
                      className="p-1 border
                  border-gray-300 bg-[#F9FAFB]"
                      onChange={fillMobile2}
                      value={siteInfoFormState.data.mobile2}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.mobile2Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="email1" className="w-20 text-sm font-bold">
                      ایمیل ۱
                    </label>
                    <input
                      type="text"
                      name="email1"
                      id="email1"
                      className="p-1 border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillEmail1}
                      value={siteInfoFormState.data.email1}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.email1Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="email2" className="w-20 text-sm font-bold">
                      ایمیل ۲
                    </label>
                    <input
                      type="text"
                      name="email2"
                      id="email2"
                      className="p-1 border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillEmail2}
                      value={siteInfoFormState.data.email2}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.email2Error}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="headerTitle"
                      className="w-40 text-sm font-bold"
                    >
                      عنوان بالای صفحه
                    </label>
                    <input
                      type="text"
                      name="headerTitle"
                      id="headerTitle"
                      className="p-1 border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillheaderTitle}
                      value={siteInfoFormState.data.headerTitle}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.headerTitleError}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="instagram"
                      className="w-40 text-sm font-bold"
                    >
                      صفحه اینستاگرام
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      className="p-1 border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillInstagram}
                      value={siteInfoFormState.data.instagram}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.instagramError}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label htmlFor="twitter" className="w-20 text-sm font-bold">
                      صفحه تویتر
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillTwitter}
                      value={siteInfoFormState.data.twitter}
                    />
                    <p className=" text-red-400 text-xs ">
                      {siteInfoFormState.data.twitterError}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="linkedin"
                      className="w-40 text-sm font-bold"
                    >
                      صفحه لینکدین
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillLinkedin}
                      value={siteInfoFormState.data.linkedin}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.linkedinError}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 m-2">
                    <label
                      htmlFor="whatsapp"
                      className="w-40 text-sm font-bold"
                    >
                      صفحه واتز اپ
                    </label>
                    <input
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                      onChange={fillWhatsapp}
                      value={siteInfoFormState.data.whatsapp}
                    />
                    <p className="text-red-400 text-xs">
                      {siteInfoFormState.data.whatsappError}
                    </p>
                  </div>

                  <div className="flex justify-end p-2">
                    <button
                      type="button"
                      onClick={submitEditSiteinfo}
                      className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      ثبت تغییرات
                    </button>
                  </div>
                </div>
                <div className=" flex flex-col"></div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div></div>
    </>
  );
}
// export async function getServerSideProps(context: any) {
//   const { req } = context;
//   const { cookies } = req;
//   const baseURL = process.env.NEXT_PUBLIC_BASEURL;
//   const response = await fetch(`${baseURL}/api/siteinfos`, {
//     method: "GET",
//     credentials: "include",
//     headers: {
//       Authorization: cookies.alonefighterx,
//     },
//   });
//   const repo = await response.json();
//   const siteInfo = JSON.stringify(repo);
//   return { props: { siteInfo } };
// }
EditSiteInfo.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
