import Image from "next/image";
function InfoCard({img,location,title,description,star,price,total}) {
    return (
        <div>
            <div className="relate h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="contain"/>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default InfoCard
