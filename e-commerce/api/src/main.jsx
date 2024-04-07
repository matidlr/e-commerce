import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
// 
// 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain='dev-6nn0jpj28fnynxns.us.auth0.com'
  clientId='vfpeFtWh8GRGWWlR7gl4ybT2OTp4Jh5R'
  authorizationParams={{
    redirect_uri: `${window.location.origin}/cart`,
  }}>
<ProductsProvider>
  <FilterProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </FilterProvider>
</ProductsProvider>
</Auth0Provider>
);
