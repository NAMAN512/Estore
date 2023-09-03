import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';
import Cart from './components/Cart';
import Login from './components/Login';


function App() {
  return (
    <>
      <Header />
      <section style={{marginTop : 40}}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/productdetails" element={<ProductDetails />} />
          <Route exact path="/viewcart" element={<Cart />} />
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
