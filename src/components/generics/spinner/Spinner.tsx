import React from 'react';

import { ISpinnerProps } from 'interfaces/common';

import styles from './Spinner.module.scss';

const Spinner: React.FC<ISpinnerProps> = (props) => {

  const { fullscreen } = props;

  function renderSpinner() {

    if (fullscreen === true) {

      return (
        <div className={styles.spinnerFullScreenContainer}>
          <div className={styles.spinner}></div>
        </div>
      );

    }

    return (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    );

  }

  return (
    <div className={styles.spinnerMain}>
      {renderSpinner()}
    </div>
  );

};

export default Spinner;