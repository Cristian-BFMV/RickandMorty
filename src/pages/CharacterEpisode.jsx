import React from 'react';
import useFetchData from '../customhooks/useFetchData';
import EpisodeCard from '../components/EpisodeCard';

const CharacterEpisode = ({ url }) => {
  const [data] = useFetchData(url);

  return <EpisodeCard id={data.id} name={data.name} airDate={data.air_date} episode={data.episode} />;
};

export default CharacterEpisode;
