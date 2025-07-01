import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
