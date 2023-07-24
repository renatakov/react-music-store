import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import React, { createContext } from 'react';
import Login from "./redux/LoginContainer";
import product1 from "./images/products/g92-2-500x500 1.png";
import product2 from "./images/products/ak-900-01-500x500 1.png";
import product3 from "./images/products/g27cq4-500x500 1.png";
import product4 from "./images/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
import product5 from "./images/products/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png";
import product6 from "./images/products/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import product7 from "./images/products/gammaxx-l240-argb-1-500x500 1.png";
import product8 from "./images/products/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png";
import product9 from "./images/products/71RdoeXxtrL 1.png";
import product10 from "./images/products/eos-250d-03-500x500 1.png";
import product11 from "./images/products/ideapad-gaming-3i-01-500x500 1.png";
import product12 from "./images/products/curology-j7pKVQrTUsM-unsplash 1.png";
import product13 from "./images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import product14 from "./images/products/Copa_Sense 1.png";
import product15 from "./images/products/GP11_PRD3 1.png";
import product16 from "./images/products/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from "./Components/AboutUs/AboutUs";
import AuthorizationContainer from "./redux/AuthorizationContainer";
import ProductsContainer from "./redux/ProductsContainer";
import Cart from "./redux/CartContainer.js"
import Wishlist from "./redux/WishlistContainer"
import BillingDetails from "./Components/BillingDetails/BillingDetails";

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
