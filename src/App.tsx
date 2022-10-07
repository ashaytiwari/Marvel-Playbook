import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ToastMessage from 'components/generics/toast-message/ToastMessage';

import Home from 'pages/home/Home';

import './App.scss';

function App() {

  return (
    <div>
      <ToastMessage>
        <Router>

          <Header />
          <Routes>
            <Route path={'/'} element={<Home />} />
          </Routes>
          <Footer />

        </Router>
      </ToastMessage>
    </div>
  );
}

export default App;
