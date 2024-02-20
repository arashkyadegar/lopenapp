import MainLayout from "@/components/common/mainLayout";
import { turnToFa } from "@/utility/regex";
import { ReactElement } from "react";

export default function Contactus(rslt: any) {
  const siteinfo = JSON.parse(rslt.siteinfos)[0];

  return (
    <>
      <div className="container px-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-between w-4/4 rounded-xl  gap-4 py-4  my-4 bg-white">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                ارتباط با ما
              </a>
            </div>
            <div className="grid grid-cols-5 py-10 my-5">
              <div className="col-span-5 sm:col-span-2 mr-4 border-l border-white sm:border-gray-400 ">
                {/* address */}
                <div className="flex flex-col p-4 gap-1 border-b w-2/3  border-gray-400">
                  <div className="flex flex-row text-base gap-2 font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    <a>آدرس ما</a>
                  </div>
                  <div>
                    <p>{siteinfo.address1}</p>
                  </div>
                  <div>
                    <p>{siteinfo.address2}</p>
                  </div>
                </div>
                {/* phone number */}
                <div className="flex flex-col p-4 gap-1 border-b w-2/3  border-gray-400">
                  <div className="flex flex-row text-base gap-2 font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>

                    <a>آدرس ما</a>
                  </div>
                  <div>
                    <p> موبایل : {turnToFa(siteinfo.mobile1)}</p>
                  </div>
                  <div>
                    <p> موبایل : {turnToFa(siteinfo.mobile2)}</p>
                  </div>
                  <div>
                    <p> تلفن : {turnToFa(siteinfo.tel1)}</p>
                    <p> تلفن : {turnToFa(siteinfo.tel2)}</p>
                  </div>
                </div>

                {/* email */}
                <div className="flex flex-col p-4 gap-1  w-2/3 ">
                  <div className="flex flex-row text-base gap-2 font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                      />
                    </svg>

                    <a>ایمیل</a>
                  </div>
                  <div>
                    <p>{siteinfo.email1}</p>
                    <p>{siteinfo.email2}</p>
                  </div>
                </div>
              </div>
              <div className=" col-span-5 p-4 sm:col-span-3">
                <form className="max-w-md mx-auto rtl">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className=" block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className=" peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                    >
                      ایمیل
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="title"
                      name="floating_title"
                      id="floating_title"
                      className=" block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_title"
                      className=" peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                    >
                      عنوان
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      name="floating_text"
                      id="floating_text"
                      className=" block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_text"
                      className=" peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                    >
                      متن پیام
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-slate-300 transition-all hover:text-white  hover:bg-[#80BB01] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ارسال
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Contactus.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/wbsiteinfos/`);
  const repo = await res.json();
  const siteinfos = JSON.stringify(repo);
  return { props: { siteinfos } };
}
