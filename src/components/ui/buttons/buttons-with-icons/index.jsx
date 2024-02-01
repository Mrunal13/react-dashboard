import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

function ButtonWithIcons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <Button className="btn-block" color="primary">
              <i className="fa fa-bell"></i> .btn-block
            </Button>
            <Button className="btn-block btn-flat" color="info">
              <i className="fa fa-bell"></i>.btn-block .btn-flat
            </Button>

            <Button color="danger" className="btn-block" size="sm">
              <i className="fa fa-bell"></i> .btn-block .btn-sm
            </Button>
          </Col>
          <Col md={6}>
            <Button outline className="btn-block" color="primary">
              <i className="fa fa-bell"></i> .btn-block
            </Button>
            <Button outline className="btn-block btn-flat" color="info">
              <i className="fa fa-book"></i>.btn-block .btn-flat
            </Button>

            <Button outline color="danger" className="btn-block" size="sm">
              <i className="fa fa-book"></i> .btn-block .btn-sm
            </Button>
          </Col>

        </Row>
      </CardBody>
    </Card>
  );
}

export default ButtonWithIcons;
