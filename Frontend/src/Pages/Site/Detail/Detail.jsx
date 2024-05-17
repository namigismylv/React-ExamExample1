import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
const Detail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setItem(res.data);
      
    });
  }, [id]);
  return (
    <>
    <Helmet>
        <title>{item.title}</title>
    </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="detail__img">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="col-6">
            <h1>{item.title}</h1>
            <p>Price:{item.price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
