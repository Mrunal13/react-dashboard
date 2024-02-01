import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Progress } from "reactstrap";
function VProgressBarColor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vertical Progress bars</CardTitle>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          By adding the class <code>.vertical</code> we achieve:
        </p>
        {/* <Progress className="vertical" value={40} color="success" />
        <Progress className="vertical  " value={20} color="info" />

        <Progress className="vertical " value={60} color="warning" />
        <Progress className="vertical " value={80} color="danger" /> */}
        <div className="progress vertical">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "40%" }}
          >
            <span className="sr-only">40%</span>
          </div>
        </div>
        <div className="progress vertical">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "20%" }}
          >
            <span className="sr-only">20%</span>
          </div>
        </div>
        <div className="progress vertical">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "60%" }}
          >
            <span className="sr-only">60%</span>
          </div>
        </div>
        <div className="progress vertical">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "80%" }}
          >
            <span className="sr-only">80%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default VProgressBarColor;
