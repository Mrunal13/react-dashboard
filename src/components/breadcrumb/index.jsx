import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function BreadCrumb({ title, item1, item2 }) {
  return (
    <Container fluid>
      <Row className="mb-2">
        <Col sm={6}>
          <h1>{title}</h1>
        </Col>
        <Col sm={6}>
          <Breadcrumb className="float-sm-right">
            <BreadcrumbItem>
              <a href="#">{item1}</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>{item2}</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
}
