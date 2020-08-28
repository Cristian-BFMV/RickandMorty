import styled from 'styled-components';

const EpisodeCardStyles = styled.div`
  & {
    margin-bottom: 0.8rem;
    border-bottom: 1px solid rgb(216, 216, 216);
    padding: 1.2rem;
  }

  .episode-number > h3 {
    font-size: 1.4rem;
    color: rgb(36, 36, 36);
  }

  .episode-info {
    display: flex;
    margin: 0.6rem 0 0;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  .episode-name,
  .episode-air-date,
  .episode-season {
    flex: 0 0 30%;
    font-weight: lighter;
  }

  .episode-info-title,
  .episode-info-title,
  .episode-info-title {
    font-weight: bold;
    margin: 0 0.4rem 0 0;
  }
`;

export default EpisodeCardStyles;
