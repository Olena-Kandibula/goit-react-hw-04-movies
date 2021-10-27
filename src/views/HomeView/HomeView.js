import React, { useState, useEffect } from "react";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import MoviesList from "../../Components/MoviesList/MoviesList";

function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchMoviesTrending()
      .then((data) => setMovies(data.results))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <Container title="Trending today">
      <MoviesList movies={movies} />
    </Container>
  );
}

export default HomeView;
