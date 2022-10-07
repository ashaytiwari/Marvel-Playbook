import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { getCharacters } from 'services';
import messages from 'messages';

import { setCharacters } from 'redux/slices/application.slice';

import CharactersList from './characters-list/CharactersList';

import styles from './Characters.module.scss';

const Characters = () => {

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    initialize();

    return () => {
      unmountReduxState();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function unmountReduxState() {

    dispatch(setCharacters([]));

  }

  function initialize() {

    loadCharacters();

  }

  async function loadCharacters() {

    try {

      setLoading(true);

      const response = await getCharacters(5, 0);

      const characters: [] = response.data.data.results;

      dispatch(setCharacters(characters));

      setLoading(false);

    } catch (exception) {

      setLoading(false);
      enqueueSnackbar(messages.somethingWentWrong, { variant: 'error' });

    }

  }

  function renderCharacterSectionHeading() {

    const seeMoreControlAttributes = {
      to: '/characters',
      className: styles.seeMoreControl
    };

    return (
      <div className={styles.characterSectionHeader}>
        <h5 className={styles.charactersTitle}>Characters</h5>
        <Link {...seeMoreControlAttributes}>See more</Link>
      </div>
    );

  }

  return (
    <div className={styles.charactersMain}>
      {renderCharacterSectionHeading()}
      <CharactersList loading={loading} />
    </div>
  );
};

export default Characters;