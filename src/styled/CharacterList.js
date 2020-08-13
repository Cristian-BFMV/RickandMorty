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
`;

export default CharacterListStyles;
