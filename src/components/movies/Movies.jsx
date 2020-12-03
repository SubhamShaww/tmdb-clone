import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Movies.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Movies({ title, fetchUrl, isTrailer }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [showBlur, setShowBlur] = useState(true);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const myRef = useRef(null);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  // a snippet of code that runs on specific condition / variable.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

    // const handleScroll = () => {
    //   const currentPosition = myRef.current;

    //   // window.pageYOffset;

    //   if (currentPosition > 20) {
    //     setShowBlur(false);
    //     setScrollPosition(currentPosition);
    //   }
    // };

    // window.addEventListener("scroll", handleScroll, { passive: true });

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(trailerUrl)
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="movies">
      <h2 className="category-title">{title}</h2>

      <div className="row-posters">
        {/* several posters */}
        {movies.map((movie) => {
          return (
            movie?.backdrop_path && (
              <div key={movie.id} className={`each-movie-box ${isTrailer && "each-trailer-box"}`}>
                <img
                  onClick={isTrailer && (() => {
                    handleClick(movie);
                  })}
                  className={`row-poster ${isTrailer && "row-poster-backdrop"}`}
                  src={`${imageBaseUrl}${
                    isTrailer ? movie.backdrop_path : movie.poster_path
                  }`}
                  alt={movie.name}
                />
                <div className="row-poster-content">
                  <h2 className="movie-title">
                    {movie?.title ||
                      movie?.original_title ||
                      movie?.name ||
                      movie?.original_name}
                  </h2>
                  <p className="movie-date">
                    {movie?.first_air_date || movie?.release_date}
                  </p>
                </div>
              </div>
            )
          );
        })}
        <div className="row-posters-blur"></div>
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Movies;
