
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div id="contact-us" className="w-full bg-[url(https://ormazds.ir/templates/006elma/images/contact-background.jpg)] bg-center bg-cover py-40">
        <div className="container m-auto px-10 sm:px-20">
            <div className="flex flex-col justify-center items-center space-y-5 text-white text-center">
                <h2 className="font-bold text-3xl sm:text-4xl">پروژه خود را به ما اطلاع دهید</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-5">
                    <div className="flex gap-2 items-center"><FaMapLocation size={20} className="fill-lime-500"/>ایران</div>
                    <div className="flex gap-2 items-center"><FaPhone size={18} className="fill-lime-500"/>09131112233</div>
                    <div className="flex gap-2 items-center"><MdEmail size={20} className="fill-lime-500"/>aads234@gmail.com</div>
                </div>
                <div className="w-full sm:px-24">
                    <form className="grid grid-cols-1 space-y-4">
                        <input className="pr-4 py-4 rounded-[4px] bg-[#4d475c] placeholder-slate-400 focus:outline-none" type="text" name="name" id="name" placeholder="نام" />
                        <input className="pr-4 py-4 rounded-[4px] bg-[#4d475c] placeholder-slate-400 focus:outline-none" type="text" name="email" id="email" placeholder="ایمیل" />
                        <textarea className="pr-4 py-4 rounded-[4px] bg-[#4d475c] placeholder-slate-400 focus:outline-none" cols={30} rows={8} placeholder="پیام"></textarea>
                        <input className="bg-lime-500 py-3 font-bold rounded-[4px]" type="submit" value={'ارسال'} />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
