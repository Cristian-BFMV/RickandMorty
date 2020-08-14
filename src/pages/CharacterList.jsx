import React, { useState } from 'react';
import useFetchData from '../customhooks/useFetchData';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import CharacterCard from '../components/CharacterCard';
import CharacterListStyles from '../styled/CharacterList';

const CharacterList = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [data, loading, error] = useFetchData(url);

  const updateUrl = newUrl => {
    setUrl(newUrl);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CharacterListStyles>
          {error ? (
            <h1>Lo sentimos, ha ocurrido un error</h1>
          ) : (
            <>
              <div className="character-list">
                {data.results.map(character => (
                  <CharacterCard
                    id={character.id}
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
              <div className="character-list-pagination">
                <Button
                  text="Previous"
                  onClick={() => {
                    updateUrl(data.info.prev);
                  }}
                  className="pagination-button"
                  disable={data.info.prev ? false : true}
                />
                <Button
                  text="Next"
                  onClick={() => {
                    updateUrl(data.info.next);
                  }}
                  className="pagination-button"
                  disable={data.info.next ? false : true}
                />
              </div>
            </>
          )}
        </CharacterListStyles>
      )}
    </>
  );
};

export default CharacterList;
