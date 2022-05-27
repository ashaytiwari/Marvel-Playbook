import React from 'react';

import { useNavigate } from 'react-router-dom';
import { IconButton, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { IHeaderItem, IHeaderSidebarDrawerProps } from 'interfaces/header';

import MarvelLogo from 'assets/images/marvel-logo.png';
import headerContent from 'assets/data/header-content';

import styles from './HeaderSidebarDrawer.module.scss';

const drawerWidth = 300;

const HeaderSidebarDrawer: React.FC<IHeaderSidebarDrawerProps> = (props) => {

  const { open, onClose } = props;

  const navigate = useNavigate();

  const container = window !== undefined ? () => window.document.body : undefined;

  function navigateTo(path: string) {
    onClose();
    navigate(path);
  }

  function renderDrawerHeader() {

    const logoAttributes = {
      src: MarvelLogo,
      className: styles.headerLogo
    };

    const closeControlAttributes = {
      className: styles.closeControl,
      onClick: onClose
    };

    return (
      <div className={styles.drawerHeader}>

        <img {...logoAttributes} alt={'logo'} />

        <IconButton {...closeControlAttributes}>
          <CloseIcon />
        </IconButton>

      </div>
    );
  }

  function renderSidebarItem(header: IHeaderItem, index: number) {

    const sidebarItemAttributes = {
      to: header.url,
      className: styles.sidebarItem,
      key: index,
      onClick() {
        navigateTo(header.url);
      }
    };

    return (
      <div {...sidebarItemAttributes}>
        <p>{header.title}</p>
      </div>
    );
  }

  function renderDrawerBody() {
    return (
      <div className={styles.drawerBody}>
        {
          headerContent.map((header: IHeaderItem, index: number) => (
            renderSidebarItem(header, index)
          ))
        }
      </div>
    );
  }

  const drawerAttributes = {
    container,
    open,
    onClose,
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    },
    sx: {
      display: { xs: "block", md: 'none' },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: drawerWidth,
        backgroundColor: '#202020'
      }
    },
    className: styles.drawer
  };

  return (
    <Drawer variant={'temporary'} {...drawerAttributes}>

      {renderDrawerHeader()}

      {renderDrawerBody()}

    </Drawer>
  );
};

export default HeaderSidebarDrawer;