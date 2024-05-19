import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import MainContext from "../../../Context/Context";
import './Detail.css'
const Detail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      setItem(res.data);
      
    });
  }, [id]);
  const { addToBasket } = useContext(MainContext);

  return (
    <>
    <Helmet>
        <title>{item.title}</title>
    </Helmet>
      <div className="container">
        <div className="row" id="detailRow">
          <div className="col-6 imgCol">
            <div className="detail__img">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="col-6 titleCol">
            <div className="detail__title">
            <h1>{item.title}</h1>
            <p>Price:${item.price}</p>
            <button className="btn btn-primary" onClick={() => addToBasket(item)}>
          Add To Basket
        </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
