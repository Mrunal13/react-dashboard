import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Progress } from "reactstrap";

function ProgressBarWithDiffrentColor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress bars</CardTitle>
      </CardHeader>
      <CardBody>
        <Progress value={40} color="success" className="mb-3" />
        <Progress value={20} color="info" className="mb-3" />
        <Progress value={60} color="warning" className="mb-3" />
        <Progress value={80} color="danger" className="mb-3" />
      </CardBody>
    </Card>
  );
}

export default ProgressBarWithDiffrentColor;
