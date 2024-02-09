"use client"

import Image from "next/image";
import Searchbar from "./Searchbar";
import { useState } from "react";

export default function Navbar(){
    const [clickedOnSearchIcon, isClickedOnSearchIcon] = useState(false)

    return(
        <nav className="flex justify-between absolute left-0 right-0 top-6 z-10 px-4 md:px-16">
            {/* logo */}
            <div>
                <Image src="/images/logo.png" alt="fmovies-logo" width={130} height={130}/>
            </div>

            {/* search bar */}
            <div className="flex-1 max-w-lg hidden sm:block px-4">
                <Searchbar/>
            </div>

            {/* search bar for mobile devices */}
            <div className="block sm:hidden" onClick={()=>isClickedOnSearchIcon(!clickedOnSearchIcon)}>
                <Image src="/icons/search-svgrepo-com.svg" alt="search" width={30} height={30}/>
            </div>

            {clickedOnSearchIcon && <div className="absolute left-0 right-0 top-12 flex sm:hidden px-4">
                <Searchbar/>
            </div>}

            {/* login */}
            <button className="text-white hover:text-black transition-colors duration-500 border-2 px-8 rounded-full hover:border-f-light-blue bg-transparent hover:bg-f-blue ">
                Login
            </button>
        </nav>
    )
}