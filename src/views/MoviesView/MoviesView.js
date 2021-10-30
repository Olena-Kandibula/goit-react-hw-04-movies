import React, { useState, useEffect } from "react";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesList from "../../Components/MoviesList/MoviesList";
import MovieError from "../../Components/MovieError/MovieError";

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

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
          return setMovies(data.results), setStatus("resolved");
        }

        return setError(searchQuery), setStatus("rejected");
      })
      .catch((error) => console.warn(error));
  }, [searchQuery]);

  if (status === "idle") {
    return (
      <Container>
        <SearchForm onSubmit={formSubmitHandler} />
      </Container>
    );
  }

  if (status === "rejected") {
    return <MovieError errorQuery={error} />;
  }

  if (status === "resolved") {
    return (
      <Container>
        <SearchForm onSubmit={formSubmitHandler} />
        <MoviesList movies={movies} />
      </Container>
    );
  }
}

export default MoviesView;
