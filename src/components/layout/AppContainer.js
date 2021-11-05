import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const AppContainer = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AppContainer;
