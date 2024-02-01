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

function OutlineButtons() {
  return (
    <Row>
      <Col>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit"></i>
              Outline Buttons
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive className="pad">
              <p>
                Various types of buttons. Using the base class
                <code>.btn</code>
              </p>
              <Table bordered className="text-center">
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
                    <Button color="primary" outline className="btn-block">
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      outline
                      className="btn-block"
                      size="lg"
                    >
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      outline
                      className="btn-block"
                      size="sm"
                    >
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      outline
                      className="btn-block"
                      size="xs"
                    >
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      outline
                      className="btn-block btn-flat"
                    >
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      disabled
                      color="primary"
                      className="btn-block"
                    >
                      primary
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline className="btn-block">
                      secondary
                    </Button>
                  </td>
                  <td>
                    <Button outline className="btn-block" size="lg">
                      secondary
                    </Button>
                  </td>
                  <td>
                    <Button outline className="btn-block" size="sm">
                      secondary
                    </Button>
                  </td>
                  <td>
                    <Button outline className="btn-block" size="xs">
                      secondary
                    </Button>
                  </td>
                  <td>
                    <Button outline className="btn-block btn-flat">
                      secondary
                    </Button>
                  </td>
                  <td>
                    <Button disabled outline className="btn-block">
                      secondary
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline color="success" className="btn-block">
                      success
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="success"
                      className="btn-block"
                      size="lg"
                    >
                      success
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="success"
                      className="btn-block"
                      size="sm"
                    >
                      success
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="success"
                      className="btn-block"
                      size="xs"
                    >
                      success
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="success"
                      className="btn-block btn-flat"
                    >
                      success
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      outline
                      color="success"
                      className="btn-block"
                    >
                      success
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline color="info" className="btn-block">
                      info
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="info"
                      className="btn-block"
                      size="lg"
                    >
                      info
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="info"
                      className="btn-block"
                      size="sm"
                    >
                      info
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="info"
                      className="btn-block"
                      size="xs"
                    >
                      info
                    </Button>
                  </td>
                  <td>
                    <Button outline color="info" className="btn-block btn-flat">
                      info
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      outline
                      color="info"
                      className="btn-block "
                    >
                      info
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline color="danger" className=" btn-block">
                      danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="danger"
                      className=" btn-block"
                      size="lg"
                    >
                      danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="danger"
                      className=" btn-block"
                      size="sm"
                    >
                      danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="danger"
                      className=" btn-block"
                      size="xs"
                    >
                      danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="danger"
                      className=" btn-block btn-flat"
                    >
                      danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      outline
                      color="danger"
                      className=" btn-block"
                    >
                      danger
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="warning" outline className="btn-block">
                      warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      outline
                      className="btn-block"
                      size="lg"
                    >
                      warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      outline
                      className="btn-block"
                      size="sm"
                    >
                      warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      outline
                      className="btn-block"
                      size="xs"
                    >
                      warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      outline
                      className="btn-block btn-flat"
                    >
                      warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      disabled
                      color="warning"
                      className="btn-block btn-flat"
                    >
                      warning
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline color="light" className="btn-block">
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="light"
                      className="btn-block"
                      size="lg"
                    >
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="light"
                      className="btn-block"
                      size="sm"
                    >
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="light"
                      className="btn-block"
                      size="xs"
                    >
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      color="light"
                      className="btn-block btn-flat"
                    >
                      Light
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      outline
                      color="light"
                      className="btn-block "
                    >
                      Light
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button outline className=" btn-block" color="dark">
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      className=" btn-block"
                      color="dark"
                      size="lg"
                    >
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      className=" btn-block"
                      color="dark"
                      size="sm"
                    >
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      className=" btn-block"
                      color="dark"
                      size="xs"
                    >
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      outline
                      className=" btn-block btn-flat"
                      color="dark"
                    >
                      Dark
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      outline
                      className=" btn-block"
                      color="dark"
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

export default OutlineButtons;
