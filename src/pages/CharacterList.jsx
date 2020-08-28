import React, { useState } from 'react';
import useFetchData from '../customhooks/useFetchData';
import CharacterCard from '../components/CharacterCard';
import ListPagination from '../components/ListPagination';
import Spinner from '../components/Spinner';
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
                <ListPagination
                  prevFunct={() => {
                    updateUrl(data.info.prev);
                  }}
                  prevDisable={data.info.prev ? false : true}
                  nextFunct={() => {
                    updateUrl(data.info.next);
                  }}
                  nextDisable={data.info.next ? false : true}
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
