import Image from "next/image";

export default function Searchbar(){
    return(
        <form className="flex space-x-2 bg-black p-2 rounded-full opacity-80 hover:opacity-100 shadow-black shadow-2xl transition-opacity duration-300 w-full">
            <div className="text-xs text-f-zinc bg-f-gray px-6 py-1 cursor-pointer rounded-full">
                Filter
            </div>
            <input type="text" name="searchQuery" placeholder="search movies..." className="bg-inherit focus:outline-none text-center text-f-light-blue w-full opacity-90"/>
            <button type="submit" className="px-1">
                <Image src="/icons/search-svgrepo-com.svg" alt="search" width={30} height={30}/>
            </button>
        </form>
    )
}