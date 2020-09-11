import React from 'react';
import useFetchData from '../customhooks/useFetchData';
import EpisodeCard from '../components/EpisodeCard';
import Spinner from '../components/Spinner';

const EpisodeList = () => {
  const [data, loading, error] = useFetchData('https://rickandmortyapi.com/api/episode');

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="episode-container">
          {error ? (
            <h1>Lo sentimos, ha ocurrido un error</h1>
          ) : (
            <>
              {data.results.map(episode => (
                <EpisodeCard id={episode.id} name={episode.name} airDate={episode.air_date} episode={episode.episode} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default EpisodeList;
