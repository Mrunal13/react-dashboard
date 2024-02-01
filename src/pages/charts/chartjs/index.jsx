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
import AreaChart from "./AreaChart";
import LineChart from "./LineChart";
import DonutChart from "./DonutChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import StackedBarChart from "./StackedBarChart";

const ChartJS = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Container fluid>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>ChartJS</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">ChartJS</li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="content">
        <Container fluid>
          <Row>
            <Col md={6}>
              <Card className="card-primary">
                <CardHeader>
                  <CardTitle tag={"h3"}>Area Chart</CardTitle>

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
                  <div className="chart">
                    <AreaChart />
                  </div>
                </CardBody>
              </Card>
              <Card className="card-danger">
                <CardHeader>
                  <CardTitle tag={"h3"}>Donut Chart</CardTitle>

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
                <div className="card-body">
                  <DonutChart />
                </div>
              </Card>
              <Card className="card-danger">
                <CardHeader>
                  <CardTitle tag={"h3"}>Pie Chart</CardTitle>

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
                  <PieChart />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="card-info">
                <CardHeader>
                  <CardTitle tag={"h3"}>Line Chart</CardTitle>

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
                  <div className="chart">
                    <LineChart />
                  </div>
                </CardBody>
              </Card>
              <Card className="card-success">
                <CardHeader>
                  <CardTitle tag={"h3"}>Bar Chart</CardTitle>

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
                  <div className="chart">
                    <BarChart />
                  </div>
                </CardBody>
              </Card>
              <Card className="card-success">
                <CardHeader>
                  <CardTitle tag={"h3"}>Stacked Bar Chart</CardTitle>

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
                  <div className="chart">
                    <StackedBarChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ChartJS;
