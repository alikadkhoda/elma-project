import { FaLinkedin, FaTwitter } from "react-icons/fa";
type Card = {
    img:string;
    name:string;
    position:string;
    twitterLink:string;
    linkedinLink:string;
}
export default function CardItem({img,name,position,twitterLink,linkedinLink}:Card) {
  return (
    <div className="space-y-4">
        <div className="w-full flex justify-center">
            <img className="rounded" src={img} alt={name} />
        </div>
        <div className="text-center">
            <h5>{name}</h5>
            <p className="text-gray-500">{position}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
            <a href={linkedinLink}>
            <FaLinkedin size={25}  className="fill-lime-500 cursor-pointer hover:fill-lime-900"/>
            </a>
            <a href={twitterLink}>
            <FaTwitter size={25}   className="fill-lime-500 cursor-pointer hover:fill-lime-900" />
            </a>
        </div>
    </div>
  )
}
