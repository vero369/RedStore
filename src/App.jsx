import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Details from './Pages/Details';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import UserAccount from './Pages/UserAccount';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Men from './ComponentProducts/Men';
import Women from './ComponentProducts/Women';
import UniSex from './ComponentProducts/UniSex';
import Contacts from './ComponentDelivery/Contacts';
import Delivery from './ComponentDelivery/Delivery';
import Sign from './ComponentLogin/Sign';
import Pay from './ComponentLogin/Pay';

const App = () => {
  return (
    <div>
      <NavBar />
     
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/details' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/userAccount' element={<UserAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Men'  element={<Men />} />
        <Route path='/Women'  element={<Women/>} />
        <Route path='/Unisex'  element={<UniSex />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Delivery' element={<Delivery />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Pay' element={<Pay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;