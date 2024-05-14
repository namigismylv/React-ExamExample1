import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import axios from "axios";
import MainContext from "./Context/context";

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData([...res.data]);
    });
  }, []);
  const contextData = {
    data,
    setData,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
