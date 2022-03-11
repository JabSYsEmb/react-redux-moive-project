import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {

    const { genres } = useSelector(store => store.movies);

    const genresList = genres.map(gen => {
        return <li key={gen.id} class="bg-gray-200"><Link class="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`/movies/genre/${gen.id}`}>{gen.name}</Link></li>
    });

    return <nav class="bg-gray-900">
        <div class="px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" id="toggle-navbar" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <h5 className="block lg:hidden text-4xl font-bold text-center text-yellow-300">Movies<span className="text-fuchsia-50">Tea</span></h5>
                            <h5 className="hidden lg:block text-4xl font-bold text-center text-yellow-300">Movies<span className="text-fuchsia-50">Tea</span></h5>
                        </Link>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/movies" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</Link>

                            <div class="dropdown inline-block relative">
                                <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 px-4 rounded inline-flex items-center">
                                    <span class="mr-1">Genre</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul class="dropdown-menu absolute z-40 hidden text-gray-700 pt-1 flex flex-row">
                                    {genresList}
                                </ul>
                            </div>


                            <Link to="/actors" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Actors</Link>
                            <Link to="/bookmark" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bookmark</Link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <svg class="block h-8 w-8 fill-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" stroke="currentColor">
                        <g><path d="M500,10C231.5,10,10,231.5,10,500s221.5,490,490,490s490-221.5,490-490S768.5,10,500,10z M795.3,835.6c0-134.2-100.7-248.4-221.5-281.9c73.8-26.8,120.8-100.7,120.8-181.2c0-107.4-87.3-194.7-194.7-194.7s-194.7,87.3-194.7,194.7c0,80.5,53.7,154.4,120.8,181.2c-127.5,33.6-221.5,147.7-221.5,281.9C110.7,755.1,50.3,634.2,50.3,500C50.3,251.6,251.6,50.3,500,50.3c248.4,0,449.7,201.4,449.7,449.7C949.7,634.2,889.3,755.1,795.3,835.6z" /></g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/movies" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movies</Link>
                <Link to="/actors" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Actors</Link>
                <Link to="/bookmark" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Bookmark</Link>
            </div>
        </div>
    </nav>


    // return <nav class="bg-gray-900">
    //     <div class="max-w-6xl mx-auto px-4">
    //         <div class="flex justify-between">
    //             <div class="flex space-x-7">
    //                 <a href="#" class="flex items-center py-4 px-2">
    //                     <span class="font-semibold text-gray-500 text-lg">Navigation</span>
    //                 </a>
    //                 <div class="hidden md:flex items-center space-x-1">
    // <Link to="/">Home</Link>
    // <Link to="/movies">Movies</Link>
    // <Link to="/actors">Actors</Link>
    // <Link to="/bookmark">Bookmark</Link>
    //                 </div>
    //             </div>
    //             <div class="hidden md:flex items-center space-x-3">
    //                 <span>Login</span>
    //             </div>
    //             <div class="md:hidden flex items-center">
    //                 <button class="outline-none mobile-menu-button">
    //                     <svg class="w-6 h-6 text-gray-500"
    //                         x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    //                         <path d="M4 6h16M4 12h16M4 18h16"></path>
    //                     </svg>
    //                 </button>
    //             </div>
    //         </div>

    //         <div class="hidden mobile-menu">
    //             <ul class="">
    //                 <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
    //                 <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
    //                 <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
    //                 <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>

    // return <div>
    //     <Link to="/">Home</Link>
    //     <Link to="/movies">Movies</Link>
    //     <Link to="/actors">Actors</Link>
    //     <Link to="/bookmark">Bookmark</Link>
    // </div>;
}
export default Nav;