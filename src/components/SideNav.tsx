import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function SideNav() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      {/* Hamberger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer fill-white" />
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          showNav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute right-0 top-0 w-full h-screen bg-slate-950/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen w-full -right-full ease-in duration-500"
        }
      >
        <ul className="w-full h-full text-center text-gray-300 pt-8">
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="/">خانه</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#gallery">پروژه‌ها</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#deals">خدمات</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#contact">درباره</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#contact">جزییات مقاله</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#contact">شرایط و ضوابط</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#contact">سیاست حفظ حریم خصوصی</a>
          </li>
          <li className="text-xl py-4 hover:text-lime-500 transition-all">
            <a href="#contact">تماس با ما</a>
          </li>
        </ul>
      </div>
    </>
  );
}
