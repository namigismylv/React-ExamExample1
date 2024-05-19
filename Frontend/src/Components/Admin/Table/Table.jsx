import React from 'react'
import './Table.css'
import TableItem from '../TableItem/TableItem'
const Table = ({items}) => {
  return (
    <>
      <table class="table table-dark table-striped mt-5 mb-5">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">delete</th>
      
    </tr>
  </thead>
  <tbody>
    {
        items.map((item,index)=>{
            return(
                <TableItem item={item} key={index}/>
            )
        })
    }
  </tbody>
</table>
    </>
  )
}

export default Table
