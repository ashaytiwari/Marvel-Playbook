import React from 'react';

import { useAppSelector } from 'hooks/useAppSelector';

import { IHomeCharacterSectionProps } from 'interfaces/home';

import { createImageURL } from 'utilities';

import HomeSectionSkeleton from 'components/generics/skeleton-loaders/home-section-skeleton/HomeSectionSkeleton';

import styles from './CharactersList.module.scss';

const CharactersList: React.FC<IHomeCharacterSectionProps> = (props) => {

  const { loading } = props;

  const characters = useAppSelector((state) => state.application.characters);

  function renderCharacter(character: any) {

    const thumbnail = character.thumbnail;

    const characterItemAttributes = {
      className: styles.characterItem,
      key: character.id
    };

    const characterAttributes = {
      src: createImageURL(thumbnail.path, thumbnail.extension),
      className: styles.characterImage
    };

    return (
      <div {...characterItemAttributes}>
        <div className={styles.characterImageContainer}>
          <img {...characterAttributes} alt='character' />
        </div>
        <div className={styles.characterItemContent}>
          <h4 className={styles.characterName}>{character.name}</h4>
        </div>
      </div>
    );

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