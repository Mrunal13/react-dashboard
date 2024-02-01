import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
function TabsCustomContent() {
  const CustomContentBelow = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab1" })}
              onClick={() => toggleTab("tab1")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab2" })}
              onClick={() => toggleTab("tab2")}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab3" })}
              onClick={() => toggleTab("tab3")}
            >
              Message
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab4" })}
              onClick={() => toggleTab("tab4")}
            >
              settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="tab1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada lacus ullamcorper dui molestie, sit amet congue quam
            finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio
            magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin
            pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin id orci eu lectus blandit suscipit.
            Phasellus porta, ante et varius ornare, sem enim sollicitudin eros,
            at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor
            porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus
            pulvinar non consequat neque. Mauris lacus elit, condimentum ac
            condimentum at, semper vitae lectus. Cras lacinia erat eget sapien
            porta consectetur.
          </TabPane>
          <TabPane tabId="tab2">
            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
            Mauris pharetra purus ut ligula tempor, et vulputate metus
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus
            interdum, nisl ligula placerat mi, quis posuere purus ligula eu
            lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere
            nec nunc. Nunc euismod pellentesque diam.
          </TabPane>
          <TabPane tabId="tab3">
            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
            mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
            faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac
            tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum.
            Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
            Curabitur eleifend facilisis velit finibus tristique. Nam vulputate,
            eros non luctus efficitur, ipsum odio volutpat massa, sit amet
            sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida
            fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel
            metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare
            magna.
          </TabPane>
          <TabPane tabId="tab4">
            Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque
            magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget
            blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod
            molestie tristique. Vestibulum consectetur dolor a vestibulum
            pharetra. Donec interdum placerat urna nec pharetra. Etiam eget
            dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et
            felis ut nisl commodo dignissim. In hac habitasse platea dictumst.
            Praesent imperdiet accumsan ex sit amet facilisis.
          </TabPane>
        </TabContent>
        <div className="tab-custom-content">
          <p className="lead mb-0">Custom Content goes here</p>
        </div>
      </>
    );
  };

  const CustomContentAbove = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab1" })}
              onClick={() => toggleTab("tab1")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab2" })}
              onClick={() => toggleTab("tab2")}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab3" })}
              onClick={() => toggleTab("tab3")}
            >
              Message
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "tab4" })}
              onClick={() => toggleTab("tab4")}
            >
              settings
            </NavLink>
          </NavItem>
        </Nav>
        <div className="tab-custom-content">
          <p className="lead mb-0">Custom Content goes here</p>
        </div>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="tab1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada lacus ullamcorper dui molestie, sit amet congue quam
            finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio
            magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin
            pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Proin id orci eu lectus blandit suscipit.
            Phasellus porta, ante et varius ornare, sem enim sollicitudin eros,
            at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor
            porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus
            pulvinar non consequat neque. Mauris lacus elit, condimentum ac
            condimentum at, semper vitae lectus. Cras lacinia erat eget sapien
            porta consectetur.
          </TabPane>
          <TabPane tabId="tab2">
            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum.
            Mauris pharetra purus ut ligula tempor, et vulputate metus
            facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus
            interdum, nisl ligula placerat mi, quis posuere purus ligula eu
            lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere
            nec nunc. Nunc euismod pellentesque diam.
          </TabPane>
          <TabPane tabId="tab3">
            Morbi turpis dolor, vulputate vitae felis non, tincidunt congue
            mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus
            faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac
            tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum.
            Suspendisse ut velit condimentum, mattis urna a, malesuada nunc.
            Curabitur eleifend facilisis velit finibus tristique. Nam vulputate,
            eros non luctus efficitur, ipsum odio volutpat massa, sit amet
            sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida
            fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel
            metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare
            magna.
          </TabPane>
          <TabPane tabId="tab4">
            Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque
            magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget
            blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod
            molestie tristique. Vestibulum consectetur dolor a vestibulum
            pharetra. Donec interdum placerat urna nec pharetra. Etiam eget
            dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et
            felis ut nisl commodo dignissim. In hac habitasse platea dictumst.
            Praesent imperdiet accumsan ex sit amet facilisis.
          </TabPane>
        </TabContent>
      </>
    );
  };
  return (
    <Card className="card-primary card-outline">
      <CardHeader>
        <CardTitle>
          <i className="fas fa-edit"></i>
          Tabs Custom Content Examples
        </CardTitle>
      </CardHeader>
      <CardBody>
        <h4>Custom Content Below</h4>
        <CustomContentBelow />
        <h4 className="mt-5 ">Custom Content Above</h4>
        <CustomContentAbove />
      </CardBody>
    </Card>
  );
}

export default TabsCustomContent;
