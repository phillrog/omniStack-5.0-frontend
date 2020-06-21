import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Timeline from './pages/Timeline';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/timeline" component={Timeline}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
