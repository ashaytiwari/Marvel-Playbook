import React, { useEffect } from 'react';

import { getSampleData } from 'services';

import styles from './Characters.module.scss';

const Characters = () => {

  useEffect(() => {
    getSampleData();
  }, []);

  return (
    <div className={styles.charactersMain}>
      <h5 className={styles.charactersTitle}>Characters</h5>

    </div>
  );
};

export default Characters;