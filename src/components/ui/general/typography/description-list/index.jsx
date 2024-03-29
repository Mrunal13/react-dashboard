import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

function DescriptionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle class="card-title">
          <i class="fa fa-text-width mr-1"></i>
          Description
        </CardTitle>
      </CardHeader>
      <CardBody>
        <dl>
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Euismod</dt>
          <dd>
            Vestibulum id ligula porta felis euismod semper eget lacinia odio
            sem nec elit.
          </dd>
          <dd>Donec id elit non mi porta gravida at eget metus.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        </dl>
      </CardBody>
    </Card>
  );
}

export default DescriptionList;
