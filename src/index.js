import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import Login_Signup_Provider from './contexts/Login_Signup_Context';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="biswarup-ghosh.jp.auth0.com"
    clientId="xZ9xwdSa5FhLlz7uzHirRGnSetONt60P"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <Login_Signup_Provider>
            <App />
          </Login_Signup_Provider>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </Auth0Provider>
);
