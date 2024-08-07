export default function Hero() {
  return (
    <div className="w-full bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <div className="p-6 sm:p-10 md:p-20 flex flex-col lg:flex-row justify-between items-center pt-24 sm:pt-36 md:pt-48 lg:pt-72 pb-20 sm:pb-30 md:pb-40">
        <div className="w-full text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-white lg:pr-20 text-center lg:text-right mb-10 ">
          <h1>
            طرح <br />
            طراحی <br /> توسعه
          </h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-4">
          <button className="text-sm md:text-lg text-white py-4 px-10 bg-lime-500 border-lime-500 hover:text-lime-500 hover:bg-transparent">
            کشف کردن
          </button>
          <button className="text-sm md:text-lg text-white py-4 px-10 hover:bg-white hover:text-gray-800">
            تماس با ما
          </button>
        </div>
      </div>
    </div>
  );
}
