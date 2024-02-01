import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import Ribbon from "../../../components/ui/ribbon";

function Ribbons() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Ribbons" item1="Home" item2="Ribbons" />
      </section>
      <section className="content">
        <Container fluid>
          <Ribbon />
        </Container>
      </section>
    </div>
  );
}

export default Ribbons;
