import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/cartContext';
import { WishlistProvider } from './component/wishlistContext';
import App from './App';
import './index.css';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);
