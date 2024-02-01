import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Col, Container, Row } from "reactstrap";
import VariousButtons from "../../../components/ui/buttons/various-buttons";
import OutlineButtons from "../../../components/ui/buttons/outline-buttons";
import GradientButtons from "../../../components/ui/buttons/gradient-buttons";
import ButtonWithIcons from "../../../components/ui/buttons/buttons-with-icons";
import BlockButtons from "../../../components/ui/buttons/block-buttons";
import HorizontalButtonGroup from "../../../components/ui/buttons/horizontal-button-group";
import AppededButtons from "../../../components/ui/buttons/appended-buttons";
import Splitbuttons from "../../../components/ui/buttons/split-buttons";
import ApplicationButtons from "../../../components/ui/buttons/application-buttons";
import VerticalButtonGroup from "../../../components/ui/buttons/vertical-btn-group";
import RadioButtonGroup from "../../../components/ui/buttons/radio-btn-group";
function Buttons() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Buttons" item1="Home" item2="Buttons" />
      </section>
      <section className="content">
        <Container fluid>
          <VariousButtons />
          <OutlineButtons />
          <GradientButtons />
          <Row>
            <Col md={6}>
              <ButtonWithIcons />
              <BlockButtons />
              <HorizontalButtonGroup />
              <AppededButtons />
              <Splitbuttons />
            </Col>
            <Col md={6}>
              <ApplicationButtons />
              <VerticalButtonGroup />
              <RadioButtonGroup />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Buttons;
