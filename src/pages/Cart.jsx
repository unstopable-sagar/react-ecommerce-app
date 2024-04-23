import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa";

const Cart = () => {
    const [items, setItems] = useState([])

    const totalItems = items?.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    const totalPrice = items?.reduce((acc, item) => {
        return item.price * item.quantity + acc
    }, 0).toFixed(2)

    const addQuantity = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setItems(updatedItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    }
    const subQuantity = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setItems(updatedItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    }
    const removeItem = (id, product) => {
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const filteredItems = items.filter(item => item.id != id)
            localStorage.setItem('cartItems', JSON.stringify(filteredItems))
            setItems(filteredItems)
            toast.success(`${product} is removed from cart`)
        }
    }

    useEffect(() => {
        const data = localStorage.getItem('cartItems')
        const cartData = JSON.parse(data)
        setItems(cartData)
    }, [])

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container mb-3">
                <div className="row d-flex justify-content-between my-4">
                    {items?.length === 0 ?
                        <h2 className='text-danger text-center my-3'>Your cart is empty.<Link to='/react-ecommerce-app/products' className='btn btn-success mx-2'>Add items</Link></h2>
                        : <>
                            <h2 className='text-center'>Your cart items</h2>
                            <div className="col-md-8 shadow my-cart-details">
                                {items?.map(item => (
                                    <Fragment key={item.id}>
                                        <hr />
                                        <div className="row d-flex align-items-center my-cart-items-container">
                                            <div className='col-8'>
                                                <div className="col-2">
                                                    <img src={item.image} alt={item.title} width={50} />
                                                </div>
                                                <div className="col-10">
                                                    <strong>{item.title}</strong>
                                                </div>
                                                <div className="col-1 text-warning">
                                                    ${item.price}
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex my-cart-items-counter ">
                                                    <button className='btn btn-danger px-2' onClick={() => subQuantity(item.id)}>-</button>
                                                    &nbsp;
                                                    <input type="number" value={item.quantity} readOnly className='form-control border-0 text-center fw-bold cart-items-input' />
                                                    &nbsp;
                                                    <button className='btn btn-primary px-2' onClick={() => addQuantity(item.id)}>+</button>
                                                    <button className='btn btn-danger px-1' onClick={() => removeItem(item.id, item.title)}>{<FaTrash />}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            <div className="col-md-3">
                                <div className="shadow p-2">
                                    <h5>Cart summary</h5>
                                    <hr />
                                    <p><strong>Units:</strong>{totalItems}</p>
                                    <p><strong>Total:</strong>${totalPrice}</p>
                                    <hr />
                                    <button className='btn btn-warning'>Checkout</button>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default Cart