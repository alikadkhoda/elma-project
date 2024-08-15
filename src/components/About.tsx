import AnimationCounter from "./AnimationCounter";

export default function About() {
  return (
    <div id="about" className="w-full bg-[url(https://ormazds.ir/templates/006elma/images/about-background.jpg)] bg-center bg-cover">
        <div className="container m-auto px-10 py-40">
            <div>
                <h2 className="font-bold text-3xl sm:text-4xl text-white text-center">چرا باید با ما کار کنید</h2>
                <hr className="w-24 border-t-2 m-auto mt-5 "/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 text-white mt-16">
                <div className="pl-16 space-y-10">
                    <div>
                        <h5 className="font-bold text-xl">۱.تخصص در محصولات دیجیتال</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-xl">۲.تیم متخصص بسیار ماهر</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-xl">۳.مشارکت با آژانس‌های بازاریابی</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 m-auto gap-12">
                    <div>
                        <AnimationCounter from={0} to={231} />
                        <div className="text-center text-sm">مشتریان خوشحال</div>
                    </div>
                    <div>
                        <AnimationCounter from={0} to={385} />
                        <div className="text-center text-sm">مسائل حل‌شده</div>
                    </div>
                    <div>
                        <AnimationCounter from={0} to={159} />
                        <div className="text-center text-sm">نظرات خوب</div>
                    </div>
                    <div>
                        <AnimationCounter from={0} to={128} />
                        <div className="text-center text-sm">مطالعات موردی</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
