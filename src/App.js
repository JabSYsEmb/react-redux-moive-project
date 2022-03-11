import './App.css';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialMovies } from './containers/movie/movieSlice';
import Home from "./containers/Home";
import MoviesList from './containers/movie/MoviesList';
import Movie from './containers/movie/Movie';
import ActorsList from './containers/actor/ActorsList';
import Actor from './containers/actor/Actor';
import Bookmark from './containers/bookmark/Bookmark';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialMovies());
  }, [dispatch]);

  return (
    <div className="App bg-gray-800 min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/genre/:genre" element={<MoviesList genre />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/actors" element={<ActorsList />} />
          <Route path="/actors/:id" element={<Actor />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;