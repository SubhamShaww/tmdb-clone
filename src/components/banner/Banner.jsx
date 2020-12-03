import React, { useEffect, useState } from "react";
import requests from "../../requests";
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(
        to right,
        rgba(3, 37, 65, 0.8) 0%,
        rgba(3, 37, 65, 0) 100%
      ), url(
        "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
      )`
      }}
    >
      <div className="banner-contents">
        <h2 className="banner-title">Welcome.</h2>
        <h3 className="banner-description">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>

        <form className="inner-search-form" action="/search" method="get">
          <input
            className="input-text"
            dir="auto"
            name="query"
            type="text"
            tabIndex="1"
            autoCorrect="off"
            autofill="off"
            autoComplete="off"
            spellCheck="false"
            placeholder="Search for a movie, tv show, person......"
          />

          <input className="input-submit" type="submit" value="Search" />
        </form>
      </div>
    </header>
  );
}

export default Banner;
