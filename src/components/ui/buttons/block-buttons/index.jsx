import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { Button } from "../../../../App";

function BlockButtons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Block Buttons</CardTitle>
      </CardHeader>
      <CardBody>
        <Button className="btn-default btn-block">.btn-block</Button>
        <Button className="btn-default btn-block btn-flat">.btn-block</Button>
        <Button className="btn-default btn-block" size="sm">
          .btn-block
        </Button>
      </CardBody>
    </Card>
  );
}

export default BlockButtons;
