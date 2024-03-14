import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    return (
        <>
            <div className="col">
                <div className="card shadow">
                    <img src={item.image} className="card-img-top" alt={item.title} height={350}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-text">${item.price}</h6>
                        <Link to={`/productdetails/${item.id}`} className="btn btn-success">View details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card