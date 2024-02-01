import React from "react";
import Icons from "../../../components/ui/icons";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";

function Iconpage() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Icons" item1="Home" item2="Icons" />
      </section>
      <section className="content">
        <Container fluid>
            <Icons />
        </Container>
      </section>
    </div>
  );
}

export default Iconpage;
