import React from 'react';

import { IFooterMarvelFeatureControlItem } from 'interfaces/footer';

import marvelFeatureControl from 'assets/data/footer-marvel-feature-control';

import styles from './MarvelFeatureControl.module.scss';

const MarvelFeatureControl = () => {

  function handleMarvelFeatureItemClick(url: string) {

    window.open(url, '_blank');

  }

  function renderMarvelFeatureItem(data: IFooterMarvelFeatureControlItem, index: number) {

    const marvelFeatureItemContainerAttributes = {
      className: styles.marvelFeatureItemContainer,
      key: index,
      onClick() {
        handleMarvelFeatureItemClick(data.url);
      }
    };

    const marvelFeatureItemImageAttributes = {
      className: styles.marvelFeatureItemImage,
      src: data.imagePath
    };

    return (
      <div {...marvelFeatureItemContainerAttributes}>

        <div className={styles.marvelFeatureImageContainer}>
          <img {...marvelFeatureItemImageAttributes} alt="marvel-feature-item" />
        </div>

        <div className={styles.marvelFeatureItemContent}>
          <label>{data.title}</label>
          <span>{data.description}</span>
        </div>

      </div>
    );
  }

  return (
    <div className={styles.footerMarvelInsiderMain}>
      {
        marvelFeatureControl.map((data: IFooterMarvelFeatureControlItem, index: number) => (
          renderMarvelFeatureItem(data, index)
        ))
      }
    </div>
  );
};

export default MarvelFeatureControl;