import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';

function App() {
  return (
    <>
      <Header />
      <section>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/product" component={ProductDetails} />
        </Switch>
      </section>
    </>
  );
}

export default App;
