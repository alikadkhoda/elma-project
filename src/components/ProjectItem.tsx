type Project = {
    header:string;
    content:string;
    image:string;
}
export default function ProjectItem({header,content,image}:Project) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 items-center py-32">
      <div className="px-10 space-y-5 text-center sm:text-justify">
        <h2 className="font-bold text-3xl">
            {header}
        </h2>
        <p>{content}</p>
        <span className="flex items-center justify-center sm:justify-start text-lime-500 gap-2">
          بیشتر بدانید{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </span>
      </div>
      <div className="px-24 m-auto">
        <img
          src={image}
          alt="image project"
        />
      </div>
    </div>
  );
}
