import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

function Icons() {
  return (
    <Card outline color="primary">
      <CardHeader>
        <CardTitle>Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <p> You can use any font library you like with AdminLTE 3.</p>
        <strong>Recommendations</strong>
        <div>
          <a href="https://fontawesome.com/">Font Awesome</a> <br />
          <a href="https://useiconic.com/open/">Iconic Icons</a>
          <br />
          <a href="https://ionicons.com/"> Ion Icons</a>
        </div>
      </CardBody>
    </Card>
  );
}

export default Icons;
