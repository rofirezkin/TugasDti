import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import Routes from './config/route';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {Routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
