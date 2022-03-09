import { useState, useEffect } from "react";
import Moviecart from "./Moviecart";
import "./App.css";
import searchIcon from "./search.svg";

const URL_API = "http://www.omdbapi.com?apikey=b6003d8a";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");

  useEffect(() => {
    movieSearchdata("batman");
  }, []);

  const movieSearchdata = async (title) => {
    const response = await fetch(`${URL_API}&s= ${title}`);
    const data = await response.json();

    setMovies(data.search);
  };
  return (
    <div className='App'>
      <hi className='pont'>Movie app</hi>
      <div className='search'>
        <input
          type='text'
          placeholder='search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={() => movieSearchdata(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <Moviecart movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
