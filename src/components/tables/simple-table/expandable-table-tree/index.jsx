import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
function ExpandableTableTree() {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <CardHeader>
            <CardTitle>Expandable Table Tree</CardTitle>
          </CardHeader>
          {/* <!-- ./card-header --> */}
          <CardBody className="p-0">
            <Table hover>
              <tbody>
                <tr>
                  <td className="border-0">183</td>
                </tr>
                <tr data-widget="expandable-table" aria-expanded="true">
                  <td>
                    <i className="expandable-table-caret fa fa-caret-right fa-fw"></i>
                    219
                  </td>
                </tr>
                <tr className="expandable-body">
                  <td>
                    <div className="p-0">
                      <table className="table table-hover">
                        <tbody>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>
                              <i className="expandable-table-caret fa fa-caret-right fa-fw"></i>
                              219-1
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td>
                              <div className="p-0">
                                <table className="table table-hover">
                                  <tbody>
                                    <tr>
                                      <td>219-1-1</td>
                                    </tr>
                                    <tr>
                                      <td>219-1-2</td>
                                    </tr>
                                    <tr>
                                      <td>219-1-3</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>
                              <Button color="primary" className=" p-0">
                                <i className="expandable-table-caret fa fa-caret-right fa-fw"></i>
                              </Button>
                              219-2
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td>
                              <div className="p-0">
                                <table className="table table-hover">
                                  <tbody>
                                    <tr>
                                      <td>219-2-1</td>
                                    </tr>
                                    <tr>
                                      <td>219-2-2</td>
                                    </tr>
                                    <tr>
                                      <td>219-2-3</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>219-3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>657</td>
                </tr>
                <tr>
                  <td>175</td>
                </tr>
                <tr>
                  <td>134</td>
                </tr>
                <tr>
                  <td>494</td>
                </tr>
                <tr>
                  <td>832</td>
                </tr>
                <tr>
                  <td>982</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ExpandableTableTree;
