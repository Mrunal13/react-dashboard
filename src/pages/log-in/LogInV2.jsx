import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  InputGroup,
  InputGroupText,
  Input,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";

const LogInV2 = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <Card className="card-outline card-primary">
          <CardHeader className="text-center">
            <a href="../../index2.html" className="h1">
              <b>Admin</b>LTE
            </a>
          </CardHeader>
          <CardBody>
            <p className="login-box-msg">Sign in to start your session</p>

            <Form action="../../index3.html" method="post">
              <InputGroup className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <InputGroupText className="input-group-text">
                    <span className="fa fa-envelope"></span>
                  </InputGroupText>
                </div>
              </InputGroup>
              <InputGroup className="mb-3">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <InputGroupText className="input-group-text">
                    <span className="fa fa-lock"></span>
                  </InputGroupText>
                </div>
              </InputGroup>
              <Row>
                <Col md={8}>
                  <div className="icheck-primary">
                    <Input type="checkbox" id="remember" />
                    <Label for="remember" className="form-label">
                      Remember Me
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Button type="submit" className="btn-primary btn-block">
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>

            <div className="social-auth-links text-center mt-2 mb-3">
              <Button className=" btn-block btn-primary">
                <i className="fa fa-facebook mr-2"></i> Sign in using Facebook
              </Button>
              <Button className=" btn-block btn-danger">
                <i className="fa fa-google-plus mr-2"></i> Sign in using Google+
              </Button>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LogInV2;
