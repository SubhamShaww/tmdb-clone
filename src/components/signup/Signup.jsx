import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-cover">
      <div className="signup-content">
        <h2>Join Today</h2>
        <div className="column-content">
          <div className="left-column">
            <p>
              Get access to maintain your own <em>custom personal lists</em>,{" "}
              <em>track what you've seen</em> and search and filter for{" "}
              <em>what to watch next</em>—regardless if it's in theatres, on TV
              or available on popular streaming services like Netflix, Amazon
              Prime Video, and Jio Cinema.
            </p>
            <p className="signup-button">
              <a href="/">Sign Up</a>
            </p>
          </div>
          <div className="right-column">
            <ul>
              <li>Enjoy TMDb ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
