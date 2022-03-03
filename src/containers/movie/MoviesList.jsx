import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { fetchMovie, fetchSearchMovie } from "./movieSlice";

const MoviesList = () => {

    const [search, setSearch] = useState("");

    const { status, movies } = useSelector(state => state.movies);

    const dispatch = useDispatch();

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
        dispatch(fetchMovie());
    }, []);

    if (status === "loading")
        return <p>Loading</p>;
    else if (status === "failed")
        return <p>Failed to fetch data</p>

    console.log(movies);

    return <div className="mx-auto">
        <h1 className="text-4xl text-purple-800 text-center mb-6 font-bold p-6 shadow border-b-4 border-yellow-300 inline-block">Search Movies</h1>
        <div class="flex items-center justify-center mb-12">
            <div class="flex border-2 border-gray-200 rounded">
                <input type="text" class="px-4 py-2 w-80" placeholder="Search..." onChange={handleOnChange} value={search} required />
                <button class="px-4 text-white bg-gray-600 border-l" onClick={searchMovies}>
                    Search
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