import { Link } from "react-router-dom";

const ActorCard = ({ actor }) => {

    const imgActor = actor.poster_path === null ? "https://via.placeholder.com/200x300" : `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;

    return (
        <div className="my-2">
            <Link to={`/actors/${actor.id}`}>
                <img src={imgActor} alt={actor.name} />
                <p className="text-white">{actor.name}</p>
            </Link>
        </div>
    );
}

export default ActorCard;