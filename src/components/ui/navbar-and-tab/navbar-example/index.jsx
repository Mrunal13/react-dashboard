import React, { useState } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  Form,
  Input,
  InputGroup,
  Media,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Row,
} from "reactstrap";
import { Button } from "../../../../App";

function NavBarExample({ direction, ...args }) {
  return (
    <Row>
      <Col md={12}>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit"></i>
              Navbar Examples
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={6}>
                <h4>
                  Default Navbar <small>(navbar-light)</small>
                </h4>
                <Navbar expand={true} {...args} className="navbar-light">
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
              <Col lg={6} md={12}>
                <h4>
                  Default Navbar <small>(navbar-white navbar-light)</small>
                </h4>
                <Navbar
                  expand={true}
                  {...args}
                  className="navbar-light navbar-white"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12}>
                <h4 className="mt-4">
                  Primary Navbar{" "}
                  <small>
                    <b>recommended</b> (navbar-primary navbar-dark)
                  </small>
                </h4>
                <Navbar
                  expand={true}
                  {...args}
                  color="primary"
                  className="navbar-dark"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
              <Col md={12} lg={6}>
                <h4 className="mt-4">
                  Primary Navbar <small>(navbar-primary navbar-light)</small>
                </h4>
                <Navbar
                  expand={true}
                  {...args}
                  color="primary"
                  className="navbar-light"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <h4 className="mt-4">
                  Orange Navbar{" "}
                  <small>
                    <b>recommended</b> (navbar-orange navbar-light)
                  </small>
                </h4>
                <Navbar
                  expand={true}
                  {...args}
                  color="orange"
                  className="navbar-light"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
              <Col md={12} lg={6}>
                <h4 className="mt-4">
                  Orange Navbar <small>(navbar-orange navbar-dark)</small>
                </h4>
                <Navbar
                  expand={true}
                  {...args}
                  color="orange"
                  className="navbar-dark"
                >
                  <Nav navbar>
                    <NavItem>
                      <NavLink data-widget="pushmenu" href="#" role="button">
                        <i className="fa fa-bars"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-none d-sm-inline-block">
                      <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem className=" d-none d-sm-inline-block">
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        data-widget="navbar-search"
                        data-target="#navbar-search1"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-search"></i>
                      </NavLink>
                      <div className="navbar-search-block" id="navbar-search1">
                        <Form className="form-inline">
                          <InputGroup size="sm">
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
                              <Button
                                className="btn-navbar"
                                type="button"
                                data-widget="navbar-search"
                              >
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          </InputGroup>
                        </Form>
                      </div>
                    </NavItem>

                    <NavItem
                      className="dropdown"
                      data-toggle="dropdown"
                      direction={direction}
                    >
                      <NavLink href="#">
                        <i className="fa fa-comments"></i>
                        <Badge color="danger" className="navbar-badge">
                          3
                        </Badge>
                      </NavLink>
                      <DropdownMenu size="lg" className="dropdown-menu-right">
                        <DropdownItem>
                          <Media>
                            <img
                              src="/images/user-one.jpg"
                              alt="User Avatar"
                              className="img-size-50 mr-3 img-circle"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Brad Diesel
                                <span className="float-right text-sm text-danger">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                Call me whenever you can
                              </p>
                              <p className="text-sm mb-0 mb-text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-eight.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                John Pierce
                                <span className="float-right text-sm text-muted">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                I got your message bro
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          {" "}
                          <Media>
                            <img
                              src="/images/user-three.jpg"
                              alt="User Avatar"
                              className="img-size-50 img-circle mr-3"
                            />
                            <Media body>
                              <h3 className="dropdown-item-title">
                                Nora Silvester
                                <span className="float-right text-sm text-warning">
                                  <i className="fa fa-star"></i>
                                </span>
                              </h3>
                              <p className="text-sm mb-0">
                                The subject goes here
                              </p>
                              <p className="text-sm mb-0 text-muted">
                                <i className="fa fa-clock mr-1"></i> 4 Hours Ago
                              </p>
                            </Media>
                          </Media>
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>

                    <NavItem className="dropdown" direction={direction}>
                      <NavLink data-toggle="dropdown" href="#">
                        <i className="fa fa-bell"></i>
                        <Badge color="warning" className="navbar-badge">
                          15
                        </Badge>
                      </NavLink>
                      <DropdownMenu
                        className="dropdown-menu-right "
                        style={{ width: "270px" }}
                      >
                        <DropdownItem header>15 Notifications</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-envelope mr-2"></i> 4 new messages
                          <span className="float-right text-muted text-sm">
                            3 mins
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#">
                          <i className="fa fa-users mr-2"></i> 8 friend requests
                          <span className="float-right text-muted text-sm">
                            12 hours
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="#" className="dropdown-item">
                          <i className="fa fa-file mr-2"></i> 3 new reports
                          <span className="float-right text-muted text-sm">
                            2 days
                          </span>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          className="dropdown-item dropdown-footer"
                        >
                          See All Notifications
                        </DropdownItem>
                      </DropdownMenu>
                    </NavItem>
                    <NavItem>
                      <NavLink data-widget="fullscreen" href="#" role="button">
                        <i className="fa fa-expand"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                      >
                        <i className="fa fa-th-large"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default NavBarExample;
