import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {

    const { genres } = useSelector(store => store.movies);

    const genresList = genres.map(gen => {
        return <li key={gen.id} className="bg-gray-200"><Link className="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`/movies/genre/${gen.id}`}>{gen.name}</Link></li>
    });

    return <nav className="bg-gray-900">
        <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" id="toggle-navbar" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <h5 className="block lg:hidden text-4xl font-bold text-center text-yellow-300">Movies<span className="text-fuchsia-50">Tea</span></h5>
                            <h5 className="hidden lg:block text-4xl font-bold text-center text-yellow-300">Movies<span className="text-fuchsia-50">Tea</span></h5>
                        </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/movies" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</Link>

                            <div className="dropdown inline-block relative">
                                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">Genre</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul className="dropdown-menu absolute z-40 hidden text-gray-700 pt-1 flex flex-row">
                                    {genresList}
                                </ul>
                            </div>


                            <Link to="/actors" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Actors</Link>
                            <Link to="/bookmark" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bookmark</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <svg className="block h-8 w-8 fill-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" stroke="currentColor">
                        <g><path d="M500,10C231.5,10,10,231.5,10,500s221.5,490,490,490s490-221.5,490-490S768.5,10,500,10z M795.3,835.6c0-134.2-100.7-248.4-221.5-281.9c73.8-26.8,120.8-100.7,120.8-181.2c0-107.4-87.3-194.7-194.7-194.7s-194.7,87.3-194.7,194.7c0,80.5,53.7,154.4,120.8,181.2c-127.5,33.6-221.5,147.7-221.5,281.9C110.7,755.1,50.3,634.2,50.3,500C50.3,251.6,251.6,50.3,500,50.3c248.4,0,449.7,201.4,449.7,449.7C949.7,634.2,889.3,755.1,795.3,835.6z" /></g>
                    </svg>
                </div>
            </div>
        </div>
        <div className="hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/movies" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movies</Link>
                <Link to="/actors" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Actors</Link>
                <Link to="/bookmark" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Bookmark</Link>
            </div>
        </div>
    </nav>;
}
export default Nav;