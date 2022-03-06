import loading from "../assets/loading.svg";

const Progressbar = () => {
    return <div className="grid grid-cols-1 justify-items-center">
        <span className="bg-white w-24 rounded">
            <img src={loading} className="w-24 h-24" alt="Loading" />
            <p className="text-fuchsia-800">Loading...</p>
        </span>
    </div>
};

export default Progressbar;