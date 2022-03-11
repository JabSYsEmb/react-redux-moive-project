import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBookmark } from "../movie/movieSlice";


const Bookmark = () => {

    const bookList = useSelector(store => store.movies.bookmark);
    const dispatch = useDispatch();


    const onDelete = (id) => {
        dispatch(removeBookmark(id));
    }

    if (bookList.length === 0) {
        return <h1 className="text-2xl text-white">The bookmark is empty, You did't add any movies to bookmark list yet.</h1>
    }

    return <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10">
        {bookList.map(movie => {
            return (
                <div className="py-6 flex flex-col justify-center sm:py-12 text-left">
                    <div className="py-3 sm:max-w-xl sm:mx-auto">
                        <div className="bg-white shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8">
                            <div className="overflow-visible w-1/2 relative">
                                <Link to={`/movies/${movie.id}`}>
                                    <img className="absolute bottom-0 rounded-3xl shadow-lg" src={movie.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` : "https://via.placeholder.com/600x900"} alt={movie.title} />
                                </Link>
                            </div>
                            <div className="flex flex-col w-1/2 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-2xl lg:text-3xl font-bold">{movie.title}</h2>
                                    <div className="bg-yellow-400 font-bold rounded-xl p-2">{parseFloat(movie.vote_average).toFixed(1)}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Movie</div>
                                    <div className="text-lg text-gray-800">{movie.release_date.substr(0, 4)}</div>
                                </div>
                                <p className="text-gray-400 max-h-40 overflow-y-hidden">
                                    {movie.overview.length > 65 ? movie.overview.substr(0, 65) + "..." : movie.overview}
                                    <Link to={`/movies/${movie.id}`}>More</Link>
                                </p>
                                <button onClick={() => onDelete(movie.id)}>Unmark</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div >;
}
export default Bookmark;