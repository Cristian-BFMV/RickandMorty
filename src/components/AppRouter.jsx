import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import CharacterDetail from '../pages/CharacterDetail';
import CharacterList from '../pages/CharacterList';
import Home from './Home';
import Navbar from './Navbar';

const AppRouter = () => (
  <div className="container">
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
          <CharacterDetail />
        </Route>
      </Switch>
    </main>
  </div>
);

export default AppRouter;
