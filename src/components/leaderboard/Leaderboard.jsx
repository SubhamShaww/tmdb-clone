import React from "react";
import "./Leaderboard.css";

function LeaderBoard() {
  return (
    <div className="leaderboard-box">
      <div className="leaderboard-header">
        <h2>LeaderBoard</h2>
        <div>
          <p>
            <span className="all-time dot"></span> All Time Edits
          </p>
          <p>
            <span className="this-week dot"></span> Edits This Week
          </p>
        </div>
      </div>
      <div className="leaderboard-content">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoard;
