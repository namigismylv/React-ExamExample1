import React from "react";
import "./BasketItems.css";
import BasketItem from "../BasketItem/BasketItem";
const BasketItems = ({ basketItems }) => {
  return (
    <table className="table table-dark mt-5 mb-5">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">add</th>
          <th scope="col">TotalPrice</th>
          <th scope="col">delete</th>
        </tr>
      </thead>
      <tbody>
        {basketItems.map((basketItem, index) => {
          return (
            <BasketItem basketItem={basketItem} key={index} index={index} />
          );
        })}
      </tbody>
    </table>
  );
};

export default BasketItems;
