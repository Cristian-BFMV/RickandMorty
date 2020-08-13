import styled from 'styled-components';

const HomeStyles = styled.article`
  & {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    text-align: center;
    width: 100%;
  }

  .home-container {
    flex: 0 0 75%;
  }

  .home-main-content,
  .social-media-container,
  .social-media-title {
    margin: 1.1rem;
  }

  .home-main-title {
    font-size: 4rem;
  }

  .home-main-text,
  .home-info-text {
    font-size: 1.4rem;
  }

  .home-link {
    text-decoration: none;
    color: rgb(97, 97, 97);
    font-weight: bolder;
  }

  .social-media-title {
    font-size: 1.7rem;
  }

  .social-media-links {
    margin: 0 0.2rem;
  }
`;

export default HomeStyles;
