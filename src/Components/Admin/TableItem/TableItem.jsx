import React, { useContext } from "react";
import axios from "axios";
import MainContext from "../../../Context/Context";
const TableItem = ({ item }) => {
  const { data, setData } = useContext(MainContext);
  function deleteItem(id) {
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
        setData([...data.filter((x)=>x.id != res.data.id)])
    });
  }
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>
        <img src={item.image} width="60px" height="60px" alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>
        <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>delete</button>
      </td>
    </tr>
  );
};

export default TableItem;
