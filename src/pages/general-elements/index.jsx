import React from "react";
import {
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const GeneralElementsForm = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Genera Form</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">General Form</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <Container fluid>
          <Row>
            <Col>
              <QuickExampleFormCard />
              <DifferentStylesForm />
              <InputAddons />
              <HorizontalForm />
            </Col>
            <Col>
              <DifferentHeights />
              <DifferentWidth />
              <GeneralElements />
              <CustomElements />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default GeneralElementsForm;

const QuickExampleFormCard = () => {
  return (
    <Card className="card-primary">
      <CardHeader>
        <CardTitle tag={"h3"}>Quick Example</CardTitle>
      </CardHeader>
      <Form>
        <CardBody>
          <FormGroup>
            <Label for="exampleInputEmail1">Email address</Label>
            <Input
              type="email"
              id="exampleInputEmail1"
              name="email"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleInputPassword1">Password</Label>
            <Input
              type="password"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleInputFile">File input</Label>
            <Input type="file" id="exampleInputFile" name="file" />
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" id="exampleCheck1" />
            <Label check for="exampleCheck1">
              Check me out
            </Label>
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Button color="primary">Submit</Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

const DifferentStylesForm = () => {
  return (
    <Card className="card-primary">
      <CardHeader>
        <CardTitle tag="h3">Different Styles</CardTitle>
      </CardHeader>
      <CardBody>
        <h4>Input</h4>
        <FormGroup>
          <Label for="exampleInputBorder">
            Bottom Border only <code>.form-control-border</code>
          </Label>
          <Input
            type="text"
            className="form-control-border"
            id="exampleInputBorder"
            placeholder=".form-control-border"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleInputBorderWidth2">
            Bottom Border only 2px Border
            <code>.form-control-border.border-width-2</code>
          </Label>
          <Input
            type="text"
            className="form-control-border border-width-2"
            id="exampleInputBorderWidth2"
            placeholder=".form-control-border.border-width-2"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleInputRounded0">
            Flat <code>.rounded-0</code>
          </Label>
          <Input
            type="text"
            className="rounded-0"
            id="exampleInputRounded0"
            placeholder=".rounded-0"
          />
        </FormGroup>

        <h4>Custom Select</h4>
        <FormGroup>
          <Label for="exampleSelectBorder">
            Bottom Border only <code>.form-control-border</code>
          </Label>
          <Input
            type="select"
            id="exampleSelectBorder"
            className="custom-select form-control-border"
          >
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectBorderWidth2">
            Bottom Border only <code>.form-control-border.border-width-2</code>
          </Label>
          <Input
            type="select"
            id="exampleSelectBorderWidth2"
            className="custom-select form-control-border border-width-2"
          >
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectRounded0">
            Flat <code>.rounded-0</code>
          </Label>
          <Input
            type="select"
            id="exampleSelectRounded0"
            className="custom-select rounded-0"
          >
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
          </Input>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

const InputAddons = () => {
  return (
    <>
      <Card
        // color="card-info"
        className="card-info"
      >
        <CardHeader>
          <CardTitle tag={"h3"}>Input Addon</CardTitle>
        </CardHeader>
        <CardBody>
          <InputGroup className="mb-3">
            <InputGroupText>@</InputGroupText>
            <Input type="text" placeholder="Username" />
          </InputGroup>
          <InputGroup className="mb-3">
            <Input type="text" placeholder="" />
            <InputGroupText>.00</InputGroupText>
          </InputGroup>
          <InputGroup>
            <InputGroupText>$</InputGroupText>
            <Input type="text" placeholder="" />
            <InputGroupText>.00</InputGroupText>
          </InputGroup>

          <h4>With icons</h4>

          <InputGroup className="mb-3">
            <InputGroupText>
              <i className="fas fa-envelope"></i>
            </InputGroupText>
            <Input type="email" placeholder="Email" />
          </InputGroup>

          <InputGroup className="mb-3">
            <Input type="text" placeholder="" />
            <InputGroupText>
              <i className="fas fa-check"></i>
            </InputGroupText>
          </InputGroup>

          <InputGroup>
            <InputGroupText>
              <i className="fas fa-dollar-sign"></i>
            </InputGroupText>
            <Input type="text" placeholder="" />
            <InputGroupText>
              <i className="fas fa-ambulance"></i>
            </InputGroupText>
          </InputGroup>

          <h5 className="mt-4 mb-2">With checkbox and radio inputs</h5>

          <Row>
            <Col>
              <InputGroup>
                <InputGroupText>
                  <Input
                    addon
                    aria-label="Checkbox for following text input"
                    type="checkbox"
                  />
                </InputGroupText>
                <Input placeholder="" />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroupText>
                  <Input
                    addon
                    aria-label="radio for following text input"
                    type="radio"
                  />
                </InputGroupText>
                <Input placeholder="" />
              </InputGroup>
            </Col>
          </Row>

          <h5 className="mt-4 mb-2">With buttons</h5>

          <p>
            Large: <code>.input-group.input-group-lg</code>
          </p>

          <InputGroup className="input-group-lg">
            <ButtonDropdown toggle={function noRefCheck() {}}>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                className="btn-warning"
              >
                Action
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Input />
          </InputGroup>

          <p>Normal</p>
          <InputGroup className="mb-3">
            <Button className="btn-danger">Action</Button>
            <Input />
          </InputGroup>

          <p>
            Small <code>.input-group.input-group-sm</code>
          </p>
          <InputGroup size="sm">
            <Input />
            <Button className="btn btn-info btn-flat">Go!</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </>
  );
};

const HorizontalForm = () => {
  return (
    <Card className="card-info">
      <CardHeader>
        <CardTitle tag={"h3"}>Horizontal Form</CardTitle>
      </CardHeader>
      <Form className="form-horizontal">
        <CardBody>
          <FormGroup row>
            <Label for="inputEmail3" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="inputPassword3" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col
              sm={{
                size: 10,
              }}
              className="offset-sm-2"
            >
              <FormGroup check>
                <Input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck2"
                />
                <Label check for="exampleCheck2">
                  Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Button type="submit" className="btn-info">
            Sign in
          </Button>
          <Button type="submit" className="btn-default float-right">
            Cancel
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
};

const DifferentHeights = () => {
  return (
    <Card className="card-success">
      <CardHeader>
        <CardTitle tag={"h3"}>Different Height</CardTitle>
      </CardHeader>
      <CardBody>
        <Input bsSize="lg" placeholder=".form-control-lg" />
        <br />
        <Input placeholder="Default input" />
        <br />
        <Input bsSize="sm" placeholder=".form-control-sm" />
      </CardBody>
    </Card>
  );
};

const DifferentWidth = () => {
  return (
    <Card className="card-danger">
      <CardHeader>
        <CardTitle tag={"h3"}>Different Width</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={3}>
            <Input placeholder=".col-3" />
          </Col>
          <Col md={4}>
            <Input placeholder=".col-4" />
          </Col>
          <Col md={5}>
            <Input placeholder=".col-5" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const GeneralElements = () => {
  return (
    <Card className="card-warning">
      <CardHeader>
        <CardTitle tag={"h3"}>General Elements</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Text</Label>
                <Input placeholder="Enter ..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Text Disabled</Label>
                <Input placeholder="Enter ..." disabled />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Textarea</Label>
                <Input type="textarea" rows="3" placeholder="Enter ..." />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Textarea Disabled</Label>
                <Input
                  type="textarea"
                  rows="3"
                  placeholder="Enter ..."
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="inputSuccess">
              <i className="fa fa-check"></i> Input with success
            </Label>
            <Input valid id="inputSuccess" placeholder="Enter ..." />
          </FormGroup>
          <FormGroup>
            <Label for="inputWarning">
              <i className="fa fa-bell"></i> Input with warning
            </Label>
            <Input
              className="is-warning"
              id="inputWarning"
              placeholder="Enter ..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="inputError">
              <i className="fa fa-times-circle"></i> Input with error
            </Label>
            <Input invalid id="inputError" placeholder="Enter ..." />
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label className="form-check-label">Checkbox</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" checked />
                  <Label className="form-check-label">Checkbox checked</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" disabled />
                  <Label className="form-check-label">Checkbox disabled</Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormGroup check>
                  <Input type="radio" name="radio1" />
                  <Label className="form-check-label">Radio</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" name="radio1" checked />
                  <Label className="form-check-label">Radio checked</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" disabled />
                  <Label className="form-check-label">Radio disabled</Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Select</Label>
                <Input type="select" className="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Select Disabled</Label>
                <Input type="select" className="form-control" disabled>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Select Multiple</Label>
                <Input type="select" multiple className="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Select Multiple Disabled</Label>
                <Input type="select" multiple className="form-control" disabled>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

const CustomElements = () => {
  return (
    <Card className="card-secondary">
      <CardHeader>
        <CardTitle>Custom Elements</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col
              md={6}
              // className="col-sm-6"
            >
              <FormGroup>
                <FormGroup check className="custom-control custom-checkbox">
                  <Input
                    className="custom-control-input"
                    type="checkbox"
                    id="customCheckbox1"
                    value="option1"
                  />
                  <Label for="customCheckbox1" className="custom-control-label">
                    Custom Checkbox
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-checkbox">
                  <Input
                    className="custom-control-input"
                    type="checkbox"
                    id="customCheckbox2"
                    checked
                  />
                  <Label for="customCheckbox2" className="custom-control-label">
                    Custom Checkbox checked
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-checkbox">
                  <Input
                    className="custom-control-input"
                    type="checkbox"
                    id="customCheckbox3"
                    disabled
                  />
                  <Label for="customCheckbox3" className="custom-control-label">
                    Custom Checkbox disabled
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-checkbox">
                  <Input
                    className="custom-control-input custom-control-input-danger"
                    type="checkbox"
                    id="customCheckbox4"
                    checked
                  />
                  <Label for="customCheckbox4" className="custom-control-label">
                    Custom Checkbox with custom color
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-checkbox">
                  <Input
                    className="custom-control-input custom-control-input-danger custom-control-input-outline"
                    type="checkbox"
                    id="customCheckbox5"
                    checked
                  />
                  <Label for="customCheckbox5" className="custom-control-label">
                    Custom Checkbox with custom color outline
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col
              md={6}
              // className="col-sm-6"
            >
              {/* <!-- radio --> */}
              <FormGroup>
                <FormGroup check className="custom-control custom-radio">
                  <Input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                  />
                  <Label
                    check
                    for="customRadio1"
                    className="custom-control-label"
                  >
                    Custom Radio
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-radio">
                  <Input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    checked
                  />
                  <Label
                    check
                    for="customRadio2"
                    className="custom-control-label"
                  >
                    Custom Radio checked
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-radio">
                  <Input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio3"
                    disabled
                  />
                  <Label
                    check
                    for="customRadio3"
                    className="custom-control-label"
                  >
                    Custom Radio disabled
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-radio">
                  <Input
                    className="custom-control-input custom-control-input-danger"
                    type="radio"
                    id="customRadio4"
                    name="customRadio2"
                    checked
                  />
                  <Label
                    check
                    for="customRadio4"
                    className="custom-control-label"
                  >
                    Custom Radio with custom color
                  </Label>
                </FormGroup>
                <FormGroup check className="custom-control custom-radio">
                  <Input
                    className="custom-control-input custom-control-input-danger custom-control-input-outline"
                    type="radio"
                    id="customRadio5"
                    name="customRadio2"
                  />
                  <Label
                    check
                    for="customRadio5"
                    className="custom-control-label"
                  >
                    Custom Radio with custom color outline
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col
              md={6}
              // className="col-sm-6"
            >
              <FormGroup>
                <Label>Custom Select</Label>
                <Input type="select" className="custom-select">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} className="col-sm-6">
              <FormGroup>
                <Label>Custom Select Disabled</Label>
                <Input type="select" className="custom-select" disabled>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col
              md={6}
              // className="col-sm-6"
            >
              <FormGroup>
                <Label>Custom Select Multiple</Label>
                <Input type="select" multiple className="custom-select">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col
              md={6}
              // className="col-sm-6"
            >
              <FormGroup>
                <Label>Custom Select Multiple Disabled</Label>
                <Input
                  type="select"
                  multiple
                  className="custom-select"
                  disabled
                >
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <FormGroup switch className="custom-control custom-switch">
              <Input
                type="switch"
                role="switch"
                className="custom-control-input"
                id="customSwitch1"
              />
              <Label check className="custom-control-label" for="customSwitch1">
                Toggle this custom switch element
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <FormGroup
              switch
              className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
            >
              <Input
                role="switch"
                type="switch"
                className="custom-control-input"
                id="customSwitch3"
              />
              <Label className="custom-control-label" for="customSwitch3">
                Toggle this custom switch element with custom colors
                danger/success
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <FormGroup switch className="custom-control custom-switch">
              <Input
                type="switch"
                role="switch"
                className="custom-control-input"
                disabled
                id="customSwitch2"
              />
              <Label className="custom-control-label" for="customSwitch2">
                Disabled custom switch element
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Label for="customRange1">Custom range</Label>
            <Input type="range" className="custom-range" id="customRange1" />
          </FormGroup>
          <FormGroup>
            <Label for="customRange2">Custom range (custom-range-danger)</Label>
            <Input
              type="range"
              className="custom-range custom-range-danger"
              id="customRange2"
            />
          </FormGroup>
          <FormGroup>
            <Label for="customRange3">Custom range (custom-range-teal)</Label>
            <Input
              type="range"
              className="custom-range custom-range-teal"
              id="customRange3"
            />
          </FormGroup>
          <FormGroup>
            {/* <!-- <Label for="customFile">Custom File</Label> --> */}

            <FormGroup className="custom-file">
              <Input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <Label className="custom-file-label" for="customFile">
                Choose file
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
