import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Home = () => {

    const { status, popular, trending } = useSelector(state => state.movies);

    if (status === "loading")
        return <p>Loading</p>;
    else if (status === "failed")
        return <p>Failed to fetch data</p>

    console.log(popular);

    return <div className="mx-auto">
        <h1 className="text-4xl text-purple-800 text-left mb-6 bg-white font-bold p-6 shadow"><span className="inline-block align-middle h-14 w-2 bg-yellow-300"></span> Popular Movies</h1>
        <div className="grid grid-cols-1 justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {popular.map(movie => {
                return <MovieCard movie={movie} />
            })}
        </div>
        <h1 className="text-4xl text-purple-800 text-left mb-6 bg-white font-bold p-6 shadow"><span className="inline-block align-middle h-14 w-2 bg-yellow-300"></span> Trending Movies</h1>
        <h3></h3>
        <div className="grid grid-cols-4 justify-items-center">
            {trending.map(movie => {
                return <MovieCard movie={movie} />
            })}
        </div>
    </div>;
}

export default Home;