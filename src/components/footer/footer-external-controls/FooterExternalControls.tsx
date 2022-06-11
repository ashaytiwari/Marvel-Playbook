import React from 'react';

import { IFooterExternalControlItem } from 'interfaces/footer';

import footerExternalControls from 'assets/data/footer-external-controls';

import styles from './FooterExternalControls.module.scss';

const FooterExternalControls = () => {

  function renderFooterExternalControlItem(item: IFooterExternalControlItem, index: number) {

    const footerExternalControlAttributes = {
      href: item.url,
      className: styles.footerExternalControl,
      target: '_blank',
      key: index
    };

    return (
      <a {...footerExternalControlAttributes}>{item.title}</a>
    );
  }

  return (
    <div className={styles.footerExternalControlsMain}>
      {
        footerExternalControls.map((item: IFooterExternalControlItem, index: number) => (
          renderFooterExternalControlItem(item, index)
        ))
      }
    </div>
  );
};

export default FooterExternalControls;