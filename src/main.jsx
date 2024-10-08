import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// PAGES
import HomePage from './pages/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import FavoritePage from './pages/FavoritePage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
// REDUX
import { Provider } from 'react-redux';
import store from './store/store.js';
// CLERK
import { ClerkProvider } from '@clerk/clerk-react';
import ErrorPage from './pages/ErrorPage.jsx';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  // APP ROUTER
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProductPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/favorite',
        element: <FavoritePage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </React.StrictMode>,
);
