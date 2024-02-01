import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";

function VariousButtons() {
  return (
    <Row>
      <Col>
        <Card color="primary" outline>
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit mr-1"></i>
              Buttons
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <p>
                Various types of buttons. Using the base class <code>.btn</code>
              </p>
              <Table className="text-center">
                <tr>
                  <th>Normal</th>
                  <th>
                    Large <code>.btn-lg</code>
                  </th>
                  <th>
                    Small <code>.btn-sm</code>
                  </th>
                  <th>
                    Extra Small <code>.btn-xs</code>
                  </th>
                  <th>
                    Flat <code>.btn-flat</code>
                  </th>
                  <th>
                    Disabled <code>.disabled</code>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Button
                      type="button"
                      className="btn-block btn-default"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block btn-default"
                      size="lg"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block btn-default"
                      size="sm"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block btn-default"
                      size="xs"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block btn-default btn-flat"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                  <td>
                    <Button
                      type="button"
                      disabled
                      className="btn-block btn-default"
                      cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Default
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="primary" className="btn-block">
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" className="btn-block" size="lg">
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" className="btn-block" size="sm">
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" className="btn-block" size="xs">
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" className="btn-block  btn-flat">
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" className="btn-block" disabled>
                      Primary
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      className="btn-block"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                      color="secondary"
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block"
                      size="lg"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block"
                      size="sm"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block"
                      size="xs"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block btn-flate"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      className="btn-block"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block "
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block "
                      size="lg"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block "
                      size="sm"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block "
                      size="xs"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block btn-flat "
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="success"
                      type="button"
                      className="btn-block"
                    >
                      Success
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="info" className="btn-block">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button color="info" className="btn-block" size="lg">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button color="info" className="btn-block" size="sm">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button color="info" className="btn-block" size="xs">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button color="info" className="btn-block btn-flat">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button disabled color="info" className="btn-block">
                      Info
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="danger" className="btn-block">
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button color="danger" className="btn-block" size="lg">
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button color="danger" className="btn-block" size="sm">
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button color="danger" className="btn-block" size="xs">
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button color="danger" className="btn-block  btn-flat">
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button disabled color="danger" className="btn-block">
                      Danger
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="warning" className="btn-block">
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button color="warning" className="btn-block" size="lg">
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button color="warning" className="btn-block" size="sm">
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button color="warning" className="btn-block" size="xs">
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button color="warning" className="btn-block btn-flat">
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button disabled color="warning" className="btn-block">
                      Warning
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button className="btn-block" color="light">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-block" color="light" size="lg">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-block" color="light" size="sm">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-block" color="light" size="xs">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-block btn-flat" color="light">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button className="btn-block" color="light" disabled>
                      Light
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="dark" className="btn-block">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button color="dark" className="btn-block" size="lg">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button color="dark" className="btn-block" size="sm">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button color="dark" className="btn-block" size="xs">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button color="dark" className="btn-block btn-flat">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="dark"
                      className="btn-block btn-flat"
                    >
                      Dark
                    </Button>
                  </td>
                </tr>
              </Table>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default VariousButtons;
