import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartProvider/CartProvider';
import { UserProvider } from './user/UserProvider';
import { SearchProvider } from './components/SearchProvider/SearchProvider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <UserProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </UserProvider>
    </CartProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
