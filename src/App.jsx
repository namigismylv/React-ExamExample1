import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import axios from "axios";
import MainContext from "./Context/Context";
import './App.css'
function App() {
  const [data, setData] = useState([]);
  const [basketItems,setBasketItem]=useState(localStorage.getItem("basketItems")? JSON.parse(localStorage.getItem("basketItems")):[])
  const router = createBrowserRouter(ROUTES);
  useEffect(()=>{
    localStorage.setItem("basketItems",JSON.stringify(basketItems))
  },[basketItems])
 function addToBasket(item){
  const target=basketItems.find(x=>x.item.id==item.id)
  if(target){
    target.count+=1
    target.totalPrice+=item.price
    setBasketItem([...basketItems])
  }else{
    let newBasketItem={
      item:item,
      count:1,
      totalPrice:item.price
    }
    setBasketItem([...basketItems,newBasketItem])
  }
}
function deleteFromBasket(item){
  const target=basketItems.find(x=>x.item.id==item.id)
  if(target.count>1){
    target.count-=1
    target.totalPrice-=item.price
    setBasketItem([...basketItems])
  }
  else{
    setBasketItem([...basketItems.filter(x=>x.item.id != item.id)])
  }
}
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData([...res.data]);
    });
  }, []);
  const contextData = {
    data,
    setData,
    basketItems,
    setBasketItem,
    addToBasket,
    deleteFromBasket
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
