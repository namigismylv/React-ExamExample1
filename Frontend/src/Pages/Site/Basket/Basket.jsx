import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import BasketItems from '../../../Components/Site/BasketItems/BasketItems'
import { Helmet } from 'react-helmet'
const Basket = () => {
  const {basketItems} =useContext(MainContext)
  return (
    <>
    <Helmet>
    <title>Basket</title>
    </Helmet>
    <BasketItems basketItems={basketItems}/>
    </>
  )
}

export default Basket
