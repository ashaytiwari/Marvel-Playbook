import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { IHeaderItem } from 'interfaces/header';

import HeaderItem from './header-item/HeaderItem';
import HeaderSidebarDrawer from './header-sidebar-drawer/HeaderSidebarDrawer';

import MarvelLogo from 'assets/images/marvel-logo.png';
import headerContent from 'assets/data/header-content';

import styles from './Header.module.scss';

const Header = () => {

  const [displayMobileDrawer, setDisplayMobileDrawer] = useState<boolean>(false);

  function handleMobileDrawerToggle() {

    setDisplayMobileDrawer((_displayMobileDrawer) => !_displayMobileDrawer);

  }

  const logoLinkAttributes = {
    to: '/',
    className: styles.logoLink
  };

  const logoAttributes = {
    src: MarvelLogo,
    className: styles.headerLogo
  };

  function renderHeaderItem(data: IHeaderItem, index: number) {

    const headerItemAttributes = {
      data: data,
      key: index
    };

    return <HeaderItem {...headerItemAttributes} />;

  }

  function renderHeaderMain() {

    return (
      <div className={styles.headerMain}>

        <Link {...logoLinkAttributes}>
          <img {...logoAttributes} alt="header-logo" />
        </Link>

        <div className={styles.headerBody}>
          {
            headerContent.map((header: IHeaderItem, index: number) => (
              renderHeaderItem(header, index)
            ))
          }
        </div>

      </div>
    );
  }

  function renderMobileHeader() {

    const mobileHeaderControlAttributes = {
      className: styles.mobileHeaderControl,
      onClick() {
        handleMobileDrawerToggle();
      }
    };

    const headerSidebarDrawerAttributes = {
      open: displayMobileDrawer,
      onClose() {
        setDisplayMobileDrawer(false);
      }
    };

    return (
      <div className={styles.mobileHeaderMain}>

        <Link {...logoLinkAttributes}>
          <img {...logoAttributes} alt="header-logo" />
        </Link>

        <div className={styles.mobileHeaderBody}>
          <IconButton {...mobileHeaderControlAttributes}>
            <MenuIcon />
          </IconButton>
        </div>

        <HeaderSidebarDrawer {...headerSidebarDrawerAttributes} />

      </div>
    );
  }

  return (
    <>

      {renderHeaderMain()}

      {renderMobileHeader()}

    </>
  );
};

export default Header;