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
import defaultImg from "../../images/defaultImg.png";
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
    window.localStorage.setItem(
      "urlFrom",
      JSON.stringify(location.state.from.pathname)
    );
  }, []);

  const onGoBack = () => {
    if (!location.state) {
      history.push(location?.state?.from ?? "/");
    } else history.push(JSON.parse(window.localStorage.getItem("urlFrom")));
  };

  if (status === "resolved") {
    const srcImgById = movie.poster_path
      ? `http://image.tmdb.org/t/p/w200${movie.poster_path}`
      : defaultImg;

    const userScore = movie.vote_average * 10;
    const yearReleseMovie = movie.release_date.slice(0, 4) || "19..";
    const genresMovie = movie.genres.map((genre) => genre.name).join("  ");

    return (
      <Container>
        <Button onClick={onGoBack} children={<RiArrowGoBackLine />}></Button>

        <div className={s.containerMovie}>
          <img src={srcImgById} display="inline-block" alt={movie.title} />

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
  return <p>Please, wait</p>;
}

export default MovieDetailsView;
