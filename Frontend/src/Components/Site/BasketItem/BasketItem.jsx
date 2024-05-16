import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'

const BasketItem = ({basketItem,index}) => {
  const {addToBasket,deleteFromBasket}=useContext(MainContext)
  return (
    <>
      <tr>
      <th scope="row">{index+1}</th>
      <td><img src={basketItem.item.image} width="60px" alt="" /></td>
      <td>{basketItem.item.title}</td>
      <td>{basketItem.item.price}</td>
      <td>{basketItem.count}</td>
      <td><button className='btn btn-primary' onClick={()=>addToBasket(basketItem.item)}>add</button></td>
      <td>{basketItem.totalPrice}</td>
      <td><button className='btn btn-danger' onClick={()=>deleteFromBasket(basketItem.item)}>delete</button></td>
    </tr>
    </>
  )
}

export default BasketItem
