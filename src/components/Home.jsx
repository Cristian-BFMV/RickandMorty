import React from 'react';
import HomeStyles from '../styled/Home';

const Home = () => {
  return (
    <HomeStyles>
      <div className="home-container">
        <div className="home-main-content">
          <h2 className="home-main-title">Rick and Morty frontend project</h2>
          <p className="home-main-text">
            This project is for learning purposes and is taking the data from the{' '}
            <a href="https://rickandmortyapi.com/" target="_blank" className="home-link" rel="noopener noreferrer">
              Rick and Morty API.
            </a>
          </p>
        </div>
        <div className="social-media-container">
          <p className="home-info-text">Developed by Cristian Camilo Mendoza Mancera</p>
          <h3 className="social-media-title">Social Media</h3>
          <div className="social-media-icons">
            <a
              href="https://www.facebook.com/MendozaCri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-links"
            >
              <img src="https://img.icons8.com/ios/30/000000/facebook.png" alt="facebook-icon" />
            </a>
            <a
              href="https://www.instagram.com/ccamilom.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-links"
            >
              <img src="https://img.icons8.com/ios/30/000000/instagram-new.png" alt="instagram-icon" />
            </a>
            <a
              href="https://twitter.com/ccamilo_mm?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-links"
            >
              <img src="https://img.icons8.com/ios/30/000000/twitter.png" alt="instagram-icon" />
            </a>
            <a
              href="https://github.com/Cristian-BFMV"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-links"
            >
              <img src="https://img.icons8.com/wired/30/000000/github.png" alt="instagram-icon" />
            </a>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;
