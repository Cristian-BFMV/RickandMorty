import styled from 'styled-components';

const HeaderStyles = styled.header`
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    min-height: 8vh;
    height: 10vh;
    border-bottom: 1px solid #202329;
  }

  .nav-brand {
    display: flex;
    align-items: center;
  }

  .nav-brand-title {
    font-size: 1.4rem;
    margin: 0 0.3rem;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    flex: 0 0 40%;
  }

  .nav-item {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .nav-brand-logo {
    width: 4rem;
  }

  .nav-link {
    text-decoration: none;
    color: black;
  }
`;

export default HeaderStyles;
