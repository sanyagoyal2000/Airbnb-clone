
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";


function Search() {
    return (
        <div className=" h-screen">
            <Head>
        <title>Airbnb:   </title>
        <link rel="icon" href="/logo.png" />
      </Head>
            <Header/>
            <main className="flex mt-4">
                <section className="flex-grow pt-20  px-6">
                    <p className="text-xs">300+ stays for</p>
                    <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in</h1>
                    <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button transform-transition-duration-100">Cancellation flexibilty</p>
                        <p className="button transform-transition-duration-100">Type of Place</p>
                        <p className="button transform-transition-duration-100">Price</p>
                        <p className="button transform-transition-duration-100">Rooms and beds</p>
                        <p className="button transform-transition-duration-100">More filters</p>


                    </div>
                    
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search
