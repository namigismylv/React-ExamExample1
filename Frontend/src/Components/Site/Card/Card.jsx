import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-img">
          <Link to={`/detail/${item._id}`} className="text-decoration-none">
            <img src={item.image} alt="" />
          </Link>
        </div>
        <h5>{item.title}</h5>
        <h3>${item.price}</h3>
        
      </div>
    </div>
  );
};

export default Card;
