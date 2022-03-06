import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Progressbar from "../../components/Progressbar";

const Movie = () => {

    const movieId = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        Promise.all([
            fetch(`${process.env.REACT_APP_API_URI}/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(resp => resp.json())
                .catch((error) => {
                    navigate('/not-found');
                }),
            fetch(`${process.env.REACT_APP_API_URI}/3/movie/${movieId.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(resp => resp.json()),
        ]).then((data) => {
            setMovie({ ...data[0], actors: data[1] })
        });
    }, [movieId.id]);

    if (movie === null)
        return <Progressbar />;

    return <div className="flex flex-col flex-wrap sm:flex-row p-8 sm:text-left text-center items-center">
        <div className="md:w-1/4 lg:w-1/6">
            <img className="shadow-2xl rounded" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="md:w-3/4 lg:w-5/6 pl-2 flex flex-col space-y-3">
            <h1 className="text-3xl text-white">{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <p className="text-xs text-green-100">
                {new Date(movie.release_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-xs text-green-100">
                {movie.production_companies.map(e => `${e.name}, `)} ({movie.production_countries.map(e => `${e.name}`)})
            </p>
            <hr />
            <span className="px-3 py-1 text-2xl rounded text-white bg-orange-400 inline-block w-14 text-center">
                {parseFloat(movie.vote_average).toFixed(1)}
            </span>
            <span>{movie.vote_count}</span>
            <hr />
            <span>{movie.genres.map(e => e.name).join(" | ")}</span>
        </div>
        <div className="w-full text-center bg-white p-8 my-8">
            <h1 className="font-bold text-2xl mb-9">{movie.title}</h1>
            <p className="">{movie.overview}</p>
        </div>
        <div className="w-full text-center">
            <h1 className="font-bold text-2xl mb-9">Actors</h1>
            <div className="flex overflow-x-auto" id="journal-scroll">
                {movie.actors.cast.filter(e => e.profile_path !== null && e.known_for_department === "Acting").map(actor => {
                    return <div key={actor.cast_id} className="flex-shrink-0 w-20 mx-3 text-center">
                        <Link to={`/actors/${actor.id}`}>
                            <img className="" src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} />
                        </Link>
                        <h1 className="mt-1 text-xs">{actor.name}</h1>
                    </div>
                })}
            </div>
        </div>

    </div >;
}
export default Movie;