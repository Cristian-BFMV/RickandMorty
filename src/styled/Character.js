import styled from 'styled-components';

const CharacterStyles = styled.article`
  & {
    flex: 0 0 20%;
  }

  .character-image-container > .character-image {
    border-radius: 50%;
    border: 1px solid rgb(184, 184, 184);
    width: 100%;
    max-width: 15rem;
  }

  .character-info-container {
    margin: 1.2rem 0;
  }

  .character-info-container > h2 {
    font-size: 2.3rem;
    color: rgb(78, 78, 78);
    border-bottom: 1px solid rgb(216, 216, 216);
    margin: 0.6rem 0;
  }

  .character-info {
    margin: 0.4rem 0;
  }

  .character-info > h3 {
    font-size: 1.7rem;
    font-weight: 500;
    color: rgb(78, 78, 78);
  }

  .character-info > p {
    font-size: 1.2rem;
    color: rgb(105, 105, 105);
  }
`;

export default CharacterStyles;
