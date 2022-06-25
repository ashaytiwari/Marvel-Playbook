import React, { useEffect } from 'react';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { setSampleData } from 'redux/slices/sample.slice';
import { getSampleData } from 'services';

import styles from './Characters.module.scss';
import { useAppSelector } from 'hooks/useAppSelector';

const Characters = () => {

  const dispatch = useAppDispatch();
  const sampleData = useAppSelector((state) => state.sample.data);

  console.log(sampleData);

  useEffect(() => {
    getSampleData().then((data) => {
      dispatch(setSampleData(data.data));
    });
  }, [dispatch]);

  return (
    <div className={styles.charactersMain}>
      <h5 className={styles.charactersTitle}>Characters</h5>

    </div>
  );
};

export default Characters;