import React, { useState, useEffect } from "react";
import { Context } from "./Context.js";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import MoviesList from "../../Components/MoviesList/MoviesList";
import Pagination from "../../Components/Pagination/Pagination";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [context, setContext] = useState(1);
  const [moviewsRequest, setMoviewsRequest] = useState(null);
  console.log("home context", context);
  console.log(typeof context);
  console.log("home page", page);

  const getCurrentPage = (pageClick) => {
    setPage(pageClick);
  };

  useEffect(() => {
    // setPage(context);
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
        <Pagination onClick={getCurrentPage} moviewsRequest={moviewsRequest} />
      </Context.Provider>
    </Container>
  );
}

export default HomeView;
