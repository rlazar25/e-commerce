import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// PAGES
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  // APP ROUTER
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage /> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
