import Head from 'next/head'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import DiscoveryCard from "../components/DiscoveryCard";

export default function Home({exploreData,cardsData,discoverData}) {
  return (
    <div >
      <Head>
        <title>Airbnb:Holidays,Rentals,Cabins</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
       <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>
      <Banner/>
      <main>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16">
          <h2 className="text-3xl font-semibold pb-5 font-inter">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item)=>(
            <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
          ))}</div>
         
        </section>
        <section className="pt-6  max-w-7xl px-8 mx-auto sm:px-16">
        <h2 className="text-3xl font-semibold pb-5 font-inter">Live Anywhere</h2>
        <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 ml-5">
          {cardsData?.map((item)=>(
            <MediumCard key={item.img} img={item.img} title={item.title} />
          ))}</div>
        </section>
        <section className="pt-10 max-w-7xl px-8 mx-auto sm:px-16">
        <LargeCard img="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/Screenshot%202021-09-28%20at%2011.33.14%20PM.png" title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb" buttonText="Get Inspired"/>
        </section>
        <section className="pt-10 max-w-7xl px-8 mx-auto sm:px-16 pb-10">
        <h2 className="text-3xl font-semibold pb-5 font-inter">Discover things to do</h2>
        <div className="flex space-x-8 p-5 ml-5">
        {discoverData?.map((item)=>(
            <DiscoveryCard key={item.img} img={item.img} title={item.title} description={item.description}/>
          ))}</div>
        
        </section>

      </main>
      <Footer className="pt-10"/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch("https://jsonkeeper.com/b/9E6N").then((res)=>res.json());
  const cardsData=await fetch("https://jsonkeeper.com/b/08SN").then((res)=>res.json());
  const discoverData=await fetch("https://jsonkeeper.com/b/5QOO").then((res)=>res.json());
  return {
    props: {
      exploreData:exploreData,
      cardsData:cardsData,
      discoverData:discoverData,
    }
  }
}