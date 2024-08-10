type Service = {
    image: JSX.Element;
    header: string;
    content: string;
}
export default function ServiceItem({image,header,content}:Service) {
  return (
    <div className="bg-gray-200 rounded py-20 px-10">
        <div>{image}</div>
        <div className="mt-5">
            <h4 className="text-2xl mb-4">{header}</h4>
            <p className="line-clamp-6">{content}</p>
        </div>
    </div>
  )
}
