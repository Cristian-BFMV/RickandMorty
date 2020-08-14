import styled from 'styled-components';

const ButtonStyles = styled.div`
  .general-button {
    width: 8rem;
    padding: 0.2rem 1.6rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 0.2rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
  }

  .general-button:hover:enabled {
    background-color: black;
    border: 1px solid black;
    color: white;
  }
`;

export default ButtonStyles;
