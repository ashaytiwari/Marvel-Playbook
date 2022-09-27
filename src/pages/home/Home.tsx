import React from 'react';

import Banner from 'components/home/banner/Banner';
import Advertisement from 'components/home/advertisement/Advertisement';
import Characters from 'components/home/characters/Characters';

import styles from './Home.module.scss';

function Home() {

  return (
    <div className={styles.container}>
      <Banner />
      <Advertisement />
      <Characters />
    </div>
  );

}

export default Home;