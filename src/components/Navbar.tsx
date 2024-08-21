import { useEffect, useState } from "react";
import {FaFacebook, FaTwitter } from "react-icons/fa";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const list = ['خانه','پروژها','خدمات','درباره','دراپ','تماس با ما']
    const [scrollTop, setScrollTop] = useState(0);
    const [nav, setNav] = useState(false)
    const [navId, setNavId] = useState(1)
    const handleScroll = () => {
        setScrollTop(document.documentElement.scrollTop);
      };

    const handleClick = (id:number) => {
      setNavId(id)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listeners
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(() => {
        if (scrollTop > 30) {
          setNav(true)
        } else if (scrollTop < 30) {
          setNav(false)
        }
      }, [scrollTop]);

  return (
    <div className={`fixed w-full top-0 z-10 opacity-100 flex justify-between items-center p-4 ${nav?'bg-slate-900':''}`}>
        <div>
            <img className="w-24 h-6 sm:w-[108px] sm:h-8" src="https://ormazds.ir/templates/006elma/images/logo.svg" alt="logo" />
        </div>
        <div className="hidden sm:flex items-center text-white">
        <ul className="flex gap-4">
            <li><Link className="hover:text-lime-500 transition-all" to={"/"}>خانه</Link></li>
            <li><a className="hover:text-lime-500 transition-all" href="#projects">پروژه‌ها</a></li>
            <li><a className="hover:text-lime-500 transition-all" href="#services">خدمات</a></li>
            <li><a className="hover:text-lime-500 transition-all" href="#about">درباره</a></li>
            <li className="sub-menu dropdown"><a className="flex items-center gap-2 hover:text-lime-500 transition-all" href="#drop">
                دراپ
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
                <ul className="bg-slate-900 absolute hidden dropdown-content -mr-2 divide-y-2 divide-slate-700 rounded-md">
                  <li className="text-white px-4 py-2 hover:text-lime-500 transition-colors"><Link to={'/detail-paper'}>جزییات مقاله</Link></li>
                  <li className="text-white px-4 py-2 hover:text-lime-500 transition-colors"><Link to={'/condition'}>شرایط و ضوابط</Link></li>
                  <li className="text-white px-4 py-2 hover:text-lime-500 transition-colors"><Link to={"/privacy-policy"}>سیاست حفظ حریم خصوصی</Link></li>
                </ul>
              </li>
            <li><a className="hover:text-lime-500 transition-all" href="/#contact-us">تماس با ما</a></li>
        </ul>
        <div className="flex justify-between gap-1 mr-10">
            <FaFacebook size={20} className="fill-lime-500 cursor-pointer hover:fill-white transition-colors" />
            <FaTwitter size={20} className="fill-lime-500 cursor-pointer hover:fill-white transition-colors" />
        </div>
        </div>
        <SideNav />
    </div>
  )
}