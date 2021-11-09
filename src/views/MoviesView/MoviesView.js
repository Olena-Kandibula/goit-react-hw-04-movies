import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import * as moviesAPI from "../../services/movies-api";

import Container from "../../Components/Container/Container";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MoviesList from "../../Components/MoviesList/MoviesList";

function MoviesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const searchURL = `${location.pathname}${location.search}`;

  useEffect(() => {
    setSearchQuery("");
    const query = new URLSearchParams(location.search).get("query");
    if (query === null) {
      return;
    }
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("urlFrom", JSON.stringify(searchURL));
  }, [searchURL]);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    moviesAPI
      .fetchMoviesByName({ searchQuery })
      .then((data) => setMovies(data.results))
      .catch((error) => console.warn(error));
  }, [searchQuery]);

  const formSubmitHandler = (searchQuery) => {
    history.push({ ...location, search: `query=${searchQuery}` });
    setSearchQuery(searchQuery);
  };

  return (
    <Container>
      <SearchForm onSubmit={formSubmitHandler} />
      {!searchQuery || movies.length ? (
        <MoviesList movies={movies} />
      ) : (
        <h1>ups...</h1>
      )}
    </Container>
  );
}

export default MoviesView;
