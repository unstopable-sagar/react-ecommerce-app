import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const CardContainer = () => {
    const [products, setProducts] = useState([])
    const [displayLimit, setDisplayLimit] = useState(8)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products`)
                setProducts(res.data)
            }
            catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map(item => <Card item={item} key={item.id} />).reverse().slice(0, displayLimit)}
                    {products.length > displayLimit ? (
                        <div className="container mt-2">
                            <div className="row d-flex justify-content-center">
                                <button className="btn btn-warning" onClick={() => setDisplayLimit(d => d + 4)}>Load more</button>
                            </div>
                        </div>
                    ) : (null)}
                </div>
            </div>
        </>
    )
}

export default CardContainer