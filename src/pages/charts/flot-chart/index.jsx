import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import DonutChart from "./DonutChart";
import InteractiveAreaChart from "./InteractiveAreaChart";

const FlotChart = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Flot Charts</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Flot</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <Container fluid>
          <Row>
            <Col>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    <i className="far fa-chart-bar"></i>
                    Interactive Area Chart
                  </CardTitle>

                  <div className="card-tools">
                    Real time
                    <div
                      className="btn-group"
                      id="realtime"
                      data-toggle="btn-toggle"
                    >
                      <button
                        type="button"
                        className="btn btn-default btn-sm active"
                        data-toggle="on"
                      >
                        On
                      </button>
                      <button
                        type="button"
                        className="btn btn-default btn-sm"
                        data-toggle="off"
                      >
                        Off
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <InteractiveAreaChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    <i className="far fa-chart-bar"></i>
                    Line Chart
                  </CardTitle>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <LineChart />
                </CardBody>
              </Card>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    <i className="far fa-chart-bar"></i>
                    Area Chart
                  </CardTitle>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <AreaChart />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    <i className="far fa-chart-bar"></i>
                    Bar Chart
                  </CardTitle>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <BarChart />
                </CardBody>
              </Card>
              <Card className="card-primary card-outline">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    <i className="far fa-chart-bar"></i>
                    Donut Chart
                  </CardTitle>

                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <DonutChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FlotChart;
