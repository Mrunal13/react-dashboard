import React from "react";
import { Col, Row } from "reactstrap";

export default function SmallBox() {
  return (
    <>
      <h5 className="mb-2 mt-4">Small Box</h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="fa fa-user-plus"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="fa fa-pie-chart" aria-hidden="true"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          {/* <!-- small card --> */}
          <div className="small-box bg-info">
            {/* <!-- Loading (remove the following to stop the loading)--> */}
            <div className="overlay">
              <i className="fa fa-3x fa-sync"></i>
            </div>
            {/* <!-- end loading --> */}
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="small-box bg-success">
            {/* <!-- Loading (remove the following to stop the loading)--> */}
            <div className="overlay dark">
              <i className="fa fa-3x fa-sync"></i>
            </div>
            {/* <!-- end loading --> */}
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fa fa-arrow-circle-right"></i>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}
