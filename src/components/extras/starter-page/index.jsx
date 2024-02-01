import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function Starterpage() {
  return (
    <Row>
      <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle tag={"h5"}>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardLink href="#">Card link</CardLink>
            <CardLink href="#">Another link</CardLink>
          </CardBody>
        </Card>
        <Card className="card-primary card-outline">
          <CardBody>
            <CardTitle tag={"h5"}>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <CardLink href="#">Card link</CardLink>
            <CardLink href="#">Another link</CardLink>
          </CardBody>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <CardHeader>
            <CardTitle tag={"h5"} className="m-0">
              Featured
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardTitle tag={"h6"}>Special title treatment</CardTitle>

            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle tag={"h5"} className="m-0">
              Featured
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardTitle tag={"h6"}>Special title treatment</CardTitle>

            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Starterpage;
