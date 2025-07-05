import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import SearchPage from './pages/searchPage';
import Services from './pages/services';
import ProductDetails from './pages/productDetails';
import Sale from './pages/sale';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Whishlist from './pages/wishlist';
import Login from './pages/login';
import SignUp from './pages/signup';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/sale" element={<Sale />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/wishlist' element={<Whishlist />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}
