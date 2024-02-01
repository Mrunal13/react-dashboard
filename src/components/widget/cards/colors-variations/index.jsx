import React from "react";
import { Col, Card, Row, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Button } from "../../../../App";

export default function ColorsVariationsCrads() {
  return (
    <>
      <h5 className="mb-2">Colors Variations</h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-primary">
            <CardHeader>
              <CardTitle>Primary</CardTitle>
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
          <Card className="card-success">
            <CardHeader>
              <CardTitle>Success</CardTitle>
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
          <Card className="card-warning">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
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
          <Card className="card-danger">
            <CardHeader>
              <CardTitle>Danger</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-outline card-primary">
            <CardHeader>
              <CardTitle>Primary Outline</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="collapse">
                  {" "}
                  <i className="fa fa-minus"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-outline card-success">
            <CardHeader>
              <CardTitle>Success Outline</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="remove">
                  {" "}
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-outline card-warning">
            <CardHeader>
              <CardTitle>Warning Outline</CardTitle>
              <div className="card-tools">
                <Button className="btn-tool" data-card-widget="collapse">
                  {" "}
                  <i className="fa fa-minus"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-outline card-danger">
            <CardHeader>
              <CardTitle>Danger Outline</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="bg-primary">
            <CardHeader>
              <CardTitle>Primary</CardTitle>
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
          <Card className="bg-success">
            <CardHeader>
              <CardTitle>Success</CardTitle>
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
          <Card className="bg-warning">
            <CardHeader>
              <CardTitle>Warning</CardTitle>
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
          <Card className="bg-danger">
            <CardHeader>
              <CardTitle>Danger</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="bg-gradient-primary">
            <CardHeader>
              <CardTitle>Primary Gradient</CardTitle>
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
          <Card className="bg-gradient-success">
            <CardHeader>
              <CardTitle>Success Gradient</CardTitle>
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
          <Card className="bg-gradient-warning">
            <CardHeader>
              <CardTitle>Warning Gradient</CardTitle>
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
          <Card className="bg-gradient-danger">
            <CardHeader>
              <CardTitle>Danger Gradient</CardTitle>
            </CardHeader>
            <CardBody>The body of the card</CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
