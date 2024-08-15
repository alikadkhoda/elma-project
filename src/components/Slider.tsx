import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const listSlider = [
  {
    id: "1`",
    image: "https://ormazds.ir/templates/006elma/images/testimonial-1.jpg",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    author: "مارلین ویسکونت",
    position: "مدیر کل",
  },
  {
    id: "2",
    image: "https://ormazds.ir/templates/006elma/images/testimonial-2.jpg",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    author: "جان اسپایکر",
    position: "رهبر تیم",
  },
];

export default function Slider() {
  return (
    <div className="container sm:px-10 py-40 m-auto ">
      <Swiper
        className="w-full"
        navigation= {true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
      >
        {listSlider.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="lg:px-48 px-10">
                <img
                  className="size-32 sm:size-36 m-auto rounded-full mb-10"
                  src={item.image}
                  alt={item.author}
                />
                <p className="text-md sm:text-xl italic text-center text-gray-500">
                  {item.content}
                </p>
              </div>
              <div className="text-center flex flex-col mt-10">
                <span className="font-bold sm:text-xl">{item.author}</span>
                <span className="text-gray-500">{item.position}</span>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <div className="swiper-button-prev hidden sm:block"></div>
        <div className="swiper-button-next hidden sm:block "></div> */}
      </Swiper>
    </div>
  );
}
