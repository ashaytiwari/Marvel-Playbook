import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/generics/spinner/Spinner';

const Home = React.lazy(() => import('pages/home/Home'));
const Characters = React.lazy(() => import('pages/characters/Characters'));

function RouteComponent() {

  function renderHomePageRoute() {

    const homePageRouteAttributes = {
      path: '/',
      element: <Home />
    };

    return <Route {...homePageRouteAttributes} />;

  }

  function renderCharactersPageRoute() {

    const charactersPageRouteAttributes = {
      path: '/characters',
      element: <Characters />
    };

    return <Route {...charactersPageRouteAttributes} />;

  }

  return (
    <Suspense fallback={<Spinner fullscreen={true} />}>
      <Routes>
        {renderHomePageRoute()}
        {renderCharactersPageRoute()}
      </Routes>
    </Suspense>
  );

}

export default RouteComponent;