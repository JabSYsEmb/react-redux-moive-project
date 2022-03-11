import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Progressbar from "../../components/Progressbar";
import { fetchMovie, fetchSearchMovie, fetchMovieByGenre } from "./movieSlice";

const MoviesList = ({ genre }) => {

    const [search, setSearch] = useState("");

    const { status, movies } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const param = useParams();

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }
    const searchMovies = () => {
        if (search !== "") {
            dispatch(fetchSearchMovie(search));
            setSearch("");
        }
    }

    useEffect(() => {
        if (param.genre) {
            dispatch(fetchMovieByGenre(param.genre));
        } else {
            dispatch(fetchMovie());
        }
    }, [param]);

    if (status === "loading")
        return <Progressbar />;
    else if (status === "failed")
        return <h1 className="text-2xl text-white">Failed to fetch data</h1>;

    return <div className="">
        <h1 className="text-4xl text-purple-800 text-center mb-6 font-bold p-6 shadow border-b-4 border-yellow-300 inline-block">Search Movies</h1>
        <div className="flex items-center justify-center mb-12">
            <div className="flex border-2 border-gray-200 rounded">
                <input type="text" className="px-4 py-2 w-60 sm:w-80" placeholder="Search..." onChange={handleOnChange} value={search} required />
                <button className="px-4 text-white bg-gray-600 border-l" onClick={searchMovies}>
                    <span className="hidden sm:inline">Search</span>
                    <svg className="sm:hidden" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" /></svg>
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    </div>;
}
export default MoviesList;