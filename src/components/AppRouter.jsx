import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
const AppRouter = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default AppRouter;
