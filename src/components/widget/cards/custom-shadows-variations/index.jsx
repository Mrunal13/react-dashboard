import React from "react";
import { Col, Card, Row, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Button } from "../../../../App";

export default function CustomeShadowsVariations() {
  return (
    <>
      <h5 className="mb-2">
        Custom Shadows Variations
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-primary shadow-none">
            <CardHeader>
              <CardTitle>Shadow - None</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-success shadow-sm">
            <CardHeader>
              <CardTitle>Shadow Small</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-warning shadow">
            <CardHeader>
              <CardTitle>Shadow - Regular</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-danger shadow-lg">
            <CardHeader>
              <CardTitle>Shadow - Large</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="maximize">
                  <i className="fas fa-expand-arrows-alt"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
