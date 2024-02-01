import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import Starterpage from "../../../components/extras/starter-page";

function StarterPage() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Starter Page" item1="Home" item2="Starter Page" />
      </section>
      <section className="content">
        <Container fluid>
            <Starterpage />
        </Container>
      </section>
    </div>
  );
}

export default StarterPage;
