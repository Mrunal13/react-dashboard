import React from "react";
import TopNav from "../../components/navbar/TopNav";
import Sidenav from "../../components/side-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const TopNavAndSidebar = () => {
  return (
    <>
      <TopNav withSidebar />
      <Sidenav />
      <div className="content-wrapper">
        <div className="content-header">
          <Container>
            <Row className="mb-2">
              <Col sm={6}>
                <h1 className="m-0">
                  Top Navigation <small>Example 3.0</small>
                </h1>
              </Col>
              <Col sm={6}>
                <Breadcrumb className="float-sm-right">
                  <BreadcrumbItem>
                    <a href="#">Home</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">Layout</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Top Navigation</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="content">
          <Container>
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle tag={"h5"}>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card link</CardLink>
                    <CardLink href="#">Another link</CardLink>
                  </CardBody>
                </Card>
                <Card color="primary" outline>
                  <CardBody>
                    <CardTitle tag={"h5"}>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">Card link</CardLink>
                    <CardLink href="#">Another link</CardLink>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardHeader>
                    <CardTitle tag={"h5"} className="m-0">
                      Featured
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag={"h6"}>Special title treatment</CardTitle>

                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button color="primary">Go somewhere</Button>
                  </CardBody>
                </Card>
                <Card color="primary" outline>
                  <CardHeader>
                    <CardTitle tag={"h5"} className="m-0">
                      Featured
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag={"h6"}>Special title treatment</CardTitle>

                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button className="btn-primary">Go somewhere</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <aside className="control-sidebar control-sidebar-dark"></aside>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">Anything you want</div>
        <strong>
          Copyright &copy; 2014-2021{" "}
          <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </>
  );
};

export default TopNavAndSidebar;
