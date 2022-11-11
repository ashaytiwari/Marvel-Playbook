/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import { IApplicationCardProps } from 'interfaces/common';

import styles from './ApplicationCard.module.scss';

const ApplicationCard: React.FC<IApplicationCardProps> = (props) => {

  const { imagePath, title, onClick } = props;

  const applicationCardAttributes = {
    className: styles.applicationCardMain,
    onClick
  };

  const cardImageAttributes = {
    src: imagePath,
    className: styles.cardImage
  };

  return (
    <div {...applicationCardAttributes}>

      <div className={styles.imageContainer}>
        <img {...cardImageAttributes} alt='marvel-characters-image' />
      </div>

      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>{title}</h4>
      </div>

    </div>
  );

};

export default ApplicationCard;