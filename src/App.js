import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { initialMovies } from './containers/movie/movieSlice';
import Home from "./containers/Home";
import MoviesList from './containers/movie/MoviesList';
import Movie from './containers/movie/Movie';
import Bookmark from './containers/bookmark/Bookmark';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialMovies());
  }, [dispatch]);

  return (
    <div className="App bg-gray-800 min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/bookmark">Bookmark</Link>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;