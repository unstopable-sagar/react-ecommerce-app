import React from 'react'
import Carousel from '../components/Carousel'
import CardContainer from '../components/CardContainer'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Ecommerce - Homepage</title>
    </Helmet>
    <Carousel/>
    <CardContainer/>
    </>
  )
}

export default HomePage