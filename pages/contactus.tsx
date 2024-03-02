import MainLayout from "@/components/common/mainLayout";
import NeshanMapComponent from "@/components/neshanmap";
import { turnToFa } from "@/utility/regex";
import { ReactElement } from "react";

export default function Contactus(rslt: any) {
  const siteinfo = JSON.parse(rslt.siteinfos)[0];
  return (
    <>
      <div className="container px-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col  w-4/4 rounded-xl  bg-white">
            <div className="p-2 ">
              <a className=" flex text-2xl border-b  border-gray-400">
                تماس با ما
              </a>
            </div>

            <div className="flex  max-w-max  flex-col sm:flex-row items-center justify-center mx-auto">
              <div className="">
                <img
                  src="/icons8-contact-60.png"
                  className="w-fit h-fit"
                  alt="contactus's photo"
                />
              </div>

              <div className="  ">
                <div className="flex flex-row p-3 gap-1 ">
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <a className="w-20">آدرس ما :</a>
                  </div>
                  <div>
                    <a>
                        خراسان شمالی - بجنورد - خیابان شهید بهشتی شمالی  رو به روی مسجد جامع - آبنبات سازی لوپن  
                  
                    </a>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap">
                  <div className="flex  flex-row p-3 gap-1   ">
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

                      <a className="w-20">تلفن :</a>
                    </div>
                    <div>
                      <p>۳۲۷۳۵۴۹۲ (۰۵۸)</p>
                    </div>
                  </div>

                  {/* <div className="flex  flex-row p-3 gap-1  ">
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>

                      <a className="w-20">موبایل :</a>
                    </div>
                    <div>
                      <p>info@lopencandy.ir</p>
                    </div>
                  </div> */}
                </div>
                <div className="flex  flex-row p-3 gap-1  w-1/2 ">
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

                    <a className="w-20">ایمیل :</a>
                  </div>
                  <div>
                    <article>info@lopencandy.ir</article>
                  </div>
                </div>

                {/* <div className="flex flex-row p-4 gap-1  w-2/3  border-gray-400">
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
                </div> */}
              </div>
            </div>
            <div>
              <NeshanMapComponent></NeshanMapComponent>
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
