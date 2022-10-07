import React, { useRef } from 'react';

import { SnackbarProvider } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

import { IToastMessageProps } from 'interfaces/common';

import styles from './ToastMessage.module.scss';

const ToastMessage: React.FC<IToastMessageProps> = (props) => {

  const snackbarReference = useRef(null);

  function handleSnackbarCloseControlClick(key: any) {

    const element: any = snackbarReference.current;

    if (element === null) {
      return;
    }

    element.closeSnackbar();

  };

  function renderSnackbarCloseControl(key: any) {

    const closeButtonAttributes = {
      className: styles.closeButtonControl,
      onClick() {
        handleSnackbarCloseControlClick(key);
      }
    };

    return (
      <button {...closeButtonAttributes}>
        <CloseIcon className={styles.closeIcon} />
      </button>
    );

  }

  const snackbarProviderProperties = {
    preventDuplicate: true,
    autoHideDuration: 3000,
    maxSnack: 3,
    action: renderSnackbarCloseControl,
    ref: snackbarReference
  };

  return (
    <SnackbarProvider {...snackbarProviderProperties} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      {props.children}
    </SnackbarProvider>
  );

};

export default ToastMessage;