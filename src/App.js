import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import './pages/homepage/homepage.styles.scss';

const HatsPage = () => (
  <div>HATS PAGE</div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
