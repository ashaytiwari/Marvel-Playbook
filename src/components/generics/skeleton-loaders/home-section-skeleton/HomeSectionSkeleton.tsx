import React from 'react';

import { Skeleton } from '@mui/material';

import styles from './HomeSectionSkeleton.module.scss';

function HomeSectionSkeleton() {

  const sections = [1, 2, 3, 4, 5];

  function renderSkeleton(index: number) {

    const skeletonAttributes = {
      className: styles.homeSkeletonItem,
      key: index,
      height: 200
    };

    return <Skeleton {...skeletonAttributes} animation='wave' />;

  }

  return (
    <div className={styles.homeSectionSkeletonMain}>
      {
        sections.map((item: any, index: number) => (
          renderSkeleton(index)
        ))
      }
    </div>
  );

}

export default HomeSectionSkeleton;