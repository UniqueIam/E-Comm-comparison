
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FirebaseProvider } from './context/Firebase';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Layout from './components/Layout';
import MyAccount from './components/MyAccount/MyAccount';
import Error from './components/Error/Error';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import FAQ from './components/FAQ/FAQ';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SingleProductPage from './components/SingleProductPage/SingleProductPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="myAccount" element={<MyAccount />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="products" element={<Products />}/>
      <Route path="products/:category" element={<ProductDetails />} />
      <Route path="products/:category/:id" element={<SingleProductPage />} />
      <Route path="*" element={<Error />} />
    </Route>

  )
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <FirebaseProvider>
  <RouterProvider router={router} />
  </FirebaseProvider>
  
  </React.StrictMode>,
)
