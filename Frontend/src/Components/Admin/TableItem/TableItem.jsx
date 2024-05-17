import React, { useContext } from "react";
import axios from "axios";
import MainContext from "../../../Context/Context";
const TableItem = ({ item }) => {
  const { data, setData } = useContext(MainContext);

  return (
    <tr>
      <th scope="row">{item._id}</th>
      <td>
        <img src={item.image} width="60px" height="60px" alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            axios
              .delete(`http://localhost:8080/products/${item._id}`)
              .then(res => {
                setData([...res.data]);
              });
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
