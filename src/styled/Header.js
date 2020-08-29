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
    flex: 0 0 50%;
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

  .burger-menu {
    width: 1.8rem;
    height: 1.5rem;
    display: none;
    cursor: pointer;
  }

  .burger-line {
    width: 100%;
    height: 0.3rem;
    margin: 0.2rem 0;
    background-color: black;
    transition: all 0.4s ease-in-out;
  }

  @media only screen and (max-width: 900px) {
    .nav-list {
      flex-flow: column wrap;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      top: 10vh;
      left: 0;
      width: 0;
      height: 90vh;
      z-index: 3;
      overflow-x: hidden;
      transition: all 0.4s ease-in-out;
      background-color: rgb(20, 20, 20);
    }

    .responsive-nav-list {
      width: 100%;
    }

    .nav-link {
      color: white;
    }

    .burger-menu {
      display: block;
    }

    .toggle > .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle > .line2 {
      opacity: 0;
    }
    .toggle > .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;

export default HeaderStyles;
