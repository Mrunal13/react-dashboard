import React from "react";
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import BreadCrumb from "../../../components/breadcrumb";
import ColorPalette from "../../../components/ui/general/color-palette";
import Alerts from "../../../components/ui/general/alerts";
import Callout from "../../../components/ui/general/callout";
import Tabs from "../../../components/ui/general/tabs";
import ProgressBarWithDiffrentSize from "../../../components/ui/general/progress-bar/progress-bar-diff-size";
import ProgressBarWithDiffrentColor from "../../../components/ui/general/progress-bar/progress-bar-diff-color";
import VProgressBarSize from "../../../components/ui/general/progress-bar/vertical-progressbar-diff-size";
import VProgressBarColor from "../../../components/ui/general/progress-bar/vertical-progressbar-diff-color";
import Accordions from "../../../components/ui/general/accordion";
import Carousels from "../../../components/ui/general/carousel";
import TypograpgyHeadLines from "../../../components/ui/general/typography/typography-headline";
import TypograpgyTextEmphasis from "../../../components/ui/general/typography/typograpgy-text-emphasis";
import PrimaryBlockQuotes from "../../../components/ui/general/typography/primary-block-quotes";
import SecondaryBlockQuotes from "../../../components/ui/general/typography/secondary-block-quotes";
import UnorderedList from "../../../components/ui/general/typography/unordered-list";
import OrderedList from "../../../components/ui/general/typography/ordered-list";
import UnStyledList from "../../../components/ui/general/typography/unstyled-list";
import DescriptionList from "../../../components/ui/general/typography/description-list";
import HorizontalDescriptionList from "../../../components/ui/general/typography/horizontal-description-list";
import PaginationMonth from "../../../components/ui/general/typography/pagination-month";
function UIGeneral() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb title="Inline Charts" item1="Home" item2="Inline Charts" />
      </section>
      <section className="content">
        <Container fluid>
          <ColorPalette />
          <h5 class="mt-4 mb-2">Alerts and Callouts</h5>
          <Row>
            <Col md={6}>
              <Card className="card-default">
                <CardHeader>
                  <CardTitle>
                    <i class="fa fa-exclamation-triangle"></i>
                    Alerts
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Alerts
                    color="danger"
                    iconClass="icon fa fa-ban"
                    title="Danger alert preview. This alert is dismissable. A wonderful serenity
          has taken possession of my entire soul, like these sweet mornings of
          spring which I enjoy with my whole heart."
                  />
                  <Alerts
                    color="info"
                    iconClass="icon fa fa-info"
                    title="  Info alert preview. This alert is dismissable."
                  />
                  <Alerts
                    color="warning"
                    iconClass="icon fa fa-exclamation-triangle"
                    title="Warning alert preview. This alert is dismissable."
                  />
                  <Alerts
                    color="success"
                    iconClass="icon fa fa-check"
                    title="Success alert preview. This alert is dismissable."
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-default">
                <CardHeader>
                  <CardTitle>
                    <i className="fa fa-bullhorn"></i>
                    Callouts
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Callout
                    className="callout callout-danger"
                    title="I am a danger callout!"
                    description="There is a problem that we need to fix. A wonderful serenity has taken
        possession of my entire soul, like these sweet mornings of spring which
        I enjoy with my whole heart."
                  />
                  <Callout
                    className="callout callout-info"
                    title="I am an info callout!"
                    description="Follow the steps to continue to payment."
                  />
                  <Callout
                    className="callout callout-warning"
                    title="I am a warning callout!"
                    description="This is a yellow callout."
                  />
                  <Callout
                    className="callout callout-success"
                    title="I am a success callout!"
                    description="This is a green callout."
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Tabs />
          <h5 class="mt-4 mb-2">Progress Bars</h5>
          <Row>
            <Col md={6}>
              <ProgressBarWithDiffrentSize />
            </Col>
            <Col md={6}>
              <ProgressBarWithDiffrentColor />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <VProgressBarSize />
            </Col>
            <Col md={6}>
              <VProgressBarColor />
            </Col>
          </Row>
          <h5 class="mt-4 mb-2">Bootstrap Accordion & Carousel</h5>
          <Row>
            <Col md={6}>
              <Accordions />
            </Col>
            <Col md={6}>
              <Carousels />
            </Col>
          </Row>
          <h5 class="mt-4 mb-2">Typography</h5>
          <Row>
            <Col md={6}>
              <TypograpgyHeadLines />
            </Col>
            <Col md={6}>
              <TypograpgyTextEmphasis />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <PrimaryBlockQuotes />
            </Col>
            <Col md={6}>
              <SecondaryBlockQuotes />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <UnorderedList />
            </Col>
            <Col md={4}>
              <OrderedList />
            </Col>
            <Col md={4}>
              <UnStyledList />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <DescriptionList />
            </Col>
            <Col md={6}>
              <HorizontalDescriptionList />
            </Col>
          </Row>
          <PaginationMonth />
        </Container>
      </section>
    </div>
  );
}

export default UIGeneral;
