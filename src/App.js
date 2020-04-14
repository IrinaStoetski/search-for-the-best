import React from 'react';
// Components
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
// Styles
import './styles/global-styles.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/* TO-DO Create detail page for repository */}
    </Switch>
  );
}

export default App;
