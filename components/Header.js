
import Image from "next/image";
import {SearchIcon} from "@heroicons/react/solid";
//className="object-contain h-22"
function Header() {
    return (
        
        <header className="sticky  top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image  src="https://raw.githubusercontent.com/sanyagoyal2000/Pictures/main/Screenshot%202021-09-28%20at%202.52.09%20PM.png" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div>
               <input type="text" placeholder="Start your search"/>
               <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
           </div>
           <div></div>

        </header>
        
    )
}

export default Header
