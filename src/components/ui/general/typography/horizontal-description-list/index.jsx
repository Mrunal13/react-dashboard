import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
function HorizontalDescriptionList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle class="card-title">
          <i class="fa fa-text-width mr-1"></i>
          Description Horizontal
        </CardTitle>
      </CardHeader>
      <CardBody>
        <dl>
          <Row>
            <Col sm={4}>
              <dt>Description lists</dt>
            </Col>
            <Col sm={8}>
              <dd>A description list is perfect for defining terms.</dd>
            </Col>
            <Col sm={4}>
              <dt>Euismod</dt>
            </Col>
            <Col sm={8}>
              <dd>
                {" "}
                Vestibulum id ligula porta felis euismod semper eget lacinia
                odio sem nec elit.
              </dd>
              <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            </Col>
            <Col sm={4}>
              <dt>Malesuada porta</dt>
            </Col>
            <Col sm={8}>
              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            </Col>
            <Col sm={4}>
              <dt>Felis euismod semper eget lacinia</dt>
            </Col>
            <Col sm={8}>
              <dd>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>
            </Col>
          </Row>
        </dl>
      </CardBody>
    </Card>
  );
}

export default HorizontalDescriptionList;
