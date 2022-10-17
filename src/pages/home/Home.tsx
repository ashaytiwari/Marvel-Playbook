import React from 'react';

import Banner from 'components/home/banner/Banner';
import Advertisement from 'components/home/advertisement/Advertisement';
import Characters from 'components/home/characters/Characters';
import MarvelUnlimited from 'components/home/marvel-unlimited/MarvelUnlimited';

import styles from './Home.module.scss';

function Home() {

  return (
    <div className={styles.container}>
      <Banner />
      <Advertisement />
      <Characters />
      <MarvelUnlimited />
    </div>
  );

}

export default Home;