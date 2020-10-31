import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../customhooks/useFetchData';
import Character from '../components/Character';
import CharacterEpisodesList from './CharacterEpisodesList';
import Spinner from '../components/Spinner';
import CharacterDetailStyles from '../styled/CharacterDetail';

const CharacterDetail = memo(() => {
  const { id } = useParams();
  const [data, loading, error] = useFetchData(`https://rickandmortyapi.com/api/character/${id}`);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CharacterDetailStyles>
          {error ? (
            <h1>Lo sentimos, ha ocurrido un error</h1>
          ) : (
            <>
              <Character
                name={data.name}
                status={data.status}
                origin={data.origin.name}
                location={data.location.name}
                image={data.image}
              />
              <CharacterEpisodesList episodes={data.episode} />
            </>
          )}
        </CharacterDetailStyles>
      )}
    </>
  );
});

export default CharacterDetail;