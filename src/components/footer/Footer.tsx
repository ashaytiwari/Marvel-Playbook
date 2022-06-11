import React from 'react';

import { Grid } from '@mui/material';

import MLogo from 'assets/images/logo.png';

import styles from './Footer.module.scss';
import FooterExternalControls from './footer-external-controls/FooterExternalControls';

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

  return (
    <div className={styles.footerMain}>
      <Grid {...gridContainerAttributes}>
        {renderLogoGridContainer()}
        <Grid {...gridItemAttributes}>
          <FooterExternalControls />
        </Grid>
        <Grid {...gridItemAttributes}></Grid>
        <Grid {...gridItemAttributes}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;