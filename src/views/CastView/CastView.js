import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from "../../services/movies-api";

import defaultImg from "../../images/defaultImg.png";

import s from "../CastView/CastView.module.css";

function CastView() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI
      .fetchMoviesCast({ movieId })
      .then((data) => setCast(data.cast))
      .catch((error) => console.warn(error));
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <ul className={s.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={s.item}>
              <img
                src={
                  actor.profile_path
                    ? `https://www.themoviedb.org/t/p/w300/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                className={s.img}
              />

              <h4>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please, wait</p>
      )}
    </>
  );
}

export default CastView;
