import React from "react";
import {
  Col,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  CardFooter,
  Badge,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function CardWithImageOverlay() {
  return (
    <>
      <h5 className="mb-2">Card with Image Overlay </h5>
      <Card className="card-success">
        <CardBody>
          <Row>
            <Col md={12} lg={6} xl={4}>
              <Card className=" mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="/images/photo1.png"
                  alt="Dist Photo 1"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <CardTitle className="text-primary text-white">
                    Card Title
                  </CardTitle>
                  <p className="card-text text-white pb-2 pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 2 mins ago
                  </a>
                </div>
              </Card>
            </Col>
            <Col md={12} lg={6} xl={4}>
              <Card className="mb-2">
                <img
                  className="card-img-top"
                  src="/images/photo2.png"
                  alt="Dist Photo 2"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <CardTitle className="text-white mt-5 pt-2">
                    Card Title
                  </CardTitle>
                  <p className="card-text pb-2 pt-1 text-white">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing elit <br />
                    sed do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 15 hours ago
                  </a>
                </div>
              </Card>
            </Col>
            <Col md={12} lg={6} xl={4}>
              <Card className="mb-2">
                <img
                  className="card-img-top"
                  src="/images/photo3.jpg"
                  alt="Dist Photo 3"
                />
                <div className="card-img-overlay">
                  <CardTitle className="text-primary">Card Title</CardTitle>
                  <p className="card-text pb-1 pt-1 text-white">
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-primary">
                    Last update 3 days ago
                  </a>
                </div>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}
