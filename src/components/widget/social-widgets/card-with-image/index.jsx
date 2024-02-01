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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function CardWithImage() {
  const Card2 = () => {
    return (
      <Col md={6}>
        <Card className="card-widget">
          <CardHeader>
            <div className="user-block">
              <img
                className="img-circle"
                src="/images/user-one.jpg"
                alt="User Image"
              />
              <span className="username">
                <a href="#">Jonathan Burke Jr.</a>
              </span>
              <span className="description">
                Shared publicly - 7:30 PM Today
              </span>
            </div>
            <div className="card-tools">
              <Button className="btn-tool" title="Mark as read">
                <i className="fa fa-circle"></i>
              </Button>
              <Button className="btn-tool" data-card-widget="collapse">
                <i className="fa fa-minus"></i>
              </Button>
              <Button className="btn-tool" data-card-widget="remove">
                <i className="fa fa-times"></i>
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at
            </p>

            <p>
              the coast of the Semantics, a large language ocean. A small river
              named Duden flows by their place and supplies it with the
              necessary regelialia. It is a paradisematic country, in which
              roasted parts of sentences fly into your mouth.
            </p>

            <div className="attachment-block clearfix">
              <img
                className="attachment-img"
                src="/images/photo2.png"
                alt="Attachment Image"
              />

              <div className="attachment-pushed">
                <h4 className="attachment-heading">
                  <a href="https://www.lipsum.com/">
                    Lorem ipsum text generator
                  </a>
                </h4>

                <div className="attachment-text">
                  Description about the attachment can be placed here. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry... <a href="#">more</a>
                </div>
              </div>
            </div>

            <Button className="btn-default btn-sm">
              <i className="fa fa-share"></i> Share
            </Button>
            <Button className="btn-default btn-sm">
              <i className="fa fa-thumbs-up"></i> Like
            </Button>
            <span className="float-right text-muted">
              45 likes - 2 comments
            </span>
          </CardBody>
          <CardFooter className="card-comments">
            <div className="card-comment">
              <img
                className="img-circle img-sm"
                src="/images/user-three.jpg"
                alt="User Image"
              />

              <div className="comment-text">
                <span className="username">
                  Maria Gonzales
                  <span className="text-muted float-right">
                    8:03 PM Today
                  </span>{" "}
                </span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
            <div className="card-comment">
              <img
                className="img-circle img-sm"
                src="/images/user-five.jpg"
                alt="User Image"
              />

              <div className="comment-text">
                <span className="username">
                  Nora Havisham
                  <span className="text-muted float-right">
                    8:03 PM Today
                  </span>{" "}
                </span>
                The point of using Lorem Ipsum is that it hrs a morer-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </div>
            </div>
          </CardFooter>
          <CardFooter>
            <Form action="#" method="post">
              <img
                className="img-fluid img-circle img-sm"
                src="/images/user-four.jpg"
                alt="Alt Text"
              />
              <div className="img-push">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Press enter to post comment"
                />
              </div>
            </Form>
          </CardFooter>
        </Card>
      </Col>
    );
  };
  return (
    <Row>
      <Col md={6}>
        <Card className="card-widget">
          <CardHeader>
            <div className="user-block">
              <img className="img-circle" src="/images/user-one.jpg" alt="User Image" />
              <span className="username">
                <a href="#">Jonathan Burke Jr.</a>
              </span>
              <span className="description">
                Shared publicly - 7:30 PM Today
              </span>
            </div>
            <div className="card-tools">
              <Button className="btn-tool" title="Mark as read">
                <i className="fa fa-circle"></i>
              </Button>
              <Button className="btn-tool" data-card-widget="collapse">
                <i className="fa fa-minus"></i>
              </Button>
              <Button className="btn btn-tool" data-card-widget="remove">
                <i className="fa fa-times"></i>
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <img className="img-fluid pad" src="/images/photo2.png" alt="Photo" />

            <p>I took this photo this morning. What do you guys think?</p>
            <Button className="btn-default btn-sm">
              <i className="fa fa-share"></i> Share
            </Button>
            <Button className="btn-default btn-sm ml-2">
              <i className="fa fa-thumbs-up"></i> Like
            </Button>
            <span className="float-right text-muted">
              127 likes - 3 comments
            </span>
          </CardBody>
          <CardFooter className="card-comments">
            <div className="card-comment">
              <img
                className="img-circle img-sm"
                src="/images/user-one.jpg"
                alt="User Image"
              />
              <div className="comment-text">
                <span className="username">
                  Maria Gonzales
                  <span className="text-muted float-right">
                    8:03 PM Today
                  </span>{" "}
                </span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
            <div className="card-comment">
              <img
                className="img-circle img-sm"
                src="/images/user-four.jpg"
                alt="User Image"
              />

              <div className="comment-text">
                <span className="username">
                  Luna Stark
                  <span className="text-muted float-right">
                    8:03 PM Today
                  </span>{" "}
                </span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
            </div>
          </CardFooter>
          <CardFooter>
            <Form action="#" method="post">
              <img
                className="img-fluid img-circle img-sm"
                src="/images/user-four.jpg"
                alt="Alt Text"
              />
              <div className="img-push">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Press enter to post comment"
                />
              </div>
            </Form>
          </CardFooter>
        </Card>
      </Col>
      <Card2 />
    </Row>
  );
}
