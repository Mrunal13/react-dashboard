import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import ReactSelectSearchable from "../../components/react-select/ReactSelectSearchable";
import ReactSelectMultiSelect from "../../components/react-select/ReactSelectMultiSelect";

const AdvancedForm = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Advanced Form</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Advanced Form</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <Container fluid>
          <Card className="card-default">
            <CardHeader>
              <CardTitle tag={"h3"}>Select2 (Default Theme)</CardTitle>

              <div className="card-tools">
                <Button
                  //   type="button"
                  className="btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Minimal</Label>
                    <ReactSelectSearchable cls="" />
                  </FormGroup>

                  <FormGroup>
                    <Label>Disabled</Label>
                    <ReactSelectSearchable cls="" disabled={true} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Multiple</Label>
                    <ReactSelectMultiSelect
                      cls="select2"
                      data-placeholder="Select a State"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Disabled Result</Label>
                    <ReactSelectSearchable
                      cls=""
                      disabled={true}
                      disabledOptions={true}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <div className="card-footer">
              Visit{" "}
              <a href="https://select2.github.io/">Select2 documentation</a> for
              more examples and information about the plugin.
            </div>
          </Card>

          <Card className="card-default">
            <CardHeader>
              <CardTitle tag={"h3"}>Select2 (Bootstrap4 Theme)</CardTitle>

              <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>

              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Minimal</Label>

                    <select
                      className="form-control select2bs4"
                      //   style="width: 100%;"
                    >
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <Label>Disabled</Label>
                    <select
                      className="form-control select2bs4"
                      disabled="disabled"
                      //   style="width: 100%;"
                    >
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label>Multiple</Label>
                    <select
                      className="select2bs4"
                      multiple="multiple"
                      data-placeholder="Select a State"
                      //   style="width: 100%;"
                    >
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <Label>Disabled Result</Label>
                    <select
                      className="form-control select2bs4"
                      //   style="width: 100%;"
                    >
                      <option selected="selected">Alabama</option>
                      <option>Alaska</option>
                      <option disabled="disabled">California (disabled)</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>

            <CardFooter>
              Visit{" "}
              <a href="https://select2.github.io/">Select2 documentation</a> for
              more examples and information about the plugin.
            </CardFooter>
          </Card>

          <Card className="card-default">
            <CardHeader>
              <CardTitle tag={"h3"}>Bootstrap Duallistbox</CardTitle>

              <div className="card-tools">
                <Button
                  type="button"
                  className="btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fa fa-minus"></i>
                </Button>
                <Button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fa fa-times"></i>
                </Button>
              </div>
            </CardHeader>

            <CardBody>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label>Multiple</Label>
                    <select className="duallistbox" multiple="multiple">
                      <option selected>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              Visit{" "}
              <a href="https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme">
                Bootstrap Duallistbox
              </a>{" "}
              for more examples and information about the plugin.
            </CardFooter>
          </Card>

          <Row>
            <Col md={6}>
              <Card className="card-danger">
                <CardHeader>
                  <CardTitle tag={"h3"}>Input masks</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label>Date masks:</Label>
                    <InputGroup>
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <i className="far fa-calendar-alt"></i>
                        </InputGroupText>
                      </div>
                      <Input
                        type="text"
                        // className="form-control"
                        data-inputmask-alias="datetime"
                        data-inputmask-inputformat="dd/mm/yyyy"
                        data-mask
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <i className="far fa-calendar-alt"></i>
                        </InputGroupText>
                      </div>
                      <Input
                        type="text"
                        // className="form-control"
                        data-inputmask-alias="datetime"
                        data-inputmask-inputformat="mm/dd/yyyy"
                        data-mask
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>US phone mask:</Label>
                    <InputGroup>
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <i className="fas fa-phone"></i>
                        </InputGroupText>
                      </div>
                      <Input
                        type="text"
                        // className="form-control"
                        data-inputmask='"mask": "(999) 999-9999"'
                        data-mask
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Label>Intl US phone mask:</Label>
                    <InputGroup>
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <i className="fas fa-phone"></i>
                        </InputGroupText>
                      </div>
                      <Input
                        type="text"
                        className="form-control"
                        data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']"
                        data-mask
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label>IP mask:</Label>
                    <InputGroup>
                      <div className="input-group-prepend">
                        <InputGroupText>
                          <i className="fas fa-laptop"></i>
                        </InputGroupText>
                      </div>
                      <Input
                        type="text"
                        // className="form-control"
                        data-inputmask="'alias': 'ip'"
                        data-mask
                      />
                    </InputGroup>
                  </FormGroup>
                </CardBody>
              </Card>

              <Card className="card-info">
                <CardHeader>
                  <CardTitle tag={"h3"}>Color & Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label>Color picker:</Label>
                    <input
                      type="text"
                      className="form-control my-colorpicker1"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Color picker with addon:</Label>
                    <InputGroup className="my-colorpicker2">
                      <Input type="text" className="form-control" />

                      <div className="input-group-append">
                        <InputGroupText>
                          <i className="fas fa-square"></i>
                        </InputGroupText>
                      </div>
                    </InputGroup>
                  </FormGroup>

                  <div className="bootstrap-timepicker">
                    <FormGroup>
                      <Label>Time picker:</Label>

                      <InputGroup
                        className="date"
                        id="timepicker"
                        data-target-input="nearest"
                      >
                        {/* <div
                        className="input-group date"
                        id="timepicker"
                        data-target-input="nearest"
                      > */}
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          data-target="#timepicker"
                        />
                        <div
                          className="input-group-append"
                          data-target="#timepicker"
                          data-toggle="datetimepicker"
                        >
                          <InputGroupText>
                            <i className="far fa-clock"></i>
                          </InputGroupText>
                        </div>
                        {/* </div> */}
                      </InputGroup>
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Date picker</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>Date:</label>
                    <div
                      className="input-group date"
                      id="reservationdate"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        data-target="#reservationdate"
                      />
                      <div
                        className="input-group-append"
                        data-target="#reservationdate"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="fa fa-calendar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Date and time:</label>
                    <div
                      className="input-group date"
                      id="reservationdatetime"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        data-target="#reservationdatetime"
                      />
                      <div
                        className="input-group-append"
                        data-target="#reservationdatetime"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="fa fa-calendar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Date range:</label>

                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-calendar-alt"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control float-right"
                        id="reservation"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Date and time range:</label>

                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-clock"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control float-right"
                        id="reservationtime"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Date range button:</label>

                    <div className="input-group">
                      <button
                        type="button"
                        className="btn btn-default float-right"
                        id="daterange-btn"
                      >
                        <i className="far fa-calendar-alt"></i> Date range
                        picker
                        <i className="fas fa-caret-down"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://getdatepicker.com/5-4/">tempusdominus </a>{" "}
                  for more examples and information about the plugin.
                </div>
              </div>
              <Card className="card-success">
                <CardHeader>
                  <CardTitle tag={"h3"}>
                    iCheck Bootstrap - Checkbox &amp; Radio Inputs
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup className="icheck-primary d-inline" check>
                          {/* <div className="icheck-primary d-inline"> */}
                          <Input
                            type="checkbox"
                            id="checkboxPrimary1"
                            checked
                          />
                          <Label for="checkboxPrimary1"></Label>
                          {/* </div> */}
                        </FormGroup>
                        <FormGroup className="icheck-primary d-inline" check>
                          {/* <div className="icheck-primary d-inline"> */}
                          <Input type="checkbox" id="checkboxPrimary2" />
                          <Label for="checkboxPrimary2"></Label>
                          {/* </div> */}
                        </FormGroup>
                        <FormGroup className="icheck-primary d-inline" check>
                          {/* <div className="icheck-primary d-inline"> */}
                          <Input
                            type="checkbox"
                            id="checkboxPrimary3"
                            disabled
                            className="form-input"
                          />
                          <Label for="checkboxPrimary3">Primary checkbox</Label>
                          {/* </div> */}
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup check className="icheck-primary d-inline">
                          <Input
                            type="radio"
                            id="radioPrimary1"
                            name="r1"
                            checked
                          />
                          <Label for="radioPrimary1"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-primary d-inline">
                          <Input type="radio" id="radioPrimary2" name="r1" />
                          <Label for="radioPrimary2"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-primary d-inline">
                          <Input
                            type="radio"
                            id="radioPrimary3"
                            name="r1"
                            disabled
                          />
                          <Label for="radioPrimary3">Primary radio</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup check className="icheck-danger d-inline">
                          <Input type="checkbox" checked id="checkboxDanger1" />
                          <Label for="checkboxDanger1"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-danger d-inline">
                          <Input type="checkbox" id="checkboxDanger2" />
                          <Label for="checkboxDanger2"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-danger d-inline">
                          <Input
                            type="checkbox"
                            disabled
                            id="checkboxDanger3"
                          />
                          <Label for="checkboxDanger3">Danger checkbox</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>

                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup check className="icheck-danger d-inline">
                          <Input
                            type="radio"
                            name="r2"
                            checked
                            id="radioDanger1"
                          />
                          <Label for="radioDanger1"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-danger d-inline">
                          <Input type="radio" name="r2" id="radioDanger2" />
                          <Label for="radioDanger2"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-danger d-inline">
                          <Input
                            type="radio"
                            name="r2"
                            disabled
                            id="radioDanger3"
                          />
                          <Label for="radioDanger3">Danger radio</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup check className="icheck-success d-inline">
                          <Input
                            type="checkbox"
                            checked
                            id="checkboxSuccess1"
                          />
                          <Label for="checkboxSuccess1"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-success d-inline">
                          <Input type="checkbox" id="checkboxSuccess2" />
                          <Label for="checkboxSuccess2"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-success d-inline">
                          <Input
                            type="checkbox"
                            disabled
                            id="checkboxSuccess3"
                          />
                          <Label for="checkboxSuccess3">Success checkbox</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col sm={6}>
                      <FormGroup className="clearfix">
                        <FormGroup check className="icheck-success d-inline">
                          <Input
                            type="radio"
                            name="r3"
                            checked
                            id="radioSuccess1"
                          />
                          <Label for="radioSuccess1"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-success d-inline">
                          <Input type="radio" name="r3" id="radioSuccess2" />
                          <Label for="radioSuccess2"></Label>
                        </FormGroup>
                        <FormGroup check className="icheck-success d-inline">
                          <Input
                            type="radio"
                            name="r3"
                            disabled
                            id="radioSuccess3"
                          />
                          <Label for="radioSuccess3">Success radio</Label>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  Many more skins available.{" "}
                  <a href="https://bantikyan.github.io/icheck-bootstrap/">
                    Documentation
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-secondary">
                <CardHeader>
                  <CardTitle tag={"h3"}>Bootstrap Switch</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup switch>
                    <Input
                      type="switch"
                      role="switch"
                      name="my-checkbox"
                      checked
                      data-bootstrap-switch
                    />
                  </FormGroup>
                  <FormGroup switch>
                    <input
                      type="switch"
                      role="switch"
                      name="my-checkbox"
                      checked
                      data-bootstrap-switch
                      data-off-color="danger"
                      data-on-color="success"
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </div>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="card-default">
                <CardHeader>
                  <CardTitle tag={"h3"}>bs-stepper</CardTitle>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="bs-stepper">
                    <div className="bs-stepper-header" role="tablist">
                      <div className="step" data-target="#logins-part">
                        <button
                          type="button"
                          className="step-trigger"
                          role="tab"
                          aria-controls="logins-part"
                          id="logins-part-trigger"
                        >
                          <span className="bs-stepper-circle">1</span>
                          <span className="bs-stepper-label">Logins</span>
                        </button>
                      </div>
                      <div className="line"></div>
                      <div className="step" data-target="#information-part">
                        <button
                          type="button"
                          className="step-trigger"
                          role="tab"
                          aria-controls="information-part"
                          id="information-part-trigger"
                        >
                          <span className="bs-stepper-circle">2</span>
                          <span className="bs-stepper-label">
                            Various information
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="bs-stepper-content">
                      <div
                        id="logins-part"
                        className="content"
                        role="tabpanel"
                        aria-labelledby="logins-part-trigger"
                      >
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          onclick="stepper.next()"
                        >
                          Next
                        </button>
                      </div>
                      <div
                        id="information-part"
                        className="content"
                        role="tabpanel"
                        aria-labelledby="information-part-trigger"
                      >
                        <div className="form-group">
                          <label for="exampleInputFile">File input</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="exampleInputFile"
                              />
                              <label
                                className="custom-file-label"
                                for="exampleInputFile"
                              >
                                Choose file
                              </label>
                            </div>
                            <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary"
                          onclick="stepper.previous()"
                        >
                          Previous
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://github.com/Johann-S/bs-stepper/#how-to-use-it">
                    bs-stepper documentation
                  </a>{" "}
                  for more examples and information about the plugin.
                </div>
              </Card>
            </Col>
          </Row>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-default">
                <div className="card-header">
                  <h3 className="card-title">
                    Dropzone.js{" "}
                    <small>
                      <em>jQuery File Upload</em> like look
                    </small>
                  </h3>
                </div>
                <div className="card-body">
                  <div id="actions" className="row">
                    <div className="col-lg-6">
                      <div className="btn-group w-100">
                        <span className="btn btn-success col fileinput-button">
                          <i className="fas fa-plus"></i>
                          <span>Add files</span>
                        </span>
                        <button
                          type="submit"
                          className="btn btn-primary col start"
                        >
                          <i className="fas fa-upload"></i>
                          <span>Start upload</span>
                        </button>
                        <button
                          type="reset"
                          className="btn btn-warning col cancel"
                        >
                          <i className="fas fa-times-circle"></i>
                          <span>Cancel upload</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                      <div className="fileupload-process w-100">
                        <div
                          id="total-progress"
                          className="progress progress-striped active"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow="0"
                        >
                          <div
                            className="progress-bar progress-bar-success"
                            // style="width:0%;"
                            data-dz-uploadprogress
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table table-striped files" id="previews">
                    <div id="template" className="row mt-2">
                      <div className="col-auto">
                        <span className="preview">
                          <img src="data:," alt="" data-dz-thumbnail />
                        </span>
                      </div>
                      <div className="col d-flex align-items-center">
                        <p className="mb-0">
                          <span className="lead" data-dz-name></span>(
                          <span data-dz-size></span>)
                        </p>
                        <strong
                          className="error text-danger"
                          data-dz-errormessage
                        ></strong>
                      </div>
                      <div className="col-4 d-flex align-items-center">
                        <div
                          className="progress progress-striped active w-100"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow="0"
                        >
                          <div
                            className="progress-bar progress-bar-success"
                            // style="width:0%;"
                            data-dz-uploadprogress
                          ></div>
                        </div>
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-primary start">
                            <i className="fas fa-upload"></i>
                            <span>Start</span>
                          </button>
                          <button
                            data-dz-remove
                            className="btn btn-warning cancel"
                          >
                            <i className="fas fa-times-circle"></i>
                            <span>Cancel</span>
                          </button>
                          <button
                            data-dz-remove
                            className="btn btn-danger delete"
                          >
                            <i className="fas fa-trash"></i>
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  Visit{" "}
                  <a href="https://www.dropzonejs.com">
                    dropzone.js documentation
                  </a>{" "}
                  for more examples and information about the plugin.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AdvancedForm;
