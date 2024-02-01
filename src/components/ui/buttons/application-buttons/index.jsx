import React from "react";
import { Badge, Card, CardHeader, CardTitle } from "reactstrap";
import { Button } from "../../../../App";

function ApplicationButtons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Buttons</CardTitle>
      </CardHeader>
      <div className="card-body">
        <p>
          Add the classNamees <code>.btn.btn-app</code> to an
          <code>&lt;a{">"}</code> tag to achieve the following:
        </p>
        <Button className="btn-app">
          <i className="fa fa-edit"></i> Edit
        </Button>
        <Button className="btn-app">
          <i className="fa fa-play"></i> Play
        </Button>
        <Button className="btn-app">
          <i className="fa fa-pause"></i> Pause
        </Button>
        <Button className=" btn-app">
          <i className="fa fa-save"></i> Save
        </Button>
        <Button className="btn-app">
          <Badge color="warning">3</Badge>
          <i className="fa fa-bullhorn"></i> Notifications
        </Button>
        <Button className=" btn-app">
          <Badge color="success">300</Badge>
          <i className="fa fa-barcode"></i> Products
        </Button>
        <Button className=" btn-app">
          <Badge color="purple">891</Badge>
          <i className="fa fa-users"></i> Users
        </Button>
        <Button className=" btn-app">
          <Badge color="teal">67</Badge>
          <i className="fa fa-inbox"></i> Orders
        </Button>
        <Button className=" btn-app">
          <Badge color="info">12</Badge>
          <i className="fa fa-envelope"></i> Inbox
        </Button>
        <Button className="btn btn-app">
          <Badge color="danger">531</Badge>
          <i className="fa fa-heart"></i> Likes
        </Button>

        <p>Application Buttons with Custom Colors</p>
        <Button className="btn-app ">
          <Badge color="success">300</Badge>
          <i className="fa fa-barcode"></i> Products
        </Button>
        <Button color="success" className="btn-app bg-success">
          <Badge color="purple">891</Badge>
          <i className="fa fa-users"></i> Users
        </Button>
        <Button className="btn-app bg-danger">
          <Badge color="teal">67</Badge>
          <i className="fa fa-inbox"></i> Orders
        </Button>
        <Button className="btn-app bg-warning">
          <Badge color="info">12</Badge>
          <i className="fa fa-envelope"></i> Inbox
        </Button>
        <Button className="btn-app bg-info">
          <Badge color="danger">531</Badge>
          <i className="fa fa-heart"></i> Likes
        </Button>
      </div>
    </Card>
  );
}

export default ApplicationButtons;
