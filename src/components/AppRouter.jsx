import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import CharacterList from '../pages/CharacterList';
import Home from './Home';
import Navbar from './Navbar';

const AppRouter = () => {
  return (
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
        </Switch>
      </main>
    </div>
  );
};

export default AppRouter;
