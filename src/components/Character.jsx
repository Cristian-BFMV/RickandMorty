import React from 'react';
import CharacterStyles from '../styled/Character';

const Character = ({ name, origin, location, status, image }) => (
  <CharacterStyles>
    <div className="character-image-container">
      <img src={image} alt="Character" className="character-image" />
    </div>
    <div className="character-info-container">
      <h2>{name}</h2>
      <div className="character-info">
        <h3>Status</h3>
        <p>{status}</p>
      </div>
      <div className="character-info">
        <h3>Origin</h3>
        <p>{origin}</p>
      </div>
      <div className="character-info">
        <h3>Location</h3>
        <p>{location}</p>
      </div>
    </div>
  </CharacterStyles>
);

export default Character;
