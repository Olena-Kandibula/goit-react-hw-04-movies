import PropTypes from "prop-types";

import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

import s from "../MoviesList/MoviesList.module.css";

function MoviesList({ movies }) {
  const location = useLocation();
  const { url } = useRouteMatch();
  const urlForDetail = url.replace("movies", "");

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <NavLink
            to={{
              pathname: `${urlForDetail}movies/${movie.id}`,
              state: { from: location },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
