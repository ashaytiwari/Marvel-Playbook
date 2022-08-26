import React from 'react';

import FooterExternalControls from './footer-external-controls/FooterExternalControls';
import MarvelFeatureControl from './footer-marvel-feature-controls/MarvelFeatureControl';
import MarvelSocialChannels from './footer-marvel-social-channels/MarvelSocialChannels';

import MLogo from 'assets/images/logo.png';

import styles from './Footer.module.scss';

const Footer = () => {

  const marvelLogoAttributes = {
    className: styles.logo,
    src: MLogo
  };

  return (
    <div className={styles.footerMain}>

      <div className={styles.logoContainer}>
        <img {...marvelLogoAttributes} alt={'marvel-logo'} />
      </div>

      <FooterExternalControls />
      <MarvelFeatureControl />
      <MarvelSocialChannels />

    </div>
  );
};

export default Footer;