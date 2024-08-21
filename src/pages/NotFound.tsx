import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl">404</h1>
        <p className="text-2xl">صفحه مورد نظر یافت نشد</p>
        <Link className="p-4 border border-lime-500 rounded-lg mt-10 bg-lime-500 text-white hover:text-lime-500 hover:bg-white transition-colors" to={'/'} >بازگشت به صفحه اصلی</Link>
    </div>
  )
}
