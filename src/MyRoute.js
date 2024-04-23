import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export const MyRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/react-ecommerce-app' element={<Layout />}>
            <Route index element={<HomePage/>}/>
            <Route path='/react-ecommerce-app/productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='/react-ecommerce-app/cart' element={<Cart/>}/>
            <Route path='/react-ecommerce-app/products' element={<Products/>}/>
            <Route path='/react-ecommerce-app/register' element={<Register/>}/>
            <Route path='/react-ecommerce-app/login' element={<Login/>}/>
          </Route>
          <Route path='/react-ecommerce-app/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

