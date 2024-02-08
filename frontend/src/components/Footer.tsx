export default function Footer(){
    return(
        <footer className="bg-footer-image bg-center bg-no-repeat bg-cover relative min-h-64 sm:min-h-72">
            <div className="bg-black left-0 right-0 h-full opacity-85 absolute z-0"/>
            
            <div className=" fixed z-10 bottom-0 left-0 right-0 px-4 sm:px-16 pb-3">
                <div className="h-0.5 bg-f-blue"/>
                <div className="text-xs sm:text-sm text-f-zinc text-center sm:px-4 pt-3">
                    FMovies is top of free streaming website, where to watch movies online free without registration required. With a big database and great features, we're confident FMovies is the best free movies online website in the space that you can't simply miss!
                </div>
                <div className="text-f-blue text-xs sm:text-sm text-center sm:px-8">
                    This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                </div>
            </div>
        </footer>
    )
}