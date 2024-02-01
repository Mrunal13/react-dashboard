import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  CardTitle,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  FormGroup,
} from "reactstrap";
import Folder from "../folder";
import { Button } from "../../../App";
import ReactSummernotes from "./react-summernote";


function Compose() {
  
  return (
    <Row>
      <Col md={3}>
        <Folder buttonTitle="Back To InBox" />
      </Col>
      <Col md={9}>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle tag={"h3"}>Compose New Message</CardTitle>
          </CardHeader>
          <CardBody>
            <FormGroup floating>
              <Input className="form-control" placeholder="To:" />
            </FormGroup>
            <FormGroup>
              <Input className="form-control" placeholder="Subject:" />
            </FormGroup>
            <FormGroup>
              <ReactSummernotes />
       
            </FormGroup>
            <FormGroup>
              <Button className="btn-default btn-file">
                <i className="fas fa-paperclip"></i> Attachment
                <Input type="file" name="attachment" />
              </Button>
              <p className="help-block">Max. 32MB</p>
            </FormGroup>
          </CardBody>
          <CardFooter>
            <div className="float-right">
              <Button type="button" className="btn-default mr-2">
                <i className="fas fa-pencil-alt"></i> Draft
              </Button>
              <Button type="submit" color="primary">
                <i className="far fa-envelope"></i> Send
              </Button>
            </div>
            <Button type="reset" className="btn-default ">
              <i className="fas fa-times"></i> Discard
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

export default Compose;
