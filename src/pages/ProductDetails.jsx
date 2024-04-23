import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { InfinitySpin } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const id = params.productId

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  const addToCart = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
      quantity: 1
  }

    // Ensure cartItems is an array
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }

    // check if item is already in the cart
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      toast.error('item is already in the cart')
    } else {
      cartItems.push(newItem)
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
      toast.success(`${product.title} is added to cart`)
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(res.data)
        setLoading(false)
      }
      catch (err) {
        console.log(err.message)
      }
    }
    setTimeout(() => {
      fetchProduct()
    }, 1000)
  })

  return (
    <>
    <ToastContainer theme='dark' position='top-center'/>
      <Helmet>
        <title>{product.title}</title>
      </Helmet>
      {loading ? (
        <div className="row d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="container-fluid my-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 product-details-img-container">
              <img src={product.image} className="card-img-top my-product-detail-img" alt={product.title}/>
            </div>
            <div className="col-md-6">
              <h5 className="card-title">{product.title}</h5>
              <h5 className="card-title">${product.price}</h5>
              <p>{product.description}</p>
              <p><small>Category: {product.category}</small></p>
              <p>{product.rating && product.rating.rate}</p>
              <div className="my-3">
                <button className="btn btn-warning" onClick={addToCart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails