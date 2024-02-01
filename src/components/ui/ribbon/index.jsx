import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
function Ribbon() {
  return (
    <Row>
      <Col>
        <Card className="card-primary">
          <CardHeader>
            <CardTitle>Ribbons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper">
                    <div className="ribbon bg-primary">Ribbon</div>
                  </div>
                  Ribbon Default <br />
                  <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper ribbon-lg">
                    <div className="ribbon bg-info">Ribbon Large</div>
                  </div>
                  Ribbon Large <br />
                  <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper ribbon-xl">
                    <div className="ribbon bg-secondary">
                      Ribbon Extra Large
                    </div>
                  </div>
                  Ribbon Extra Large <br />
                  <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper ribbon-lg">
                    <div className="ribbon bg-success text-lg">Ribbon</div>
                  </div>
                  Ribbon Large <br /> with Large Text <br />
                  <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper ribbon-xl">
                    <div className="ribbon bg-warning text-lg">Ribbon</div>
                  </div>
                  Ribbon Extra Large <br /> with Large Text <br />
                  <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  className="position-relative p-3 bg-gray"
                  style={{ height: "180px" }}
                >
                  <div className="ribbon-wrapper ribbon-xl">
                    <div className="ribbon bg-danger text-xl">Ribbon</div>
                  </div>
                  Ribbon Extra Large <br /> with Extra Large Text <br />
                  <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={4}>
                <div className="position-relative">
                  <img
                    src="/images/photo1.png"
                    alt="Photo 1"
                    className="img-fluid"
                  />
                  <div className="ribbon-wrapper ribbon-lg">
                    <div className="ribbon bg-success text-lg">Ribbon</div>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div className="position-relative">
                  <img
                    src="/images/photo2.png"
                    alt="Photo 2"
                    className="img-fluid"
                  />
                  <div className="ribbon-wrapper ribbon-xl">
                    <div className="ribbon bg-warning text-lg">Ribbon</div>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  className="position-relative"
                  style={{ minHeight: "180px" }}
                >
                  <img
                    src="/images/photo3.jpg"
                    alt="Photo 3"
                    className="img-fluid"
                  />
                  <div className="ribbon-wrapper ribbon-xl">
                    <div className="ribbon bg-danger text-xl">Ribbon</div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Ribbon;
