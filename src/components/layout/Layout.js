import React from "react";

import SideBar from "./SideBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

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
    </>
  );
};

export default Layout;
