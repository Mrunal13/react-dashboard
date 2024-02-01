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
function GradientButtons() {
  return (
    <Row>
      <Col>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit mr-1"></i>
              Gradient Buttons (bg-gradient-*)
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
                      color="primary"
                      className="btn-block  bg-gradient-primary"
                    >
                      primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      className="btn-block  bg-gradient-primary"
                      size="lg"
                    >
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      className="btn-block  bg-gradient-primary"
                      size="sm"
                    >
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      className="btn-block  bg-gradient-primary"
                      size="xs"
                    >
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      className="btn-block  bg-gradient-primary  btn-flat"
                    >
                      Primary
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="primary"
                      className="btn-block  bg-gradient-primary"
                      disabled
                    >
                      Primary
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      className="btn-block bg-gradient-secondary"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                      color="secondary"
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block bg-gradient-secondary"
                      size="lg"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block bg-gradient-secondary"
                      size="sm"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block bg-gradient-secondary"
                      size="xs"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-block bg-gradient-secondary btn-flate"
                      //   cssModule={{ "btn-secondary": "btnSecondary" }}
                    >
                      Secondary
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      className="btn-block bg-gradient-secondary"
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
                      className="btn-block bg-gradient-success "
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block bg-gradient-success "
                      size="lg"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block bg-gradient-success "
                      size="sm"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block bg-gradient-success "
                      size="xs"
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="success"
                      type="button"
                      className="btn-block bg-gradient-success btn-flat "
                    >
                      Success
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="success"
                      type="button"
                      className="btn-block bg-gradient-success"
                    >
                      Success
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button color="info" className="btn-block bg-gradient-info">
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="info"
                      className="btn-block bg-gradient-info"
                      size="lg"
                    >
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="info"
                      className="btn-block bg-gradient-info"
                      size="sm"
                    >
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="info"
                      className="btn-block bg-gradient-info"
                      size="xs"
                    >
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="info"
                      className="btn-block bg-gradient-info btn-flat"
                    >
                      Info
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="info"
                      className="btn-block bg-gradient-info"
                    >
                      Info
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      color="danger"
                      className="btn-block bg-gradient-danger"
                    >
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="danger"
                      className="btn-block bg-gradient-danger"
                      size="lg"
                    >
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="danger"
                      className="btn-block bg-gradient-danger"
                      size="sm"
                    >
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="danger"
                      className="btn-block bg-gradient-danger"
                      size="xs"
                    >
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="danger"
                      className="btn-block bg-gradient-danger  btn-flat"
                    >
                      Danger
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="danger"
                      className="btn-block bg-gradient-danger"
                    >
                      Danger
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      color="warning"
                      className="btn-block bg-gradient-warning "
                    >
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      className="btn-block bg-gradient-warning "
                      size="lg"
                    >
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      className="btn-block bg-gradient-warning "
                      size="sm"
                    >
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      className="btn-block bg-gradient-warning "
                      size="xs"
                    >
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="warning"
                      className="btn-block bg-gradient-warning  btn-flat"
                    >
                      Warning
                    </Button>
                  </td>
                  <td>
                    <Button
                      disabled
                      color="warning"
                      className="btn-block bg-gradient-warning "
                    >
                      Warning
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

export default GradientButtons;
