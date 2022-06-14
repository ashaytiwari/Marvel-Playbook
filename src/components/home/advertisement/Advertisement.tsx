import React from 'react';

import AdvertisementImage from 'assets/images/advertisement.jpeg';

import styles from './Advertisement.module.scss';

const Advertisement = () => {

  function handleAdvertisementClick() {

    const url = 'https://www.marvel.com/unlimited?cid=dsp_housead_20210909_unlimited_launchads';

    window.open(url, '_blank');

  }

  const advertisementImageAttributes = {
    src: AdvertisementImage,
    className: styles.advertisementImage,
    onClick: handleAdvertisementClick
  };

  return (
    <div className={styles.advertisementMain}>
      <img {...advertisementImageAttributes} alt="advertisement" />
    </div>
  );
};

export default Advertisement;