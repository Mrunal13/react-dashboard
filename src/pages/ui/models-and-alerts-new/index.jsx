import React from "react";
import ModalExample from "../../../components/model-and-alert/model";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import ToastExample from "../../../components/model-and-alert/ToastExample";

function ModelAndAlerts() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb
          title="Modals & Alerts new"
          item1="Home"
          item2="Modals & Alerts"
        />
      </section>
      <section className="content">
        <Container fluid>
          <ModalExample />
          <ToastExample />
        </Container>
      </section>
    </div>
  );
}

export default ModelAndAlerts;
