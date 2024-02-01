import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// import "./index.css";

export default function Sidenav() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* <!-- Brand Logo --> */}
      <NavLink to={"/"} className={"brand-link"}>
        <img
          src="/images/admin-lte-logo.webp"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </NavLink>

      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        {/* <!-- Sidebar user (optional) --> */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
          <div className="image">
            <img
              src="/images/user2.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            {/* <Button className="d-block btn-secondary">Alexander Pierce</Button> */}
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        {/* <!-- SidebarSearch Form --> */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fa fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2">
          <Nav
            className="nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          > */}

            <li className="nav-item">
              <a href={"#"} className={"nav-link"}>
                <i className="fa fa-tachometer nav-icon"></i>
                <p>
                  Dashboard
                  <i className="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/dashboard-v1"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Dashboard v1</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/dashboard-v2"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Dashboard v2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/dashboard-v3"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Dashboard v3</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to={"/widget"} className={"nav-link"}>
                <i className="nav-icon fa fa-th"></i>
                <p>
                  Widgets
                  <span className="right badge badge-danger">New</span>
                </p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-copy"></i>
                <p>
                  Layout Options
                  <i className="fa fa-angle-left right"></i>
                  <span className="badge badge-info right">3</span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/pages/layout/top-nav"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/pages/layout/top-nav-and-sidebar"}
                    className={"nav-link"}
                  >
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Top Navigation + Sidebar</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/pages/layout/boxed"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to={"/fixed"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Fixed Sidebar</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/fixed-custom"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>
                      Fixed Sidebar <small>+ Custom Area</small>
                    </p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/fixed-nav"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Fixed Navbar</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/fixed-footer"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Fixed Footer</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/collapsed-sidebar"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className="nav-item">
              <a href="/#" className={"nav-link"}>
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i className="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/charts/chartjs"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>ChartJS</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/charts/flot"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Flot</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/inline"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Inline</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/uplot"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>uPlot</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-tree"></i>
                <p>
                  UI Elements
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/ui/general"} className="nav-link">
                    <i className="fa fa-circle nav-icon"></i>
                    <p>General</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/ui/icons"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Icons</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"ui/buttons"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Buttons</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/ui/sliders"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Sliders</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/ui/model-alerts"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Modals & Alerts</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/ui/navbar-tabs"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Navbar & Tabs</p>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Timeline</p>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to={"/ui/ribbons"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Ribbons</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-edit"></i>
                <p>
                  Forms
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/forms/general"} className="nav-link">
                    <i className="fa fa-circle nav-icon"></i>
                    <p>General Elements</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/forms/advanced"} className="nav-link">
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Advanced Elements</p>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Editors</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Validation</p>
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className="nav-item">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-table"></i>
                <p>
                  Tables
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/tables/simple"} className="nav-link">
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Simple Tables</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/tables/data-table"} className="nav-link">
                    <i className="fa fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-header">EXAMPLES</li>
            <li className="nav-item">
              <NavLink to={"/calender"} className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>
                  Calendar
                  <span className="badge badge-info right">2</span>
                </p>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to={"/gallery"} className={"nav-link"}>
                <i className="nav-icon fa fa-image"></i>
                <p>Gallery</p>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to={"/pages/kanban-board"} className={"nav-link"}>
                <i className="nav-icon fa fa-columns"></i>
                <p>Kanban Board</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-envelope"></i>
                <p>
                  Mailbox
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/mailbox"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Inbox</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/mail/compose"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Compose</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/mail/read-mail"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Read</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-book"></i>
                <p>
                  Pages
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Invoice</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Profile</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>E-commerce</p>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    to={"/pages/example/project-table"}
                    className={"nav-link"}
                  >
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Projects</p>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Project Add</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Project Edit</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Project Detail</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Contacts</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>FAQ</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Contact us</p>
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li className="nav-item menu-open">
              <a href={"#"} className={"nav-link"}>
                <i className="nav-icon fa fa-plus-square"></i>
                <p>
                  Extras
                  <i className="fa fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href={"#"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>
                      Login & Register v1
                      <i className="fa fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to={"/pages/log-in-v1"} className="nav-link">
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Login v1</p>
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Register v1</p>
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Forgot Password v1</p>
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Recover Password v1</p>
                      </NavLink>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <a href={"#"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>
                      Login & Register v2
                      <i className="fa fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/pages/log-in-v2" className="nav-link">
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Login v2</p>
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Register v2</p>
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Forgot Password v2</p>
                      </NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-circle nav-icon"></i>
                        <p>Recover Password v2</p>
                      </NavLink>
                    </li> */}
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Lockscreen</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Legacy User Menu</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Language Menu</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Error 404</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Error 500</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Pace</p>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Blank Page</p>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to={"/starter-page"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Starter Page</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-search"></i>
                <p>
                  Search
                  <i className="fa fa-angle-left right"></i>
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Simple Search</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Enhanced</p>
                  </NavLink>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-header">MISCELLANEOUS</li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-ellipsis-h"></i>
                <p>Tabbed IFrame Plugin</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-file"></i>
                <p>Documentation</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-header">MULTI LEVEL EXAMPLE</li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="fa fa-circle nav-icon"></i>
                <p>Level 1</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-circle"></i>
                <p>
                  Level 1<i className="right fa fa-angle-left"></i>
                </p>
              </NavLink>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>
                      Level 2<i className="right fa fa-angle-left"></i>
                    </p>
                  </NavLink>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/"} className={"nav-link"}>
                        <i className="fa fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to={"/"} className={"nav-link"}>
                    <i className="fa fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </NavLink>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="fa fa-circle nav-icon"></i>
                <p>Level 1</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-header">LABELS</li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-circle text-danger"></i>
                <p className="text">Important</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-circle text-warning"></i>
                <p>Warning</p>
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to={"/"} className={"nav-link"}>
                <i className="nav-icon fa fa-circle text-info"></i>
                <p>Informational</p>
              </NavLink>
            </li> */}
            {/* </ul> */}
          </Nav>
        </nav>
      </div>
    </aside>
  );
}
