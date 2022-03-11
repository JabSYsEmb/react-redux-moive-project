import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActorCard from "../../components/ActorCard";
import Progressbar from "../../components/Progressbar";
import { fetchActors } from "../actor/actorSlice";

const ActorsList = () => {

    const { status, actors } = useSelector(state => state.actors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActors());
    }, [dispatch]);

    if (status === "loading")
        return <Progressbar />;
    else if (status === "failed")
        return <h1 className="text-2xl text-white">Failed to fetch data</h1>;

    return <div className="grid grid-cols-1 justify-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
        {actors.map(act => {
            return <ActorCard key={act.id} actor={act} />
        })}
    </div>;
}
export default ActorsList;