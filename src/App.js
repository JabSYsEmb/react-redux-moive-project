import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { initialMovies } from './containers/movie/movieSlice';
import Home from "./containers/Home";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialMovies());
  }, [dispatch]);

  return (
    <div className="App bg-gray-800">
      Hello
      <Home />
    </div>
  );
}

export default App;