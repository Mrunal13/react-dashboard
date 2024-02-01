import React from "react";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Table,
} from "reactstrap";
import { Button } from "../../../../App";

function HorizontalButtonGroup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horizontal Button Group</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive className="pad">
          <p>
            Horizontal button groups are easy to create with bootstrap. Just add
            your buttons inside
            <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
          </p>
          <Table bordered>
            <tr>
              <th>Button</th>
              <th>Icons</th>
              <th>Flat</th>
              <th>Dropdown</th>
            </tr>
            <tr>
              <td>
                <ButtonGroup>
                  <Button className="btn-default">Left</Button>
                  <Button className="btn-default">Middle</Button>
                  <Button className="btn-default">Right</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-default">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-default">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-default">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-default btn-flat">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-default btn-flat">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-default btn-flat">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-default">1</Button>
                  <Button className="btn-default">2</Button>
                  <ButtonGroup>
                    <Button
                      className="btn-default dropdown-toggle dropdown-icon"
                      data-toggle="dropdown"
                    ></Button>
                    <DropdownMenu>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>
                <ButtonGroup>
                  <Button color="info">Left</Button>
                  <Button color="info">Middle</Button>
                  <Button color="info">Right</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="info">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button color="info">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button color="info">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-flat" color="info">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-flat" color="info">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-flat" color="info">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="info">1</Button>
                  <Button color="info">2</Button>
                  <ButtonGroup>
                    <Button
                      color="info"
                      className=" dropdown-toggle dropdown-icon"
                      data-toggle="dropdown"
                    ></Button>
                    <DropdownMenu>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>
                <ButtonGroup>
                  <Button color="danger">Left</Button>
                  <Button color="danger">Middle</Button>
                  <Button color="danger">Right</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="danger">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button color="danger">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button color="danger">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-flat" color="danger">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-flat" color="danger">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-flat" color="danger">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="danger">1</Button>
                  <Button color="danger">2</Button>
                  <ButtonGroup>
                    <Button
                      color="danger"
                      className=" dropdown-toggle dropdown-icon"
                      data-toggle="dropdown"
                    ></Button>
                    <DropdownMenu>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>
                <ButtonGroup>
                  <Button color="warning">Left</Button>
                  <Button color="warning">Middle</Button>
                  <Button color="warning">Right</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="warning">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button color="warning">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button color="warning">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-flat" color="warning">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-flat" color="warning">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-flat" color="warning">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="warning">1</Button>
                  <Button color="warning">2</Button>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      className=" dropdown-toggle dropdown-icon"
                      data-toggle="dropdown"
                    ></Button>
                    <DropdownMenu>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>
                <ButtonGroup>
                  <Button color="success">Left</Button>
                  <Button color="success">Middle</Button>
                  <Button color="success">Right</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="success">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button color="success">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button color="success">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button className="btn-flat" color="success">
                    <i className="fa fa-align-left"></i>
                  </Button>
                  <Button className="btn-flat" color="success">
                    <i className="fa fa-align-center"></i>
                  </Button>
                  <Button className="btn-flat" color="success">
                    <i className="fa fa-align-right"></i>
                  </Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup>
                  <Button color="success">1</Button>
                  <Button color="success">2</Button>
                  <ButtonGroup>
                    <Button
                      color="success"
                      className=" dropdown-toggle dropdown-icon"
                      data-toggle="dropdown"
                    ></Button>
                    <DropdownMenu>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                      <DropdownItem href="#">Dropdown link</DropdownItem>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </td>
            </tr>
          </Table>
        </Table>
      </CardBody>
    </Card>
  );
}

export default HorizontalButtonGroup;
