import React from "react";
import { Button } from "../../../../App";

import {
  Col,
  Card,
  Row,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Badge,
  List,
  Media,
} from "reactstrap";


export default function ChatCustomShadowsVariations() {
  return (
    <>
      <h5 className="mb-2">
        Custom Shadows Variations
        <small>
          <i>Using Bootstrap's Shadow Utility</i>
        </small>
      </h5>
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-primary card-outline direct-chat direct-chat-primary shadow-none">
            <CardHeader>
              <CardTitle>Shadow - None</CardTitle>
              <div className="card-tools">
                <Badge color="primary" title="3 new Message">
                  3
                </Badge>
                <Button className="btn btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  className="btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <i className="fa fa-comments"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* <!-- Message. Default to the left --> */}
                <div className="mb-3">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* <!-- /.direct-chat-infos --> */}
                  <img
                    className="direct-chat-img"
                    src="/images/user-one.jpg"
                    alt="Message User Image"
                  />
                  {/* <!-- /.direct-chat-img --> */}
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  {/* <!-- /.direct-chat-text --> */}
                </div>
                {/* <!-- /.direct-chat-msg --> */}

                {/* <!-- Message to the right --> */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  <img
                    className="direct-chat-img"
                    src="/images/user-three.jpg"
                    alt="Message User Image"
                  />
                  <div className="direct-chat-text">You better believe it!</div>
                </div>
              </div>
              <div className="direct-chat-contacts">
                <List type="unstyled">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/images/user-one.jpg"
                        alt="User Avatar"
                      />

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                    </a>
                  </li>
                </List>
              </div>
            </CardBody>
            <CardFooter>
              <Form>
                <InputGroup>
                  <Input
                    className="form-control"
                    name="message"
                    placeholder="Type Message ..."
                    type="text"
                  />
                  <span className="input-group-append">
                    <Button color="primary">Send</Button>
                  </span>
                </InputGroup>
              </Form>
            </CardFooter>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-success card-outline direct-chat direct-chat-success shadow-sm">
            <CardHeader>
              <CardTitle>Shadow - Small</CardTitle>
              <div className="card-tools">
                <Badge color="success" title="3 new Message">
                  3
                </Badge>
                <Button className="btn btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  className="btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <i className="fa fa-comments"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* <!-- Message. Default to the left --> */}
                <div className="mb-3">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* <!-- /.direct-chat-infos --> */}
                  <img
                    className="direct-chat-img"
                    src="/images/user-one.jpg"
                    alt="Message User Image"
                  />
                  {/* <!-- /.direct-chat-img --> */}
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  {/* <!-- /.direct-chat-text --> */}
                </div>
                {/* <!-- /.direct-chat-msg --> */}

                {/* <!-- Message to the right --> */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  <img
                    className="direct-chat-img"
                    src="/images/user-three.jpg"
                    alt="Message User Image"
                  />
                  <div className="direct-chat-text">You better believe it!</div>
                </div>
              </div>
              <div className="direct-chat-contacts">
                <List type="unstyled">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/images/user-one.jpg"
                        alt="User Avatar"
                      />

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                    </a>
                  </li>
                </List>
              </div>
            </CardBody>
            <CardFooter>
              <Form>
                <InputGroup>
                  <Input
                    className="form-control"
                    name="message"
                    placeholder="Type Message ..."
                    type="text"
                  />
                  <span className="input-group-append">
                    <Button color="primary">Send</Button>
                  </span>
                </InputGroup>
              </Form>
            </CardFooter>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-warning direct-chat direct-chat-warning shadow">
            <CardHeader>
              <CardTitle>Shadow - Regular</CardTitle>
              <div className="card-tools">
                <Badge color="danger" title="3 new Message">
                  3
                </Badge>
                <Button className="btn btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  className="btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <i className="fa fa-comments"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* <!-- Message. Default to the left --> */}
                <div className="mb-3">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* <!-- /.direct-chat-infos --> */}
                  <img
                    className="direct-chat-img"
                    src="/images/user-one.jpg"
                    alt="Message User Image"
                  />
                  {/* <!-- /.direct-chat-img --> */}
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  {/* <!-- /.direct-chat-text --> */}
                </div>
                {/* <!-- /.direct-chat-msg --> */}

                {/* <!-- Message to the right --> */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  <img
                    className="direct-chat-img"
                    src="/images/user-three.jpg"
                    alt="Message User Image"
                  />
                  <div className="direct-chat-text">You better believe it!</div>
                </div>
              </div>
              <div className="direct-chat-contacts">
                <List type="unstyled">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/images/user-one.jpg"
                        alt="User Avatar"
                      />

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                    </a>
                  </li>
                </List>
              </div>
            </CardBody>
            <CardFooter>
              <Form>
                <InputGroup>
                  <Input
                    className="form-control"
                    name="message"
                    placeholder="Type Message ..."
                    type="text"
                  />
                  <span className="input-group-append">
                    <Button color="primary">Send</Button>
                  </span>
                </InputGroup>
              </Form>
            </CardFooter>
          </Card>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Card className="card-danger direct-chat direct-chat-danger shadow-lg">
            <CardHeader>
              <CardTitle>Shadow - Large</CardTitle>
              <div className="card-tools">
                <Badge color="danger" title="3 new Message">
                  3
                </Badge>
                <Button className="btn btn-tool" data-card-widget="collapse">
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  className="btn-tool"
                  title="Contacts"
                  data-widget="chat-pane-toggle"
                >
                  <i className="fa fa-comments"></i>
                </Button>
                <Button className="btn-tool" data-card-widget="remove">
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* <!-- Message. Default to the left --> */}
                <div className="mb-3">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">
                      Alexander Pierce
                    </span>
                    <span className="direct-chat-timestamp float-right">
                      23 Jan 2:00 pm
                    </span>
                  </div>
                  {/* <!-- /.direct-chat-infos --> */}
                  <img
                    className="direct-chat-img"
                    src="/images/user-one.jpg"
                    alt="Message User Image"
                  />
                  {/* <!-- /.direct-chat-img --> */}
                  <div className="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                  </div>
                  {/* <!-- /.direct-chat-text --> */}
                </div>
                {/* <!-- /.direct-chat-msg --> */}

                {/* <!-- Message to the right --> */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">
                      Sarah Bullock
                    </span>
                    <span className="direct-chat-timestamp float-left">
                      23 Jan 2:05 pm
                    </span>
                  </div>
                  <img
                    className="direct-chat-img"
                    src="/images/user-three.jpg"
                    alt="Message User Image"
                  />
                  <div className="direct-chat-text">You better believe it!</div>
                </div>
              </div>
              <div className="direct-chat-contacts">
                <List type="unstyled">
                  <li>
                    <a href="#">
                      <img
                        className="contacts-list-img"
                        src="/images/user-one.jpg"
                        alt="User Avatar"
                      />

                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Count Dracula
                          <small className="contacts-list-date float-right">
                            2/28/2015
                          </small>
                        </span>
                        <span className="contacts-list-msg">
                          How have you been? I was...
                        </span>
                      </div>
                    </a>
                  </li>
                </List>
              </div>
            </CardBody>
            <CardFooter>
              <Form>
                <InputGroup>
                  <Input
                    className="form-control"
                    name="message"
                    placeholder="Type Message ..."
                    type="text"
                  />
                  <span className="input-group-append">
                    <Button color="primary">Send</Button>
                  </span>
                </InputGroup>
              </Form>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
}
