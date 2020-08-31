import styled from 'styled-components';

const CharacterEpisodesListStyles = styled.article`
  & {
    flex: 70%;
    margin-left: 5%;
  }

  .character-episodes-title {
    margin: 0 0 1.2rem 0;
    border-bottom: 1px solid rgb(216, 216, 216);
  }

  @media only screen and (min-width: 600px) and (max-width: 899px) {
    & {
      flex: 90%;
    }
  }
`;

export default CharacterEpisodesListStyles;
