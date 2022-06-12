import React from 'react';

import { Grid } from '@mui/material';

import FooterExternalControls from './footer-external-controls/FooterExternalControls';
import MarvelFeatureControl from './footer-marvel-feature-controls/MarvelFeatureControl';
import MarvelSocialChannels from './footer-marvel-social-channels/MarvelSocialChannels';

import MLogo from 'assets/images/logo.png';

import styles from './Footer.module.scss';

const Footer = () => {

  const gridContainerAttributes = {
    container: true,
    spacing: 2,
    className: styles.gridContainer
  };

  function renderLogoGridContainer() {

    const gridItemAttributes = {
      item: true,
      xs: 12,
      md: 2,
      className: styles.centeredContainer
    };

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

    const gridItemAttributes = {
      item: true,
      xs: 12,
      md: 3,
      className: styles.centeredContainer
    };

    return (
      <Grid {...gridItemAttributes}>
        <FooterExternalControls />
      </Grid>
    );

  }

  function renderMarvelFeatureItem() {

    const gridItemAttributes = {
      item: true,
      xs: 12,
      md: 4,
      className: styles.centeredContainer
    };

    return (
      <Grid {...gridItemAttributes}>
        <MarvelFeatureControl />
      </Grid>
    );
  }

  function renderMarvelSocialChannel() {

    const gridItemAttributes = {
      item: true,
      xs: 12,
      md: 3,
      className: styles.centeredContainer
    };

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