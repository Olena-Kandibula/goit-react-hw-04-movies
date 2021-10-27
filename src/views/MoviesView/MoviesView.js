import React, { useState, useEffect } from "react";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import SearchForm from "../../Components/SearchForm/SearchForm";

import MoviesList from "../../Components/MoviesList/MoviesList";

function MoviesView({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI
      .fetchMoviesByName({ searchQuery })
      .then((data) => setMovies(data.results))
      .catch((error) => console.warn(error));
  }, [searchQuery]);

  const formSubmitHandler = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <Container>
      <SearchForm onSubmit={formSubmitHandler} />
      <MoviesList movies={movies} />
    </Container>
  );
}

export default MoviesView;
