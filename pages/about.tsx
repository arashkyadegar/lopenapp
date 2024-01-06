import MainLayout from "@/components/common/mainLayout";
import Image from "next/image";
import { ReactElement } from "react";
export default function About() {
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col items-center justify-center w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                درباره ما
              </a>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col p-2 bg-white">
                <Image
                  src="/office1.jpeg"
                  width={500}
                  height={500}
                  className="aspect-auto"
                  alt="footer"
                />

                <div className="text-center p-4">
                  <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                  <p className="text-justify text-sm mt-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                </div>
              </div>

              <div className=" flex flex-col p-2 bg-white">
                <Image
                  src="/office1.jpeg"
                  width={500}
                  height={500}
                  className="aspect-auto"
                  alt="footer"
                />
                <div className="text-center  p-4 ">
                  <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                  <p className="text-justify text-sm mt-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row mx-auto w-3/4  gap-4 pt-2  border-t  border-gray-400">
              <div className=" flex flex-col p-2 bg-white">
                {/* <video className="w-4/4 mx-auto" controls>
                  <source src="/flowbite.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <div className="text-center   p-4">
                  <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                  <p className="text-justify text-sm mt-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}


About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
