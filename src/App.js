import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { initialMovies } from './containers/movie/movieSlice';
import Home from "./containers/Home";
import MoviesList from './containers/movie/MoviesList';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialMovies());
  }, [dispatch]);

  return (
    <div className="App bg-gray-800">
      {/* <Home /> */}
      <MoviesList />
    </div>
  );
}

export default App;