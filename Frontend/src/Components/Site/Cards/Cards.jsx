import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
const Cards = ({data}) => {
  return (
    <div className="container">
      <div className="row" id="#row">
        {
          data.map((item,index)=>{
            return(
              <Card key={index} item={item}/>

            )
          })
        }
      </div>
    </div>
  );
};

export default Cards;
