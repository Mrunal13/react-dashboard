import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const BoxedLayout = () => {
  return (
    <div class="content-wrapper">
      <section class="content-header">
        <Container fluid>
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Boxed Layout</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Layout</a>
                </li>
                <li class="breadcrumb-item active">Boxed Layout</li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section class="content">
        <Container fluid>
          <Row>
            <Col
            // className="col-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle tag={"h3"}>Title</CardTitle>

                  <div class="card-tools">
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="remove"
                      title="Remove"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </CardHeader>
                <CardBody>Start creating your amazing application!</CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BoxedLayout;
