import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';

import { IHomeComicsSectionProps } from 'interfaces/home';

import { createImageURL } from 'utilities';

import HomeSectionSkeleton from 'components/generics/skeleton-loaders/home-section-skeleton/HomeSectionSkeleton';
import ApplicationCard from 'components/generics/application-card/ApplicationCard';

import styles from './ComicsList.module.scss';

const ComicsList: React.FC<IHomeComicsSectionProps> = (props) => {

  const { loading } = props;

  const comics = useAppSelector((state) => state.application.comics);

  function renderComics(comic: any) {

    const thumbnail = comic.thumbnail;
    const imagePath = createImageURL(thumbnail.path, thumbnail.extension);

    const applicationCardAttributes = {
      imagePath,
      title: comic.title,
      key: comic.id,
      onClick() { }
    };

    return <ApplicationCard {...applicationCardAttributes} />;

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