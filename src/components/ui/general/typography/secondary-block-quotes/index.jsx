import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
function SecondaryBlockQuotes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="card-title">
          <i className="fa fa-text-width mr-1"></i>
          Secondary Block Quotes
        </CardTitle>
      </CardHeader>
      <CardBody>
        <blockquote className="quote-secondary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </blockquote>
      </CardBody>
    </Card>
  );
}

export default SecondaryBlockQuotes;
