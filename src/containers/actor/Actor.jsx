import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Progressbar from "../../components/Progressbar";

const Actor = () => {
    const actorId = useParams();
    const navigate = useNavigate();
    const [actor, setActor] = useState(null);

    useEffect(() => {
        Promise.all([
            fetch(`${process.env.REACT_APP_API_URI}/3/person/${actorId.id}?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(resp => resp.json())
                .catch((error) => {
                    navigate('/not-found');
                }),
            fetch(`${process.env.REACT_APP_API_URI}/3/person/${actorId.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(resp => resp.json()),
        ]).then((data) => {
            setActor({ ...data[0], movies: data[1] })
        });
    }, [actorId.id]);

    if (actor === null)
        return <Progressbar />;

    console.log(actor);

    return <div className="flex flex-col flex-wrap sm:flex-row p-8 sm:text-left text-center items-center">
        <div className="md:w-1/4 lg:w-3/6 flex justify-end">
            <img className="shadow-2xl rounded" src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.name} />
        </div>
        <div className="md:w-3/4 lg:w-3/6 pl-8 flex flex-col space-y-3">
            <h1 className="text-3xl text-white">{actor.name}</h1>
            <h3 className="text-3sm text-yellow-300">{actor.known_for_department}</h3>
            <p className="text-sm text-green-100">
                {new Date(actor.birthday).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-sm text-green-100">
                {actor.place_of_birth}
            </p>
            <p className="text-sm  text-white">Gender: {actor.gender === 1 ? "Female" : "Male"}</p>
            {actor.deathday && <p className="text-sm text-white">Died: {new Date(actor.deathday).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>}
        </div>
        <div className="w-full text-center bg-white p-8 my-8">
            <h1 className="font-bold text-2xl mb-9">{actor.name}</h1>
            <p className="">{actor.biography}</p>
        </div>
        <div className="w-full text-center">
            <h1 className="font-bold text-2xl mb-9">Movies</h1>
            <div className="flex overflow-x-auto" id="journal-scroll">
                {actor.movies.cast.map(mov => {
                    return <div key={actor.cast_id} className="flex-shrink-0 w-20 mx-3 text-center">
                        <Link to={`/movies/${mov.id}`}>
                            <img className="" src={mov.poster_path ? `https://image.tmdb.org/t/p/w200/${mov.poster_path}` : `https://via.placeholder.com/200x300`} />
                            <p className="text-xs text-white mt-1">{mov.title}</p>
                        </Link>
                        <h1 className="mt-1 text-xs">{mov.name}</h1>
                    </div>
                })}
            </div>
        </div>

    </div >;
}
export default Actor;