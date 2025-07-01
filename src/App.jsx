import { Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/home';
import SearchPage from './pages/searchPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
