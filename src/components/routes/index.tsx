import React from 'react';
import { Switch, Route } from 'react-router';
import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';
import Locations from '../pages/Locations';
import WatchList from '../pages/WatchList';

const Routes = () => {
  return (
    <Switch>
      <Route path="/characters">
        <Characters />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/watch-list">
        <WatchList />
      </Route>
    </Switch>
  );
};

export default Routes;
