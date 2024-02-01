import React from "react";
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Badge,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function BorderedTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bordered Table</CardTitle>
      </CardHeader>
      {/* <!-- /.card-header --> */}
      <CardBody>
        <Table bordered>
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
              <th scope="row">1.</th>
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
              <th scope="row">2.</th>
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
              <th scope="row">3.</th>
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
              <th scope="row">4.</th>
              <td>Fix and squish bugs</td>
              <td>
                <Progress
                  style={{
                    height: "7px",
                  }}
                  striped
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
      <CardFooter className="clearfix">
        <Pagination size="sm" className="float-right m-0">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
        {/* <ul class="pagination pagination-sm m-0 float-right">
          <li class="page-item">
            <a class="page-link" href="#">
              &laquo;
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              &raquo;
            </a>
          </li>
        </ul> */}
      </CardFooter>
    </Card>
  );
}

export default BorderedTable;
