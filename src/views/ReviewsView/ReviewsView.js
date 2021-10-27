import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import * as moviesAPI from "../../services/movies-api";
import s from "../ReviewsView/ReviewsView.module.css";

function ReviewsView() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI
      .fetchMoviesReviews({ movieId })
      .then((data) => setReviews(data.results))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      {reviews.length ? (
        <ul className={s.list}>
          {reviews.map((review) => (
            <li key={review.id} className={s.item}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>NO reviews</p>
      )}
    </>
  );
}

export default ReviewsView;
