import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Progress } from "reactstrap";

function VProgressBarSize() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vertical Progress Bars Different Sizes</CardTitle>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          By adding the class <code>.vertical</code> and{" "}
          <code>.progress-sm</code>, <code>.progress-xs</code>
          or
          <code>.progress-xxs</code> we achieve:
        </p>
        {/* <Progress
          className="vertical"
          striped
          value={40}
          color="primary"
          style={{ width: "30px" }}
        />
        <Progress
          className="vertical "
          striped
          value={20}
          color="success"
          style={{ width: "20px" }}
        />

        <Progress
          className="vertical"
          striped
          value={60}
          color="warning"
          style={{ width: "10px" }}
        />
        <Progress
          className="vertical"
          striped
          value={60}
          style={{ width: "3px" }}
          color="info"
        /> */}
        
        <div className="progress vertical active">
          <div
            className="progress-bar bg-primary progress-bar-striped"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "40%" }}
          >
            <span className="sr-only">40%</span>
          </div>
        </div>
        <div className="progress vertical progress-sm">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "100%" }}
          >
            <span className="sr-only">100%</span>
          </div>
        </div>
        <div className="progress vertical progress-xs">
          <div
            className="progress-bar bg-warning progress-bar-striped"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "60%" }}
          >
            <span className="sr-only">60%</span>
          </div>
        </div>
        <div className="progress vertical progress-xxs">
          <div
            className="progress-bar bg-info progress-bar-striped"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "60%" }}
          >
            <span className="sr-only">60%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default VProgressBarSize;
