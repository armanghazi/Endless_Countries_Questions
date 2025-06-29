import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Endless Countries Questions</h1>
      <div className="home-content">
        <p>Test your knowledge with endless questions!</p>
        <div className="button-container">
          <Link to="/play" className="play-button">Start Playing</Link>
          <Link to="/leaderboard" className="leaderboard-button">Leaderboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 