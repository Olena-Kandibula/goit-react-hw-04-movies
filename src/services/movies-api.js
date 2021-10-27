const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "37ddbc320f48fcbb375faaee253d2760";

async function fetchWihtErrorHandling(url = "", config = {}) {
  const respons = await fetch(url, config);

  return respons.ok
    ? await respons.json()
    : Promise.reject(console.log("Not found"));
  // : Promise.reject(new Error('Not found'));
}

export function fetchMoviesTrending() {
  return fetchWihtErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchMoviesById({ movieId }) {
  return fetchWihtErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function fetchMoviesCast({ movieId }) {
  return fetchWihtErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function fetchMoviesReviews({ movieId }) {
  return fetchWihtErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}

export function fetchMoviesByName({ searchQuery }) {
  return fetchWihtErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
}
