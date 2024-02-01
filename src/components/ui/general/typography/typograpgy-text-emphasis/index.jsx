import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

function TypograpgyTextEmphasis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title">
          <i className="fa fa-text-width mr-1"></i>
          Text Emphasis
        </CardTitle>
      </CardHeader>
      <CardBody>
        {" "}
        <p className="lead">Lead to emphasize importance</p>
        <p className="text-success">Text green to emphasize success</p>
        <p className="text-info">Text aqua to emphasize info</p>
        <p className="text-primary">Text light blue to emphasize info (2)</p>
        <p className="text-danger">Text red to emphasize danger</p>
        <p className="text-warning">Text yellow to emphasize warning</p>
        <p className="text-muted">Text muted to emphasize general</p>
      </CardBody>
    </Card>
  );
}

export default TypograpgyTextEmphasis;
