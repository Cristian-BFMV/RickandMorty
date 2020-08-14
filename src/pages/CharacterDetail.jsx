import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../customhooks/useFetchData';
import Character from '../components/Character';
import CharacterDetailStyles from '../styled/CharacterDetail';

const CharacterDetail = memo(() => {
  const { id } = useParams();
  const [data, loading, error] = useFetchData(`https://rickandmortyapi.com/api/character/${id}`);

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <CharacterDetailStyles>
          <Character
            name={data.name}
            status={data.status}
            origin={data.origin.name}
            location={data.location.name}
            image={data.image}
          />
          <div className="holiwi">
            <ul>
              <li>Hola wey</li>
              <li>Hola wey</li>
              <li>Hola wey</li>
              <li>Hola wey</li>
            </ul>
          </div>
        </CharacterDetailStyles>
      )}
    </div>
  );
});

export default CharacterDetail;
