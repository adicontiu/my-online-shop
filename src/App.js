import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";

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
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </div>
  );
}

export default App;
