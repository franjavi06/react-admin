import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";

const AppContainer = () => {
  const userRedux = useSelector((state) => state.user);
  return (
    <Layout>
      {!userRedux.id && <Navigate to="/login" replace={true} />}
      <Outlet />
    </Layout>
  );
};

export default AppContainer;
