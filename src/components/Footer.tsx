import { BsInstagram } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { PiPinterestLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="pt-24 pb-8 bg-slate-950">
      <div className="container m-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <h6 className="text-gray-300 font-bold mb-4">درباره ما</h6>
            <p className="text-gray-300 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="pr-10">
            <h6 className="text-gray-300 font-bold mb-4">پیوندها</h6>
            <div className="text-gray-300">
              <ul className="flex text-sm">
                <li>مهم:</li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#">شرایط و ضوابط،</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#">سیاست حفظ حریم خصوصی</a></li>
              </ul>
            </div>
            <div className="text-gray-300">
              <ul className="flex text-sm">
                <li>مفید:</li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#">راست چین،</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#">ژاکت،</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#">فیگما</a></li>
              </ul>
            </div>
            <div className="text-gray-300">
              <ul className="flex text-sm">
                <li>منو:</li>
                <li className="mr-1 hover:text-white transition-colors"><a href="/">خانه،</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#projects">پروژه</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#services">خدمات</a></li>
                <li className="mr-1 hover:text-white transition-colors"><a href="#contact-us">تماس با ما</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-500 inline-block p-2 rounded-full hover:bg-lime-500">
              <CgFacebook size={25} className="text-gray-300" />
              </span>
              <span className="bg-gray-500 inline-block p-2 rounded-full hover:bg-lime-500">
              <FaTwitter size={25} className="fill-gray-300" />
              </span>
              <span className="bg-gray-500 inline-block p-2 rounded-full hover:bg-lime-500">
              <PiPinterestLogo size={25} className="fill-gray-300" />
              </span>
              <span className="bg-gray-500 inline-block p-2 rounded-full hover:bg-lime-500">
              <BsInstagram size={25} className="fill-gray-300" />
              </span>
            </div>
            <p className="text-gray-300 text-sm">دوست داریم بیشتر از شما بشنویم: aads234@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-4">2024 kadkhoda Inc ©</div>
      </div>
    </div>
  );
}
