import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function PaginationMonth() {
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <CardTitle>Pagination Month</CardTitle>
          </CardHeader>
          <CardBody>
            <Pagination
              className="pagination-month d-flex
             justify-content-center"
            >
              <PaginationItem>
                <PaginationLink class="page-link" href="#">
                  «
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Jan</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  <p class="page-month">Feb</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Mar</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Apr</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">May</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Jun</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Jul</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Aug</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Sep</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Oct</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Nov</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  <p class="page-month">Dec</p>
                  <p class="page-year">2021</p>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">»</PaginationLink>
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default PaginationMonth;
