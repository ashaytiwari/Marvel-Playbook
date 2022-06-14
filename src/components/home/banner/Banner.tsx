import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import styles from './Banner.module.scss';

const Banner = () => {

  const { text } = useTypewriter({
    words: ['startup.', 'future.', 'success.'],
    loop: 0
  });

  return (
    <div className={styles.homeBannerMain}>

      <div className={styles.bannerContent}>
        <h1 className={styles.bannerText}>
          Turn your ideas into {' '}
          <span className={styles.typewriterContent}>{text}</span>
          <span className={styles.typewriterCursor}><Cursor cursorStyle='|' /></span>
        </h1>
      </div>

      <div className={styles.bannerImageWrapper}></div>

    </div>
  );
};

export default Banner;