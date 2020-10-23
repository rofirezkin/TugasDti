import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import Routes from './config/route';
import JSONData from './assets/dummy';

function App() {
  return (
    <JSONData.Provider value={JSONData.list}>
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
    </JSONData.Provider>
  );
}

export default App;
