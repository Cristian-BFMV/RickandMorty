import React from 'react';
import useFetchData from '../customhooks/useFetchData';
import CharacterCard from '../components/CharacterCard';
import Spinner from '../components/Spinner';

const EpisodeCharacter = ({ url }) => {
  const [data, loading, error] = useFetchData(url);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <h1>Lo sentimos, ha ocurrido un error</h1>
          ) : (
            <CharacterCard
              id={data.id}
              name={data.name}
              status={data.status}
              species={data.species}
              gender={data.gender}
              origin={data.origin.name}
              location={data.location.name}
              image={data.image}
            />
          )}
        </>
      )}
    </>
  );
};

export default EpisodeCharacter;