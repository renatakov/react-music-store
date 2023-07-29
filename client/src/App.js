import Header from "./redux/SearchContainer";
import Footer from "./Components/Footer/Footer"
import React from 'react';
import Login from "./redux/LoginContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from "./Components/AboutUs/AboutUs";
import AuthorizationContainer from "./redux/AuthorizationContainer";
import ProductsContainer from "./redux/ProductsContainer";
import Cart from "./redux/CartContainer.js"
import Wishlist from "./redux/WishlistContainer"
import BillingDetails from "./redux/BillingDetailsContainer";
import Contact from "./Components/Contact/Contact";
const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Header />
    <Routes>
        <Route path="/" element={
            <ProductsContainer/>}
        />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/signup" element={<AuthorizationContainer/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/billing-details" element={<BillingDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
