import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Container from "../../Components/Container/Container";
// import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import * as moviesAPI from "../../services/movies-api";
import s from "../HomeView/HomeView.module.css";
import sl from "../../Components/Loader/Loader.module.css";

console.log("(moviesAPI", moviesAPI);

function HomeView() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  console.log("do", status);

  useEffect(() => {
    // moviesAPI.fetchMoviesTrending().then(setMovies);
    moviesAPI.fetchMoviesTrending().then((data) => setMovies(data.results));
    setStatus("resolved");
  }, []);

  if (status === "idle") {
    return <h1>Wait, please</h1>;
  }

  if (status === "pending") {
    return (
      <Loader
        className={sl.loader}
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }

  if (status === "rejected") {
    //     return <ImagesError errorQuery={searchQuery} />;
    return <h1>Upps...</h1>;
  }

  if (status === "resolved") {
    return (
      <Container title="Trending today">
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default HomeView;
