import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
function NavTabWithoverlay() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <Row>
        <Col>
          <h4>Nav Tabs Overlay for loading</h4>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="card-primary">
            <CardHeader className="p-0 pt-1">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "tab1" })}
                    onClick={() => toggleTab("tab1")}
                  >
                    overlay
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "tab2" })}
                    onClick={() => toggleTab("tab2")}
                  >
                    Overlay Dark
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "tab3" })}
                    onClick={() => toggleTab("tab3")}
                  >
                    Normal Tab
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="tab1">
                  <div className="overlay-wrapper">
                    <div className="overlay">
                      <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div className="text-bold pt-2">Loading...</div>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin malesuada lacus ullamcorper dui molestie, sit amet
                    congue quam finibus. Etiam ultricies nunc non magna feugiat
                    commodo. Etiam odio magna, mollis auctor felis vitae,
                    ullamcorper ornare ligula. Proin pellentesque tincidunt
                    nisi, vitae ullamcorper felis aliquam id. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Proin id orci eu lectus blandit
                    suscipit. Phasellus porta, ante et varius ornare, sem enim
                    sollicitudin eros, at commodo leo est vitae lacus. Etiam ut
                    porta sem. Proin porttitor porta nisl, id tempor risus
                    rhoncus quis. In in quam a nibh cursus pulvinar non
                    consequat neque. Mauris lacus elit, condimentum ac
                    condimentum at, semper vitae lectus. Cras lacinia erat eget
                    sapien porta consectetur.
                  </div>
                </TabPane>
                <TabPane tabId="tab2">
                  <div className="overlay-wrapper">
                    <div className="overlay dark">
                      <i className="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div className="text-bold pt-2">Loading...</div>
                    </div>
                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                    neque magna, iaculis tempus turpis ac, ornare sodales
                    tellus. Mauris eget blandit dolor. Quisque tincidunt
                    venenatis vulputate. Morbi euismod molestie tristique.
                    Vestibulum consectetur dolor a vestibulum pharetra. Donec
                    interdum placerat urna nec pharetra. Etiam eget dapibus
                    orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                    felis ut nisl commodo dignissim. In hac habitasse platea
                    dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </TabPane>
                <TabPane tabId="tab3">
                  Morbi turpis dolor, vulputate vitae felis non, tincidunt
                  congue mauris. Phasellus volutpat augue id mi placerat mollis.
                  Vivamus faucibus eu massa eget condimentum. Fusce nec
                  hendrerit sem, ac tristique nulla. Integer vestibulum orci
                  odio. Cras nec augue ipsum. Suspendisse ut velit condimentum,
                  mattis urna a, malesuada nunc. Curabitur eleifend facilisis
                  velit finibus tristique. Nam vulputate, eros non luctus
                  efficitur, ipsum odio volutpat massa, sit amet sollicitudin
                  est libero sed ipsum. Nulla lacinia, ex vitae gravida
                  fermentum, lectus ipsum gravida arcu, id fermentum metus arcu
                  vel metus. Curabitur eget sem eu risus tincidunt eleifend ac
                  ornare magna.
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NavTabWithoverlay;
