import React from 'react';

import styles from './MarvelUnlimited.module.scss';

const MarvelUnlimited = () => {

  function renderMarvelUnlimitedContent() {

    const marvelUnlimitedControlAttributes = {
      className: styles.marvelUnlimitedControl,
      href: 'https://www.marvel.com/unlimited?cid=dcom_promomodule_20210909_unlimited_home',
      target: '_blank'
    };

    return (
      <div className={styles.marvelUnlimitedContent}>
        <h1 className={styles.marvelUnlimitedHeading}>NEW ON MARVEL UNLIMITED</h1>
        <label className={styles.marvelUnlimitedLabel}>Read these plus 30,000+ digital comics for $9.99 a month!</label>
        <a {...marvelUnlimitedControlAttributes}>Get Marvel Unlimited</a>
      </div>
    );

  }

  function renderDesktopContent() {

    return (
      <div className={styles.desktopContent}>
        {renderMarvelUnlimitedContent()}
      </div>
    );

  }

  function renderMobileContent() {

    return (
      <div className={styles.mobileContentView}>

        <div className={styles.mobileImageWrapper}></div>

        {renderMarvelUnlimitedContent()}

      </div>
    );

  }

  return (
    <div id={styles.marvelUnlimitedMain}>
      {renderDesktopContent()}
      {renderMobileContent()}
    </div>
  );

};

export default MarvelUnlimited;