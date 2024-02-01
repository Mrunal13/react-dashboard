import React from "react";
import BreadCrumb from "../../../components/breadcrumb";
import { Container } from "reactstrap";
import NavBarExample from "../../../components/ui/navbar-and-tab/navbar-example";
import CardTabs from "../../../components/ui/navbar-and-tab/card-tabs";
import OutlineCardTabs from "../../../components/ui/navbar-and-tab/outline-card-tabs";
import NavTabWithoverlay from "../../../components/ui/navbar-and-tab/navtabs-with-overlay";
import VerticalTabs from "../../../components/ui/navbar-and-tab/vertical-tabs";
import TabsCustomContent from "../../../components/ui/navbar-and-tab/tabs-custom-content";

function NavBarAndTabs() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <BreadCrumb
          title="Navbar & Tabs new"
          item1="Home"
          item2="Navbar & Tabs"
        />
      </section>
      <section className="content">
        <Container fluid>
          <NavBarExample />
          <CardTabs />
          <OutlineCardTabs />
          <NavTabWithoverlay />
          <VerticalTabs />
          <TabsCustomContent />
        </Container>
      </section>
    </div>
  );
}

export default NavBarAndTabs;
