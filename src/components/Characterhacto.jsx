import React from 'react';
import { Link } from 'react-router-dom';
import EpisodeCardStyles from '../styled/EpisodeCard';

const EpisodeCard = ({ id, name, airDate, episode }) => (
  <EpisodeCardStyles>
    <div className="episode-number">
      <Link to={`/episode/${id}`} className="episode-link">
        <h3>Episode #{id}</h3>
      </Link>
    </div>
    <div className="episode-info">
      <div className="episode-name">
        <p>
          <span className="episode-info-title">Name:</span>
          {name}
        </p>
      </div>
      <div className="episode-air-date">
        <p>
          <span className="episode-info-title">Air date:</span>
          {airDate}
        </p>
      </div>
      <div className="episode-season">
        <p>
          <span className="episode-info-title">Season:</span>
          {episode}
        </p>
      </div>
    </div>
  </EpisodeCardStyles>
);

export default EpisodeCard;