
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import InfoCard from "../components/InfoCard";
import Head from "next/head";
import { format } from 'date-fns';
import {useRouter} from "next/dist/client/router";


function Search({searchResults}) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
  
    
    const formatedStartDate = format(new Date(startDate), "dd MMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMM yy");
  
    const range = `${formatedStartDate} - ${formatedEndDate}`;
    //console.log(searchResults);
    return (
        <div className=" h-screen">
            <Head>
        <title>Airbnb:{location}   </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}
            className="bg-white"/>
            <main className="flex mt-4">
                <section className="flex-grow pt-20  px-6">
                    <p className="text-xs">300+ Stays for {range} - {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button transform-transition-duration-100">Cancellation flexibilty</p>
                        <p className="button transform-transition-duration-100">Type of Place</p>
                        <p className="button transform-transition-duration-100">Price</p>
                        <p className="button transform-transition-duration-100">Rooms and beds</p>
                        <p className="button transform-transition-duration-100">More filters</p>


                    </div>
                    <div className="flex flex-col">
                    {searchResults?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
                        </div> 
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px] mt-20px">
                <Map searchResults={searchResults} />
                </section>
            </main>
           
            <Footer/>
        </div>
    )
}

export default Search;
export async function getServerSideProps() {
    const searchResults = await fetch("https://jsonkeeper.com/b/AUNA").then(
      (res) => res.json()
    );
    return {
      props: {
        searchResults,
      },
    };
  }