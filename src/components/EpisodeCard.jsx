import React from 'react';
import EpisodeCardStyles from '../styled/EpisodeCard';

const EpisodeCard = ({ id, name, airDate, episode }) => (
  <EpisodeCardStyles>
    <div className="episode-number">
      <h3>Episode #{id}</h3>
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
