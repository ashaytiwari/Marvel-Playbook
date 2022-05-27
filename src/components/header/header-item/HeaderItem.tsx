import React from 'react';

import { Link } from 'react-router-dom';

import { IHeaderItemProps } from 'interfaces/header';

import styles from './HeaderItem.module.scss';

const HeaderItem: React.FC<IHeaderItemProps> = (props) => {

  const { data } = props;

  const headerItemAttributes = {
    to: data.url,
    className: styles.headerItem
  };

  return <Link {...headerItemAttributes}>{data.title}</Link>;
  
};

export default HeaderItem;