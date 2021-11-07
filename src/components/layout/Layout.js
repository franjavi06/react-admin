import React from "react";

import SideBar from "./SideBar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const Layout = (props) => {
  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">
        <SideBar />

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <TopBar />

            {/* Begin Page Content */}
            <div className="container-fluid">{props.children}</div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}

      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>

      <LogoutModal />
    </>
  );
};

export default Layout;
