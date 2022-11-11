import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';

import { IHomeCharacterSectionProps } from 'interfaces/home';

import { createImageURL } from 'utilities';

import HomeSectionSkeleton from 'components/generics/skeleton-loaders/home-section-skeleton/HomeSectionSkeleton';
import ApplicationCard from 'components/generics/application-card/ApplicationCard';

import styles from './CharactersList.module.scss';

const CharactersList: React.FC<IHomeCharacterSectionProps> = (props) => {

  const { loading } = props;

  const characters = useAppSelector((state) => state.application.characters);

  function renderCharacter(character: any) {

    const thumbnail = character.thumbnail;
    const imagePath = createImageURL(thumbnail.path, thumbnail.extension);

    const applicationCardAttributes = {
      imagePath,
      title: character.name,
      key: character.id,
      onClick() { }
    };

    return <ApplicationCard {...applicationCardAttributes} />;

  }

  if (loading === true) {
    return <HomeSectionSkeleton />;
  }

  return (
    <div id={styles.charactersListMain}>
      {
        characters.map((character: any) => (
          renderCharacter(character)
        ))
      }
    </div>
  );

};

export default CharactersList;