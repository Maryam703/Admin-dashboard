import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Orders/Orders';
import Product from './components/Product/Product';
import Login from './components/Login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
    <Route path='' element={<Dashboard /> }/>
    <Route path='Orders' element={<Orders/>}/>
    <Route path='Product' element={<Product />}/>
    <Route path='Login' element={<Login/>}/>
    </Route>
    </>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);


