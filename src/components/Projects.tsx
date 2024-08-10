const projectItems = [
  {
    id: "1",
    header: "برنامه تلفن همراه برای یک تجارت بزرگ غذا",
    content:
      "برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://ormazds.ir/templates/006elma/images/project-1.jpg",
  },
  {
    id: "2",
    header: "برنامه وب برای یک شرکت بزرگ خدمات ملکی",
    content:
      "برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://ormazds.ir/templates/006elma/images/project-1.jpg",
  },
  {
    id: "3",
    header: "برنامه کنفرانس ویدئویی و همکاری",
    content:
      "برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.برنامه ریزیلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://ormazds.ir/templates/006elma/images/project-1.jpg",
  },
];
export default function Projects() {
  return (
    <div id="projects" className="m-auto">
      {projectItems.map((item,index) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 items-center py-32 odd:bg-gray-200">
          <div className={`px-20 space-y-5 text-center sm:text-justify ${index%2 === 0 ? 'lg:order-last':''}`}>
            <h2 className="font-bold text-3xl">{item.header}</h2>
            <p>{item.content}</p>
            <span className="flex items-center justify-center sm:justify-start text-lime-500 gap-2">
              بیشتر بدانید
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/>
              </svg>
            </span>
          </div>
          <div className="px-20 m-auto">
            <img src={item.image} alt="image project" />
          </div>
        </div>
      ))}
    </div>
  );
}
