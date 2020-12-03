import React from "react";
import Nav from "./nav/Nav";
import Banner from "./banner/Banner";
import Movies from "./movies/Movies";
import Signup from "./signup/Signup";
import Footer from "./footer/Footer";

import requests from "../requests";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Movies title="What's Popular" fetchUrl={requests.fetchPopular} />
      <Movies title="Free to Watch" fetchUrl={requests.fetchFreeToWatch} />
      <Movies
        title="Latest Trailers"
        fetchUrl={requests.fetchLatestTrailers}
        isTrailer
      />
      <Movies title="Trending" fetchUrl={requests.fetchTrending} />
      <Signup />
      <Footer />
    </div>
  );
}
