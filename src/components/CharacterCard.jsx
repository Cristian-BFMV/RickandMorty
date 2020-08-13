import React from 'react';
import CharacterCardStyles from '../styled/CharacterCard';

const CharacterCard = ({ name, status, species, gender, origin, location, image }) => (
  <CharacterCardStyles>
    <div className="card-image-container">
      <img src={image} alt="Character" className="card-image" />
    </div>
    <div className="card-content-container">
      <h2>{name}</h2>
      <h3>Estado</h3>
      <p>{status}</p>
      <h3>Especie</h3>
      <p>{species}</p>
      <h3>Genero</h3>
      <p>{gender}</p>
      <h3>Lugar de origen</h3>
      <p>{origin}</p>
      <h3>Ubicación</h3>
      <p>{location}</p>
    </div>
  </CharacterCardStyles>
);

export default CharacterCard;
