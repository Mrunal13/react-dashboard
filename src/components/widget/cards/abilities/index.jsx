import React from "react";
import { Col, Card, Row, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Button } from "../../../../App";

export default function Cards() {
  return (
    <>
      <h4 className="mb-2 mt-4">Cards</h4>
      <h5 className="mb-2">Abilities</h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-primary collapsed-card">
            <CardHeader>
              <CardTitle>Expandable</CardTitle>
              <div className="card-tools">
                <Button
                  className="btn-tool"
                  data-card-widget="collapse"
                  cssModule={{ ["btn-secondary"]: "none" }}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-success">
            <CardHeader>
              <CardTitle>Collapsable</CardTitle>
              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-warning">
            <CardHeader>
              <CardTitle className="card-title">Removable</CardTitle>
              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fa fa-times"></i>
                </Button>
              </div>
              {/* <!-- /.card-tools --> */}
            </CardHeader>
            {/* <!-- /.card-header --> */}
            <CardBody className="card-body">The body of the card</CardBody>
            {/* <!-- /.card-body --> */}
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-danger">
            <CardHeader>
              <CardTitle className="card-title">Maximizable</CardTitle>
              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="maximize"
                >
                  <i className="fas fa-expand-arrows-alt"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody className="card-body">The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-primary">
            <CardHeader>
              <CardTitle>Card Refresh</CardTitle>
              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="card-refresh"
                  data-source="widgets.html"
                  data-source-selector="#card-refresh-content"
                >
                  <i className="fas fa-sync-alt"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card </CardBody>
          </Card>
          <div className="d-none" id="card-refresh-content">
            The body of the card after card refresh
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-success">
            <CardHeader>
              <CardTitle>All together</CardTitle>
              <div className="card-tools">
                <Button
                  className="btn-tool"
                  data-card-widget="card-refresh"
                  data-source="widgets.html"
                  data-source-selector="#card-refresh-content"
                  data-load-on-init="false"
                >
                  <i className="fas fa-sync-alt"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="maximize">
                  {/* <i className="fa fa-expand"></i> */}
                  <i className="fas fa-expand-arrows-alt"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} xs={12} sm={6}>
          <Card className="card-warning">
            <CardHeader>
              <CardTitle>Loading state</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
            <div className="overlay">
              <i className="fas fa-2x fa-sync-alt"></i>
            </div>
          </Card>
        </Col>
        <Col md={3} xs={12} sm={6}>
          <Card className="card-danger">
            <CardHeader>
              <CardTitle>Loading state (dark)</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
            <div className="overlay dark">
              <i className="fas fa-2x fa-sync-alt"></i>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
