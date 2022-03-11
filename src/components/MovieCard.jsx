import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToBookmark, removeBookmark } from "../containers/movie/movieSlice";

const MovieCard = ({ movie }) => {
    const { bookmark } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const isBookmark = bookmark.find(e => e.id === movie.id);

    const imgPoster = movie.poster_path === null ? "https://via.placeholder.com/300x450" : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    const onBookmark = () => {
        dispatch(addToBookmark(movie));
    }
    const onDelete = () => {
        dispatch(removeBookmark(movie.id));
    }

    return (
        <div className="inline-block text-center group md:w-200 mb-6 sm:max-w-fit">
            <div className="relative text-center">
                <img className="group-hover:blur-sm shadow" src={imgPoster} alt={movie.title} />
                <span className="absolute px-2 left-1 top-1 rounded text-white bg-orange-400 inline-block">
                    {parseFloat(movie.vote_average).toFixed(1)}
                </span>
                {isBookmark &&
                    <i class="fas fa-heart bg-white text-red-800 p-2 rounded absolute top-1 right-1"></i>}
                <Link to={`/movies/${movie.id}`}>
                    <p className="bg-gray-400 bg-opacity-80 transition duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-1xl text-white px-4">
                        <span className="font-bold text-2xl">{movie.title}</span>
                        {movie.overview.length > 200 ? movie.overview.substr(0, 200) + "..." : movie.overview}
                    </p>
                </Link>
                <div className="transition duration-500 opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-2 z-10 ">
                    {isBookmark ?
                        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-2 rounded mt-2" onClick={onDelete}>Bookmarked</button>
                        :
                        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-2 rounded mt-2" onClick={onBookmark}>Bookmark</button>
                    }
                </div>
            </div>

            <h1 className="font-medium text-1xl text-white px-2">{movie.title}</h1>
            <span className="text-xs text-green-100">
                {new Date(movie.release_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    );
}

export default MovieCard;