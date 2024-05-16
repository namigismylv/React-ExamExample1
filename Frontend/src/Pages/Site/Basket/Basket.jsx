import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import BasketItems from '../../../Components/Site/BasketItems/BasketItems'

const Basket = () => {
  const {basketItems} =useContext(MainContext)
  return (
    <>
    <BasketItems basketItems={basketItems}/>
    </>
  )
}

export default Basket
