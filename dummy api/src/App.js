import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function fetchmovieshandler() {
    setIsLoading(true);
    setIsError(false);
    try{    
    const response = await fetch("https://swapi.dev/api/film/");

    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);}
    catch{
      setIsError(true);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !isError && <p>Found no movies.</p>}
        {isLoading && !isError && <p>Loading...</p>}
        {!isLoading && isError && <p>Could not fetch movies.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
