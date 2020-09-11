import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../customhooks/useFetchData';
import Episode from '../components/Episode';
import EpisodeCharacterList from './EpisodeCharacterList';
import Spinner from '../components/Spinner';

const EpisodeDetail = () => {
  const { id } = useParams();
  const [data, loading, error] = useFetchData(`https://rickandmortyapi.com/api/episode/${id}`);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <h1>Lo sentimos, ha ocurrido un problema</h1>
          ) : (
            <div className="episode-detail-container">
              <Episode name={data.name} airDate={data.air_date} episode={data.episode} />
              <EpisodeCharacterList characters={data.characters} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EpisodeDetail;
