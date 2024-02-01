import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
} from "reactstrap";
// import { Button } from "../../../App";

function RadioButtonGroup() {
  const [rSelected, setRSelected] = useState(null);
  console.log("rSelected", rSelected);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Radio Button Group</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive className="pad">
          <p className="mb-1">
            Radio Button Group with <code>.btn-secondary</code>
          </p>
          <ButtonGroup>
            <Button onClick={() => setRSelected(1)} active={rSelected === 1}>
              Active
            </Button>
            <Button onClick={() => setRSelected(2)} active={rSelected === 2}>
              Radio
            </Button>
            <Button onClick={() => setRSelected(3)} active={rSelected === 3}>
              Radio
            </Button>
          </ButtonGroup>

          <p className="mt-3 mb-1">
            Radio Button Group with <code>.bg-olive</code>
          </p>
          <ButtonGroup>
            <Button
              className="bg-olive"
              onClick={() => setRSelected(1)}
              active={rSelected === 1}
            >
              Active
            </Button>
            <Button
              className="bg-olive"
              onClick={() => setRSelected(2)}
              active={rSelected === 2}
            >
              Radio
            </Button>
            <Button
              className="bg-olive"
              onClick={() => setRSelected(3)}
              active={rSelected === 3}
            >
              Radio
            </Button>
          </ButtonGroup>
        </Table>
      </CardBody>
    </Card>
  );
}

export default RadioButtonGroup;
