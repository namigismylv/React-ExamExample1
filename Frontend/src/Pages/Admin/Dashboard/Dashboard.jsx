import React, { useContext } from "react";
import MainContext from "../../../Context/Context";
import Table from "../../../Components/Admin/Table/Table";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const { data } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Table items={data} />
    </>
  );
};

export default Dashboard;
