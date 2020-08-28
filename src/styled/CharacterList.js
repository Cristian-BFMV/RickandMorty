import styled from 'styled-components';

const CharacterListStyles = styled.section`
  & {
    margin: 2rem 10%;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
  }

  .character-list {
    display: flex;
    flex-flow: row wrap;
    flex: 0 0 100%;
  }

  .character-list-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .pagination-button {
    margin: 0.5rem 0.4rem;
  }

  @media only screen and (min-width: 600px) and (max-width: 899px) {
    & {
      margin: 2rem 5%;
    }
  }

  @media only screen and (max-width: 599px) {
    & {
      margin: 2rem 7%;
    }
  }
`;

export default CharacterListStyles;
