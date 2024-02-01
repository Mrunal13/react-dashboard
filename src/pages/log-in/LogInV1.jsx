import React from "react";
import { Col } from "react-bootstrap";
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const LogInV1 = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <Card>
          <CardBody className="login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <Form action="../../index3.html" method="post">
              <InputGroup className="mb-3">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <InputGroupText>
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
                  <InputGroupText>
                    <span className="fa fa-lock"></span>
                  </InputGroupText>
                </div>
              </InputGroup>
              <Row>
                <Col md={8}>
                  <div className="icheck-primary">
                    <Input type="checkbox" id="remember" />
                    <Label for="remember">Remember Me</Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Button type="submit" className="btn-primary btn-block">
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
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

export default LogInV1;
