import React from "react";
// import "../widget.css";
import "./InfoBox.css";
import { Col, Row } from "reactstrap";

export default function InfoBox() {
  return (
    <>
      <h5 className="mb-2">Info Box</h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box">
            <span className="info-box-icon bg-info">
              <i className="fa fa-envelope"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Messages</span>
              <span className="info-box-number">1,410</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
          {/* <!-- /.info-box --> */}
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box">
            <span className="info-box-icon bg-success">
              <i className="fa fa-flag"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">410</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box">
            <span className="info-box-icon bg-warning">
              <i className="fa fa-copy"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Uploads</span>
              <span className="info-box-number">13,648</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box">
            <span className="info-box-icon bg-danger">
              <i className="fa fa-star"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">93,139</span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
      </Row>
    </>
  );
}
