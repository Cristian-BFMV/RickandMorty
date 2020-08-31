import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//Components

import CharacterList from '../pages/CharacterList';
import Home from './Home';
import Navbar from './Navbar';
import Spinner from './Spinner';

const CharacterDetail = lazy(() => import('../pages/CharacterDetail'));

const AppRouter = () => (
  <>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/character/:id">
          <Suspense fallback={<Spinner />}>
            <CharacterDetail />
          </Suspense>
        </Route>
      </Switch>
    </main>
  </>
);

export default AppRouter;
