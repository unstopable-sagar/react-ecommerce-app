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
                // const productData=res.data
                // const categories=[]
                // const categoryProduct=[]
                // productData.forEach(product=>{
                //     if (categories.includes(product.category)) return null;
                //     else{
                //         categories.push(product.category)
                //         categoryProduct.push(product)
                //     }
                // })               
                // console.log(categories)
                // console.log(categoryProduct)
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
                <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4">
                    {products.map(item => <Card item={item} key={item.id} />).reverse().slice(0, displayLimit)}
                    {products.length > displayLimit ? (
                        <div className="container mt-2">
                            <div className="row d-flex justify-content-center">
                                <button className="btn btn-warning load-more" onClick={() => setDisplayLimit(d => d + 4)}>Load more</button>
                            </div>
                        </div>
                    ) : (null)}
                </div>
            </div>
        </>
    )
}

export default CardContainer