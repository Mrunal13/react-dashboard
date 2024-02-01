import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
} from "reactstrap";

function ProgressBarWithDiffrentSize() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Bars Different Sizes</CardTitle>
      </CardHeader>
      <CardBody>
        <p>
          <code>.progress</code>
        </p>
        <Progress striped value={40} color="primary" />
        <p>
          <code>.progress-sm</code>
        </p>
        <Progress
          striped
          value={20}
          color="success"
          style={{ height: "10px" }}
        />
        <p>
          <code>.progress-xs</code>
        </p>
        <Progress
          striped
          value={60}
          color="warning"
          style={{ height: "7px" }}
        />
        <p>
          <code>.progress-xxs</code>
        </p>
        <Progress striped value={60} color="danger" style={{ height: "3px" }} />
      </CardBody>
    </Card>
  );
}

export default ProgressBarWithDiffrentSize;
