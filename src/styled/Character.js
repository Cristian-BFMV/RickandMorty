import styled from 'styled-components';

const CharacterStyles = styled.article`
  & {
    flex: 0 0 20%;
  }

  .character-image-container > .character-image {
    border-radius: 50%;
    border: 1px solid rgb(184, 184, 184);
    width: 100%;
    max-width: 10rem;
  }

  .character-info-container {
    margin: 1.2rem 0;
  }

  .character-name > h2 {
    color: black;
    border-bottom: 1px solid rgb(216, 216, 216);
    margin: 0.6rem 0;
  }

  .character-info {
    margin: 0.4rem 0;
  }

  @media only screen and (min-width: 600px) and (max-width: 899px) {
    & {
      flex: 0 0 90%;
      display: flex;
      justify-content: space-around;
    }
  }

  @media only screen and (max-width: 599px) {
    & {
      flex: 0 0 100%;
    }
    .character-image-container {
      flex: 100%;
      display: flex;
      justify-content: center;
    }

    .character-info-container {
      display: flex;
      flex-flow: row wrap;
    }

    .character-name {
      flex: 0 0 100%;
    }
    .character-info {
      flex: 0 0 30%;
      margin: 0 1.5%;
    }
  }
`;

export default CharacterStyles;
