import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import styles from './Banner.module.scss';

const Banner = () => {

  const { text } = useTypewriter({
    words: ['startup.', 'future.', 'success.'],
    loop: 0
  });

  function renderBannerContent() {

    const seeMoreControlAttributes = {
      className: styles.seeMoreControl,
      href: 'https://www.marvel.com/articles/movies/thor-love-and-thunder-character-posters',
      target: '_blank'
    };

    return (
      <div className={styles.bannerContent}>

        <h1 className={styles.bannerText}>
          Turn your ideas into {' '}
          <span className={styles.typewriterContent}>{text}</span>
          <span className={styles.typewriterCursor}><Cursor cursorStyle='|' /></span>
        </h1>

        <p className={styles.bannerDescription}>Check out new character posters, and get your tickets now for Thor: Love and Thunder!</p>

        <a {...seeMoreControlAttributes}>See more</a>

      </div>
    );

  }

  return (
    <div className={styles.homeBannerMain}>

      <div className={styles.bannerImageWrapper}>
        {renderBannerContent()}
      </div>

    </div>
  );
};

export default Banner;