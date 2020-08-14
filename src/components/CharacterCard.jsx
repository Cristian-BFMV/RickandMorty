import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCardStyles from '../styled/CharacterCard';

const CharacterCard = ({ id, name, status, species, gender, origin, location, image }) => (
  <CharacterCardStyles status={status}>
    <div className="card-image-container">
      <Link to={`/character/${id}`}>
        <img src={image} alt="Character" className="card-image" />
      </Link>
    </div>
    <div className="card-content-container">
      <h2>{name}</h2>
      <h3>Status</h3>
      <p className="status-text">{status}</p>
      <h3>Species</h3>
      <p>{species}</p>
      <h3>Gender</h3>
      <p>{gender}</p>
      <h3>Origin</h3>
      <p>{origin}</p>
      <h3>Location</h3>
      <p>{location}</p>
    </div>
  </CharacterCardStyles>
);

export default CharacterCard;
