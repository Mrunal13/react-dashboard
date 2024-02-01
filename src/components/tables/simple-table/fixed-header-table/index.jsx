import React from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  CardHeader,
  InputGroup,
  Input,
  Button,
  Table,
} from "reactstrap";

function FixedHeaderTable() {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <CardHeader>
            <CardTitle>Fixed Header Table</CardTitle>
            <div className="card-tools">
              <InputGroup className="input-group-sm" style={{ width: "150px" }}>
                <Input
                  type="text"
                  name="table_search"
                  className="form-control float-right"
                  placeholder="Search"
                />
                <Button
                  className=" btn-default"
                  style={{
                    marginLeft: "-3px",
                    height: "31px",
                    display: "block",
                  }}
                >
                  <i className="fa fa-search d-flex justify-content-center"></i>
                </Button>
              </InputGroup>
            </div>
          </CardHeader>
          <CardBody
            className="p-0"
            style={{ height: "300px", overflow: "auto" }}
          >
            <table className="table table-head-fixed text-nowrap" responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>183</td>
                  <td>John Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-success" color="success">
                      Approved
                    </span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Alexander Pierce</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-warning" color="warning">
                      Pending
                    </span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Bob Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-primary" color="primary">
                      Approved
                    </span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Mike Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-danger" color="danger">
                      Denied
                    </span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Jim Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-success">Approved</span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Victoria Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-warning">Pending</span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Michael Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-primary">Approved</span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Rocky Doe</td>
                  <td>11-7-2014</td>
                  <td>
                    <span className="tag tag-danger">Denied</span>
                  </td>
                  <td>
                    Bacon ipsum dolor sit amet salami venison chicken flank
                    fatback doner.
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default FixedHeaderTable;
