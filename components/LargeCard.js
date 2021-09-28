import Image from "next/image";
function LargeCard({img,title,description,buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image src={img} layout="fill" objectFit="cover"
            className="rounded-2xl"/>
        </div>
        <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64 font-inter font-semibold">{title}</h3>
            <p className="font-inter">{description}</p>
            <button className="text-white text-sm bg-black rounded-lg px-8 py-4 mt-4">{buttonText}</button>

        </div>
        </section>
    )
}

export default LargeCard
