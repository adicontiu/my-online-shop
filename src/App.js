import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => (
    <div>
      <h1>HATS</h1>
    </div>
);

function App() {
  return (
      <div>
        <Switch>
          <Route path="/shop/hats" component={HatsPage}/>
          <Route path="/" component={Homepage}/>
        </Switch>
      </div>
  );
}

export default App;
