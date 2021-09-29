import Image from "next/image";
function DiscoveryCard({img,title,description}) {
    return (
        <div>
            
        <div className="max-w-7xl cursor-pointer hover:scale-105 transform transition-duration-300 ease-out ">
        <div className="relative h-[350px] w-[350px]">
            <Image src={img} layout="fill"
             className="rounded" objectFit="cover"/>
        </div>
        <h3 className="text -2xl mt-3 font-fira-sans font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        </div>
        </div>
    )
}

export default DiscoveryCard
