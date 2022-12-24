import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import messages from 'messages';
import { getCharacters } from 'services';

import { setCharacters } from 'redux/slices/application.slice';

import SearchField from 'components/generics/search-field/SearchField';

import styles from './Characters.module.scss';

function Characters() {

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {

    loadCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadCharacters() {

    try {

      setLoading(true);

      const response = await getCharacters(30, 0);

      const characters: [] = response.data.data.results;

      dispatch(setCharacters(characters));

      setLoading(false);

    } catch (exception) {

      setLoading(false);
      enqueueSnackbar(messages.somethingWentWrong, { variant: 'error' });

    }

  }

  function handleSearch(value: string) {
    console.log(value, 'search');
  }

  function renderCharactersBanner() {

    return (
      <div className={styles.charactersBanner}>
        <h1 className={styles.charactersHeading}>Marvel Characters</h1>
        <label className={styles.charactersLabel}>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</label>
      </div>
    );

  }

  function renderCharactersContent() {

    return (
      <div className={styles.charactersContent}>
        <div className={styles.searchFieldContainer}>
          <SearchField onSearch={handleSearch} />
        </div>
      </div>
    );

  }

  return (
    <div id={styles.charactersMain}>
      {renderCharactersBanner()}
      {renderCharactersContent()}
    </div>
  );

}

export default Characters;