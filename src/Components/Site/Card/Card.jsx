import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../Context/Context'

const Card = ({item}) => {
    const {addToBasket}=useContext(MainContext)
  return (
    <div className="col-3">
        <div className="card">
            <img src={item.image}  alt="" />
            <h5>{item.title}</h5>
            <h3>${item.price}</h3>
            <button className='btn btn-primary' onClick={()=>addToBasket(item)}>Add To Basket</button>
            <Link to='detail/id' className='text-decoration-none'> Go to Detail</Link>

        </div>
    </div>
  )
}

export default Card
