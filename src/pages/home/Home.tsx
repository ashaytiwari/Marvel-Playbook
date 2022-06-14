import React from 'react';

import Banner from 'components/home/banner/Banner';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}

export default Home;