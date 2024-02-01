import React from "react";
import {
  Col,
  Card,
  Row,
  CardFooter,
  Badge,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function SWShadowVaraition() {
  return (
    <>
      {" "}
      <h5 className="mb-2">
        Custom Shadows Variations
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <Row>
        <Col md={4}>
          <Card className="card-widget widget-user-2 shadow-sm">
            <div className="widget-user-header bg-warning">
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src="/images/user-seven.jpg"
                  alt="User Avatar"
                />
              </div>
              {/* <!-- /.widget-user-image --> */}
              <h3 className="widget-user-username">Nadia Carmichael</h3>
              <h5 className="widget-user-desc">Lead Developer</h5>
            </div>
            <CardFooter className="p-0">
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">
                    Projects
                    <Badge className="float-right" color="primary">
                      31
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Tasks
                    <Badge className="float-right" color="info">
                      5
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Completed Projects
                    <Badge className="float-right" color="success">
                      12
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Followers
                    <Badge className="float-right" color="danger">
                      842
                    </Badge>
                  </NavLink>
                </NavItem>
              </Nav>
            </CardFooter>
          </Card>
          {/* <!-- /.widget-user --> */}
        </Col>
        {/* <!-- /.col --> */}
        <Col md={4}>
          {/* <!-- Widget: user widget style 1 --> */}
          <Card className="card-widget widget-user shadow">
            {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder & CEO</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="/images/user-one.jpg"
                alt="User Avatar"
              />
            </div>
            <CardFooter>
              <Row>
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                </Col>
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                </Col>
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
        <Col md={4}>
          <Card className=" card-widget widget-user shadow-lg">
            <div
              className="widget-user-header text-white"
              style={{
                backgroundImage: 'url("/images/photo1.png")',
              }}
            >
              <h3 className="widget-user-username text-right">
                Elizabeth Pierce
              </h3>
              <h5 className="widget-user-desc text-right">Web Designer</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle"
                src="/images/user-three.jpg"
                alt="User Avatar"
              />
            </div>
            <CardFooter>
              <Row>
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                </Col>
                {/* <!-- /.col --> */}
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                </Col>
                <Col sm={4} className="border-right">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}
