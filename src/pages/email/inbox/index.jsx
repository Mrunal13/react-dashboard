import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import InBox from "../../../components/email/inbox";

function MailBox() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Inbox" item1="Home" item2="Inbox" />
      </section>
      <section className="content">
        <Container fluid>
          <InBox />
        </Container>
      </section>
    </div>
  );
}

export default MailBox;
