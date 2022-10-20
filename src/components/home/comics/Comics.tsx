import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { getComics } from 'services';
import messages from 'messages';

import { setComics } from 'redux/slices/application.slice';

import ComicsList from './comics-list/ComicsList';

import styles from './Comics.module.scss';

const Comics = () => {

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

    dispatch(setComics([]));

  }

  function initialize() {

    loadCharacters();

  }

  async function loadCharacters() {

    try {

      setLoading(true);

      const response = await getComics(5, 0);

      const comics: [] = response.data.data.results;

      dispatch(setComics(comics));

      setLoading(false);

    } catch (exception) {

      setLoading(false);
      enqueueSnackbar(messages.somethingWentWrong, { variant: 'error' });

    }

  }

  function renderComicsSectionHeading() {

    const seeMoreControlAttributes = {
      to: '/comics',
      className: styles.seeMoreControl
    };

    return (
      <div className={styles.comicsSectionHeader}>
        <h5 className={styles.comicsTitle}>Comics</h5>
        <Link {...seeMoreControlAttributes}>See more</Link>
      </div>
    );

  }

  return (
    <div className={styles.comicsMain}>
      {renderComicsSectionHeading()}
      <ComicsList loading={loading} />
    </div>
  );
};

export default Comics;