import React from "react";
import { Col, Row } from "reactstrap";
import "./InfoBoxShadow.css";

export default function InfoWithShadow() {
  return (
    <>
      <h5 className="mb-2">
        Info Box With Custom Shadows
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box shadow-none">
            <span className="info-box-icon bg-info">
              <i className="fa fa-envelope"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">None</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box shadow-sm">
            <span className="info-box-icon bg-success">
              <i className="fa fa-flag"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Small</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box shadow">
            <span className="info-box-icon bg-warning">
              <i className="fa fa-copy"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Regular</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box shadow-lg">
            <span className="info-box-icon bg-danger">
              <i className="fa fa-star"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Large</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
      </Row>
    </>
  );
}
