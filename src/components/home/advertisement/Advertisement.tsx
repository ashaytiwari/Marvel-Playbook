import React from 'react';

import desktopAdvertisementImage from 'assets/images/desktop-advertisement.jpeg';
import mobileAdvertisementImage from 'assets/images/mobile-advertisement.jpeg';

import styles from './Advertisement.module.scss';

const Advertisement = () => {

  function handleAdvertisementClick() {

    const url = 'https://www.marvel.com/unlimited?cid=dsp_housead_20210909_unlimited_launchads';

    window.open(url, '_blank');

  }

  const desktopAdvertisementImageAttributes = {
    src: desktopAdvertisementImage,
    className: styles.desktopAdvertisementImage,
    onClick: handleAdvertisementClick
  };

  const mobileAdvertisementImageAttributes = {
    src: mobileAdvertisementImage,
    className: styles.mobileAdvertisementImage,
    onClick: handleAdvertisementClick
  };

  return (
    <div className={styles.advertisementMain}>
      <img {...desktopAdvertisementImageAttributes} alt="advertisement" />
      <img {...mobileAdvertisementImageAttributes} alt="advertisement" />
    </div>
  );
};

export default Advertisement;