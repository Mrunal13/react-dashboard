import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import Compose from "../../../components/email/compose";

function ComposePage() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Compose" item1="Home" item2="Compose" />
      </section>
      <section className="content">
        <Container fluid>
          <Compose />
        </Container>
      </section>
    </div>
  );
}

export default ComposePage;
