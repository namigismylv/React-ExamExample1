import {} from "react";
import SiteRoot from "../Pages/Site/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Basket from "../Pages/Site/Basket/Basket";
import Add from "../Pages/Admin/Add/Add";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path:"add",
        element:<Add/>
      }
    ],
  },
];
export default ROUTES;
