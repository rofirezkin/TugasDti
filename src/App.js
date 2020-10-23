import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './component/header';
import Routes from './config/route';

export const isiList = React.createContext({});
function App() {
  const [lists] = useState([
    {
      title: 'Location',
      description: 'Banten',
    },
    {
      title: 'Phone',
      description: '085771813299',
    },
    {
      title: 'Github',
      description: 'rofirezkin',
    },
    {
      title: 'Email',
      description: 'rofirezkin@gmail.com',
    },
  ]);

  return (
    <isiList.Provider value={{ lists }}>
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
    </isiList.Provider>
  );
}

export default App;
