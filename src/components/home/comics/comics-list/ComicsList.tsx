import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';

import { IHomeComicsSectionProps } from 'interfaces/home';

import { createImageURL } from 'utilities';

import HomeSectionSkeleton from 'components/generics/skeleton-loaders/home-section-skeleton/HomeSectionSkeleton';

import styles from './ComicsList.module.scss';

const ComicsList: React.FC<IHomeComicsSectionProps> = (props) => {

  const { loading } = props;

  const comics = useAppSelector((state) => state.application.comics);

  function renderComics(comic: any) {

    const thumbnail = comic.thumbnail;

    const comicItemAttributes = {
      className: styles.comicItem,
      key: comic.id
    };

    const comicImageAttributes = {
      src: createImageURL(thumbnail.path, thumbnail.extension),
      className: styles.comicImage
    };

    return (
      <div {...comicItemAttributes}>
        <div className={styles.comicImageContainer}>
          <img {...comicImageAttributes} alt='comic' />
        </div>
        <div className={styles.comicItemContent}>
          <h4 className={styles.comicName}>{comic.title}</h4>
        </div>
      </div>
    );

  }

  if (loading === true) {
    return <HomeSectionSkeleton />;
  }

  return (
    <div id={styles.comicsListMain}>
      {
        comics.map((comic: any) => (
          renderComics(comic)
        ))
      }
    </div>
  );

};

export default ComicsList;