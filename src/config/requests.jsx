// https://www.themoviedb.org/3

// clé API : 02510086160283b93b140276c3b30e99

const API_KEY = "02510086160283b93b140276c3b30e99";

const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;
