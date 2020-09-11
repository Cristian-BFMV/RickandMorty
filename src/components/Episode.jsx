import React from 'react';

const Episode = ({ name, airDate, episode }) => (
  <div>
    <div className="episode-info episode-name">
      <h2>{name}</h2>
    </div>
    <div className="episode-info">
      <p>Air date: {airDate}</p>
    </div>
    <div className="episode-info">
      <p>Episode: {episode}</p>
    </div>
  </div>
);

export default Episode;
