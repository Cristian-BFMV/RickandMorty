import styled from 'styled-components';

const CharacterCardStyles = styled.article`
  & {
    display: flex;
    align-items: center;
    flex: 0 0 47%;
    margin: 2% 1.5%;
    min-height: 20vh;
    height: 40vh;
    border-radius: 1.2rem;
    border: 1px solid rgb(190, 190, 190);
    box-shadow: 3px 1px 5px 1px rgb(190, 190, 190);
  }

  & h2 {
    border-bottom: 1px solid rgb(216, 216, 216);
  }
  & p {
    font-size: 1.1rem;
  }

  .card-image-container {
    flex: 30%;
    height: 100%;
  }

  .card-content-container {
    flex: 0 0 50%;
    margin: 0 0.8rem;
  }

  .card-content-container > h3 {
    margin: 0.2rem 0rem;
  }
  .card-image {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem 0 0 1.2rem;
  }

  .status-text {
    color: ${props => (props.status === 'Alive' ? 'green' : 'red')};
  }
`;

export default CharacterCardStyles;
