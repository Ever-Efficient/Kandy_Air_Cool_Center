import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import SearchPage from './pages/searchPage';
import Services from './pages/services';
import ProductDetails from './pages/productDetails';
import Sale from './pages/sale';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/sale" element={<Sale />} />
    </Routes>
  );
}
