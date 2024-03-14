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
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

