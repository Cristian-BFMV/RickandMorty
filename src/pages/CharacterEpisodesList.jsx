import React from 'react';
import CharacterEpisode from './CharacterEpisode';
import CharacterEpisodesListStyles from '../styled/CharacterEpisodesList';

const CharacterEpisodesList = ({ episodes }) => {
  return (
    <CharacterEpisodesListStyles>
      <h2 className="character-episodes-title">Episodes</h2>
      {episodes.map((episode, index) => (
        <CharacterEpisode url={episode} key={index} />
      ))}
    </CharacterEpisodesListStyles>
  );
};

export default CharacterEpisodesList;
