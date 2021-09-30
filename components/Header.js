
import Image from "next/image";
import {SearchIcon,UserIcon} from "@heroicons/react/solid";
import React, { useState,useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from "next/dist/client/router";


function Header() {
  const [handleShow, setHandleShow] = useState(false);
  const [ searchInput ,setSearchInput]=useState("");
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const [numberOfGuests,setNumberOfGuests]=useState(1);
  const router =useRouter();

  const handleSelect= (ranges) =>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);


  };
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:"selection",
  };
 

  useEffect(() => {
    const listener = () => {
       if (window.scrollY > 80) {
         setHandleShow(true); 
         } else 
         setHandleShow(false); 
       }; 
       window.addEventListener("scroll", listener);
       
       return () => { 
         window.removeEventListener("scroll", listener); 
       }; 
     }, []);
     const home=()=>{
       router.push('/');
     };
     const search=()=>{
      router.push('/search');
     };
    return (
        
      <header className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 ${handleShow ? "bg-white shadow-md" : ""} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `}> 
           <div onClick={home} className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/airbnb-logo-removebg-preview.png" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
               <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-black" type="text" placeholder="Start your search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
               <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
           </div>
           <div className="flex items-center justify-end space-x-4 text-gray-800">
               <p className="hidden md:inline text-sm text-gray-400">Become a host</p>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
<div className="flex  bg-white items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:shadow">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
           </div>
           {searchInput &&<div className="flex flex-col col-span-3 mx-auto border-rounded bg-white shadow mt-0">
             <DateRangePicker
             ranges={[selectionRange]}
             minDate={new Date()}
             rangeColors={["#FD5B61"]}
             onChange={handleSelect}
             />
             <div className="flex items-center border-b mb-4">
               <h2 className="mx-2 text-red-400 flex-grow font-bold">No.of Guests</h2>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"  viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
<input type="number" className="w-12 pl-2 text-lg rounded border-gray-300"  value={numberOfGuests} min={1} onChange={(e)=>setNumberOfGuests(e.target.value)}/>
             </div>
             <div className="flex mb-1 p-2">
               <button className="flex-grow  text-gray-700 " onClick={()=>setSearchInput("")}>Cancel</button>
               <button onClick={search} className="flex-grow text-red-400">Search</button>
             </div>
             </div>}

        </header>
        
    )
}

export default Header
