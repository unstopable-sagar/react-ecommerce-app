import React from 'react'
import CardContainer from '../components/CardContainer'
import { Helmet } from 'react-helmet'

const Products = () => {
  return (
    <>
    <Helmet>
      <title>All products</title>
    </Helmet>
    <CardContainer/>
    </>
  )
}

export default Products