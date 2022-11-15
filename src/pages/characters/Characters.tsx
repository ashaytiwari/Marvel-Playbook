import React from 'react';

import styles from './Characters.module.scss';

function Characters() {

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