import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  InputGroup,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const TopNav = ({ withSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="main-header navbar-expand-md navbar-light navbar-white">
      <Container>
        <NavbarBrand href="/" className="navbar-brand">
          <img
            src="/images/admin-lte-logo.webp"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{
              opacity: ".8",
            }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggle}
          className="navbar-toggler order-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        {/* <button
          className="navbar-toggler order-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <Collapse
          isOpen={isOpen}
          navbar
          className="order-3"
          id="navbarCollapse"
        >
          {/* <div className="collapse navbar-collapse order-3" id="navbarCollapse"> */}

          <Nav className="me-auto" navbar>
            {/* <ul className="navbar-nav"> */}

            {withSidebar && (
              <NavItem className="nav-item">
                <a
                  className="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                >
                  <i className="fa fa-bars"></i>
                </a>
              </NavItem>
            )}

            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/" className="nav-link">
                Contact
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                id="dropdownSubMenu1"
                // href="/"
                // data-toggle="dropdown"
                // aria-haspopup="true"
                // aria-expanded="false"
                className="nav-link"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu className="border-0 shadow">
                <DropdownItem>
                  <NavLink to="/" className="dropdown-item">
                    Some action{" "}
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/" className="dropdown-item">
                    Some other action
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink to="/" className="dropdown-item">
                    Some other action
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <li className="nav-item dropdown">
              <a
                id="dropdownSubMenu1"
                href="/"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                Dropdown
              </a>
              <ul
                aria-labelledby="dropdownSubMenu1"
                className="dropdown-menu border-0 shadow"
              >
                <li>
                  <NavLink to="/" className="dropdown-item">
                    Some action{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="dropdown-item">
                    Some other action
                  </NavLink>
                </li>

                <li className="dropdown-divider"></li>

                <li className="dropdown-submenu dropdown-hover">
                  <NavLink
                    id="dropdownSubMenu2"
                    to="/"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-item dropdown-toggle"
                  >
                    Hover for action
                  </NavLink>
                  <ul
                    aria-labelledby="dropdownSubMenu2"
                    className="dropdown-menu border-0 shadow"
                  >
                    <li>
                      <NavLink tabindex="-1" to="/" className="dropdown-item">
                        level 2
                      </NavLink>
                    </li>

                    <li className="dropdown-submenu">
                      <NavLink
                        id="dropdownSubMenu3"
                        to="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="dropdown-item dropdown-toggle"
                      >
                        level 2
                      </NavLink>
                      <ul
                        aria-labelledby="dropdownSubMenu3"
                        className="dropdown-menu border-0 shadow"
                      >
                        <li>
                          <NavLink to="/" className="dropdown-item">
                            3rd level
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/" className="dropdown-item">
                            3rd level
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink to="/" className="dropdown-item">
                        level 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="dropdown-item">
                        level 2
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* </ul> */}
          </Nav>
          <Form className="form-inline ml-0 ml-md-3 mb-0">
            <Row className="row-cols-lg-auto g-3 align-items-center">
              <InputGroup size="sm">
                {/* <div className="input-group input-group-sm"> */}
                <Input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <Button className="btn-navbar" type="submit">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
                {/* </div> */}
              </InputGroup>
            </Row>
          </Form>
          {/* </div> */}
        </Collapse>

        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <NavLink to="/" className="dropdown-item">
                <div className="media">
                  <img
                    src="/images/user2.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="/images/user2.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <img
                    src="/images/user2.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i className="fa fa-th-large"></i>
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default TopNav;
