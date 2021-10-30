import React, { useState, useEffect } from "react";
import { Context } from "./Context.js";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Pagination from "../../Components/Pagination/Pagination";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const [context, setContext] = useState(1);
  const [moviewsRequest, setMoviewsRequest] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchMoviesTrending({ context })
      .then((data) => {
        return setMoviewsRequest(data), setMovies(data.results);
      })
      .catch((error) => console.warn(error));
  }, [context]);

  return (
    <Container title="Trending today">
      <MoviesList movies={movies} />

      <Context.Provider value={[context, setContext]}>
        <Pagination moviewsRequest={moviewsRequest} />
      </Context.Provider>
    </Container>
  );
}

export default HomeView;
