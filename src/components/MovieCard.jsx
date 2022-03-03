import { useSelector } from "react-redux";

const MovieCard = ({ movie }) => {
    const { bookmark } = useSelector(state => state.movies);

    return (
        <div class="inline-block text-center group md:w-200 mb-6 sm:max-w-fit">
            <div class="relative text-center">
                <img class="group-hover:blur-sm shadow" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                <span class="absolute px-2 left-1 top-1 rounded text-white bg-orange-400 inline-block">{movie.vote_average}</span>
                <p class="bg-gray-400 bg-opacity-80 transition duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-1xl text-white px-4">
                    <span className="font-bold text-2xl">{movie.title}</span>
                    {movie.overview.length > 200 ? movie.overview.substr(0, 200) + "..." : movie.overview}
                </p>
            </div>
            <h1 class="font-medium text-1xl text-white px-2">{movie.title}</h1>
            <span class="text-xs text-green-100">{new Date(movie.release_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
    );
}

export default MovieCard;