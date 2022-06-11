import React from 'react';

import { Grid } from '@mui/material';

import MLogo from 'assets/images/logo.png';

import styles from './Footer.module.scss';
import FooterExternalControls from './footer-external-controls/FooterExternalControls';
import MarvelFeatureControl from './footer-marvel-feature-controls/MarvelFeatureControl';
import MarvelSocialChannels from './footer-marvel-social-channels/MarvelSocialChannels';

const Footer = () => {

  const gridContainerAttributes = {
    container: true,
    spacing: 2
  };

  const gridItemAttributes = {
    item: true,
    xs: 12,
    md: 3
  };

  function renderLogoGridContainer() {

    const marvelLogoAttributes = {
      className: styles.logo,
      src: MLogo
    };

    return (
      <Grid {...gridItemAttributes}>
        <img {...marvelLogoAttributes} alt={'marvel-logo'} />
      </Grid>
    );

  }

  function renderFooterExternalControls() {

    return (
      <Grid {...gridItemAttributes}>
        <FooterExternalControls />
      </Grid>
    );

  }

  function renderMarvelFeatureItem() {

    return (
      <Grid {...gridItemAttributes}>
        <MarvelFeatureControl />
      </Grid>
    );
  }

  function renderMarvelSocialChannel() {

    return (
      <Grid {...gridItemAttributes}>
        <MarvelSocialChannels />
      </Grid>
    );

  }

  return (
    <div className={styles.footerMain}>
      <Grid {...gridContainerAttributes}>
        {renderLogoGridContainer()}
        {renderFooterExternalControls()}
        {renderMarvelFeatureItem()}
        {renderMarvelSocialChannel()}
      </Grid>
    </div>
  );
};

export default Footer;