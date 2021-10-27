import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";

import {
  NavLink,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  Route,
  Switch,
} from "react-router-dom";

import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { RiArrowGoBackLine } from "react-icons/ri";

import * as moviesAPI from "../../services/movies-api";
import s from "../MovieDetailsView/MovieDetailsView.module.css";

const CastView = lazy(() =>
  import("../CastView/CastView.js" /*webpackChunkName:"CastView" */)
);
const ReviewsView = lazy(() =>
  import("../ReviewsView/ReviewsView.js" /*webpackChunkName:"ReviewsView" */)
);

function MovieDetailsView() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");

  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  const location = useLocation();
  const history = useHistory();
  // console.log('location detail', location.state.from);
  // console.log('history detail',history)

  useEffect(() => {
    setStatus("pending");

    if (movieId !== []) {
      moviesAPI
        .fetchMoviesById({ movieId })
        .then((data) => {
          return setMovie(data), setStatus("resolved");
        })
        .catch((error) => console.warn(error));
    }
    return setStatus("rejected");
  }, [movieId]);

  useEffect(() => {
    window.localStorage.setItem("urlFrom", JSON.stringify(location.state.from));
  }, [movieId]);

  const onGoBack = () => {
    const currentURL = history.location.pathname;

    if (!location.state) {
      history.push(location?.state?.from ?? "/");
    }
    if (currentURL.includes("cast") || currentURL.includes("reviews")) {
      history.go(-1);
    }

    history.goBack();
    // history.push(location?.state?.from ?? '/')
  };

  if (status === "idle") {
    return <h1>Wait, please</h1>;
  }

  if (status === "pending") {
    return <h1>Please, wait</h1>;
  }

  if (status === "rejected") {
    return <h1>Please, wait...</h1>;
  }

  if (status === "resolved") {
    const imgId = `http://image.tmdb.org/t/p/w200${movie.poster_path}`;
    const userScore = movie.vote_average * 10;

    const yearReleseMovie = movie.release_date.slice(0, 4);
    const genresMovie = movie.genres.map((genre) => genre.name).join("  ");

    return (
      <Container>
        <Button onClick={onGoBack} children={<RiArrowGoBackLine />}></Button>

        <div className={s.containerMovie}>
          <img src={imgId} display="inline-block" alt={movie.title} />

          <div className={s.description}>
            <h2>{movie.original_title}</h2>
            <span>({yearReleseMovie})</span>

            <p>
              User score<span> {userScore} %</span>
            </p>

            <h4>Overview</h4>

            <span> {movie.overview}</span>

            <h4>Genres</h4>

            <p>{genresMovie}</p>
          </div>
        </div>

        <div className={s.information}>
          <p>Additional information</p>

          <NavLink
            // to={`${url}/cast`}
            to={{
              pathname: `${url}/cast`,
              state: { from: location },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>

          <NavLink
            // to={`${url}/reviews`}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>

          <Suspense fallback={<div>Loading.....</div>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <CastView />
              </Route>

              <Route path={`${path}/reviews`}>
                <ReviewsView />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Container>
    );
  }
  return <h1>Upss..</h1>;
}

export default MovieDetailsView;
