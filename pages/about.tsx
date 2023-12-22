export default function About() {
  return (
    <>
      <div className="container p-4">
          <a className="text-2xl">درباره ما</a>
        <div className="flex flex-col items-center justify-center w-full mx-auto aspect-video gap-4">
          <div className="flex flex-row justify-between w-3/4  gap-4 pt-2">
            <div className="flex flex-col p-2">
              <img className=" aspect-auto" src="office1.jpeg"></img>
              <div className="text-center pt-2">
                <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                <p className="text-justify text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
            </div>

            <div className=" flex flex-col p-2">
              <img className=" aspect-auto" src="office1.jpeg"></img>
              <div className="text-center  pt-2">
                <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                <p className="text-justify text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-3/4  gap-4 pt-2">
            <div className=" flex flex-col p-2">
              <video className="w-3/4 mx-auto" controls>
                <source src="video/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-center   pt-2">
                <a className="font-bold">لورم ایپسوم متن ساختگی با</a>
                <p className="text-justify text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

About.Layout = "Main";
