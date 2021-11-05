import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <NavLink to="/home" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Inicio</span>
        </NavLink>
      </li>

      {/* Nav Item - Charts */}
      <li className="nav-item">
        <NavLink to="/page" className="nav-link">
          <i className="fas fa-fw fa-chart-area" />
          <span>Page</span>
        </NavLink>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
};

export default SideBar;
