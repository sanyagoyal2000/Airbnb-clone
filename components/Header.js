
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/solid";
import React, { useState,useEffect } from 'react';


function Header() {
  const [handleShow, setHandleShow] = useState(false);

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
    return (
        
      <header className={`fixed top-0 z-40 grid w-screen grid-cols-1  transition duration-100 ease-out p-5 ${handleShow ? "bg-white shadow-md" : ""} md:grid-cols-3  z-50 grid grid-flow-row grid-cols-2 p-5 md:px-10 sm:grid-cols-3 `}> 
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/airbnb-logo-removebg-preview.png" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
               <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-black" type="text" placeholder="Start your search"/>
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

        </header>
        
    )
}

export default Header
