import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Badge,
  Progress,
} from "reactstrap";
export default function CondensedTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Condensed Full Width Table</CardTitle>
      </CardHeader>
      {/* <!-- /.card-header --> */}
      <CardBody className="p-0">
        <Table className="table-sm">
          <thead>
            <tr>
              <th style={{ width: "10px" }}>#</th>
              <th>Task</th>
              <th>Progress</th>
              <th style={{ width: "40px" }}>Label</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Update software</td>
              <td>
                <Progress
                  style={{
                    height: "7px",
                  }}
                  value={55}
                />
                {/* <div class="progress progress-xs">
                <div
                  class="progress-bar progress-bar-danger"
                  style={{ width: "55%" }}
                ></div>
              </div> */}
              </td>
              <td>
                <Badge color="danger">55%</Badge>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Clean database</td>
              <td>
                <Progress
                  style={{
                    height: "7px",
                  }}
                  color="warning"
                  value={75}
                />
              </td>
              <td>
                <Badge color="warning">70%</Badge>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Cron job running</td>
              <td>
                <Progress
                  style={{
                    height: "7px",
                  }}
                  color="primary"
                  value={30}
                />
              </td>
              <td>
                <Badge color="primary">30%</Badge>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Fix and squish bugs</td>
              <td>
                <Progress
                  style={{
                    height: "7px",
                  }}
                  color="success"
                  value={90}
                />
              </td>
              <td>
                <Badge color="success">90%</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      {/* <!-- /.card-body --> */}
    </Card>
  );
}
