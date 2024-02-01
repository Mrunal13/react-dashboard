import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TabContent,
  TabPane,
} from "reactstrap";
function Tabs() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <>
    <h5 class="mt-4 mb-2">Tabs in Cards</h5>
    <Row>
      <Col>
        <Card>
          <CardHeader className="d-flex p-0">
            <CardTitle className="p-3">Tabs</CardTitle>
            <Nav pills className="ml-auto p-2">
              <NavItem>
                <NavLink active href="#tab_1" data-toggle="tab">
                  Tab 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#tab_2" data-toggle="tab">
                  {" "}
                  Tab 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#tab_3" data-toggle="tab">
                  Tab 3
                </NavLink>
              </NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Something else here</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Separated link</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent activeTab="1">
              <TabPane tabId="1" id="tab_1">
                {" "}
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should be
                incapable of drawing a single stroke at the present moment; and
                yet I feel that I never was a greater artist than now.
              </TabPane>
              <TabPane tabId="2" id="tab_2">
                {" "}
                The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages.
              </TabPane>
              <TabPane tabId="3" id="tab_3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </TabPane>
            </TabContent>
            {/* <div className="tab-content">
              <div className="tab-pane active" id="tab_1">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should be
                incapable of drawing a single stroke at the present moment; and
                yet I feel that I never was a greater artist than now.
              </div>
              <div className="tab-pane" id="tab_2">
                The European languages are members of the same family. Their
                separate existence is a myth. For science, music, sport, etc,
                Europe uses the same vocabulary. The languages only differ in
                their grammar, their pronunciation and their most common words.
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages.
              </div>
              <div className="tab-pane" id="tab_3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
    </>
  );
}

export default Tabs;
