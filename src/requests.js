import tmdb from "./env";

const API_KEY = tmdb.apikey;

// https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY} for getting genres list

const requests = {
    fetchPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
    fetchFreeToWatch: `/discover/movie?sort_by=free_to_watch.desc&api_key=${API_KEY}&language=en-US`,
    fetchLatestTrailers: `/discover/movie?sort_by=latest_trailers.desc&api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
