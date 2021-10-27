import React, { useState, useEffect } from "react";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesList from "../../Components/MoviesList/MoviesList";
import MovieError from "../../Components/MovieError/MovieError";

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const formSubmitHandler = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    moviesAPI
      .fetchMoviesByName({ searchQuery })
      .then((data) => {
        if (data.total_results !== 0) {
          return setMovies(data.results);
        }
        return setSearchQuery("unCorrect");
      })
      .catch((error) => console.warn(error));
  }, [searchQuery]);

  return (
    <Container>
      <SearchForm onSubmit={formSubmitHandler} />
      {searchQuery !== "unCorrect" ? (
        <MoviesList movies={movies} />
      ) : (
        <MovieError />
      )}
    </Container>
  );
}

export default MoviesView;
