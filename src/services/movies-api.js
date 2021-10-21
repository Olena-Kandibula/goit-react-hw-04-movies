const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "37ddbc320f48fcbb375faaee253d2760";

async function fetchWihtErrorHandling(url = "", config = {}) {
  const respons = await fetch(url, config);
  // console.log('respons.json()',respons)
  return respons.ok
    ? await respons.json()
    : // : Promise.reject(new Error('Not found'));
      Promise.reject(console.log("Not found"));
}

export function fetchMoviesTrending() {
  return fetchWihtErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchMoviesById({ movieId }) {
  return fetchWihtErrorHandling(`${BASE_URL}/movies/${movieId}`);
}
