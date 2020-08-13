import React, { useState } from 'react';
import useFetchData from '../customhooks/useFetchData';

import Spinner from '../components/Spinner';
import CharacterCard from '../components/CharacterCard';
import CharacterListStyles from '../styled/CharacterList';

const CharacterList = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [data, loading] = useFetchData(url);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CharacterListStyles>
          <div className="character-list">
            {data.results.map(character => (
              <CharacterCard
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin.name}
                location={character.location.name}
                image={character.image}
                key={character.id}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setUrl(data.info.next);
            }}
          >
            Next
          </button>
        </CharacterListStyles>
      )}
    </>
  );
};

export default CharacterList;
