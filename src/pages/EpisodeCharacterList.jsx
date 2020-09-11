import React from 'react';
import EpisodeCharacter from './EpisodeCharacter';

const EpisodeCharacterList = ({ characters }) => (
  <div className="episode-character-list">
    {characters.map((characterUrl, index) => (
      <EpisodeCharacter url={characterUrl} key={index} />
    ))}
  </div>
);

export default EpisodeCharacterList;
