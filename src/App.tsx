import React from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ToastMessage from 'components/generics/toast-message/ToastMessage';

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

function App() {

  return (
    <ToastMessage>
      <div id={styles.applicationMain}>
        <Header />
        <RouteComponent />
        <Footer />
      </div>
    </ToastMessage>
  );
}

export default App;
