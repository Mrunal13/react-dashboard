import React from "react";
import { Row, Col, Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import BorderedTable from "../../components/tables/simple-table/bordered-table";
import CondensedTable from "../../components/tables/simple-table/condensed-full-width-table";
import SimpleFullWidthTable from "../../components/tables/simple-table/simple-fullwidth-table";
import StripedTable from "../../components/tables/simple-table/striped-table";
import ResponsiveHoverTable from "../../components/tables/simple-table/responsive-hover-table";
import FixedHeaderTable from "../../components/tables/simple-table/fixed-header-table";
import ExpandableTable from "../../components/tables/simple-table/expandable-table";
import ExpandableTableTree from "../../components/tables/simple-table/expandable-table-tree";

export default function SimpleTablePage() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Container fluid>
          <Row className="mb-2">
            <Col sm={6}>
              <h1>Simple Tables</h1>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-sm-right">
                <BreadcrumbItem>
                  <a href="#">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Simple Tables</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
        {/* <!-- /.container-fluid --> */}
      </section>
      <section className="content">
        <Container fluid>
          <Row>
            <Col md={6}>
              <BorderedTable />
              <CondensedTable />
            </Col>
            <Col md={6}>
              <SimpleFullWidthTable />
              <StripedTable />
            </Col>
          </Row>
          <ResponsiveHoverTable />
          <FixedHeaderTable />
          <ExpandableTable />
          <ExpandableTableTree />
        </Container>
      </section>
    </div>
  );
}
