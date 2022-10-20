import React from 'react';

import Banner from 'components/home/banner/Banner';
import Advertisement from 'components/home/advertisement/Advertisement';
import Characters from 'components/home/characters/Characters';
import MarvelUnlimited from 'components/home/marvel-unlimited/MarvelUnlimited';
import Comics from 'components/home/comics/Comics';

import styles from './Home.module.scss';

function Home() {

  return (
    <div className={styles.homeMain}>
      <Banner />
      <Advertisement />
      <Characters />
      <MarvelUnlimited />
      <Comics />
    </div>
  );

}

export default Home;