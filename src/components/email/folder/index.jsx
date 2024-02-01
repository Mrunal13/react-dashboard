import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Button } from "../../../App";
import { NavLink as Link } from "react-router-dom";
function Folder({ buttonTitle }) {
  return (
    <>
      <Link
        to={buttonTitle === "Compose" ? "/mail/compose" : "/mailbox"}
        className="btn btn-primary btn-block mb-3"
      >
        {buttonTitle}
      </Link>
      <Card>
        <CardHeader>
          <CardTitle tag={"h3"}>Folders</CardTitle>

          <div className="card-tools">
            <Button className="btn-tool" data-card-widget="collapse">
              <i className="fa fa-minus"></i>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Nav vertical pills>
            <NavItem active>
              <NavLink href="# ">
                <i className="fa fa-inbox"></i> Inbox
                <Badge color="primary" className="float-right">
                  12
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-envelope"></i> Sent
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-file"></i> Drafts
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">
                <i className="fa fa-filter"></i> Junk
                <Badge color="warning" className="float-right">
                  65
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="far fa-trash-alt"></i> Trash
              </NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle tag={"h3"}>Labels</CardTitle>

          <div className="card-tools">
            <Button className="btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus"></i>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Nav vertical pills>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-circle text-danger"></i>
                Important
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-circle text-warning"></i> Promotions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="fa fa-circle text-primary"></i>
                Social
              </NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </>
  );
}

export default Folder;
