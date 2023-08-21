import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  function fetchmovieshandler(){
    fetch("https://swapi.dev/api/films/").then((response)=>{
      return response.json();
    }).then((data)=>{
      const transformedMovies = data.results.map((movieData)=>{
        return {
          id:movieData.id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
