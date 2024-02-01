import React from "react";
import { Col, Progress, Row } from "reactstrap";
import "./InfoBoxWithBg.css";

export default function InfoBoxWithBg() {
  return (
    <>
      <h5 className="mt-4 mb-2">
        Info Box With <code>bg-*</code>
      </h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box bg-info">
            <span className="info-box-icon">
              <i className="fa fa-bookmark"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>

              <Progress
                style={{
                  height: "2.5px",
                }}
                value={70}
              />

              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box bg-success">
            <span className="info-box-icon">
              <i className="fa fa-thumbs-up"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
              <Progress
                style={{
                  height: "2.5px",
                }}
                value={70}
              />

              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box bg-warning">
            <span className="info-box-icon">
              <i className="fa fa-calendar"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>
              <Progress
                style={{
                  height: "2.5px",
                }}
                value={70}
              />

              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <div className="info-box bg-danger">
            <span className="info-box-icon">
              <i className="fa fa-comments"></i>
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>
              <Progress
                style={{
                  height: "2.5px",
                }}
                value={70}
              />

              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* <!-- /.info-box-content --> */}
          </div>
        </Col>
      </Row>
    </>
  );
}
