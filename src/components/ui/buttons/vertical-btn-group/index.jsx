import React from "react";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  Table,
} from "reactstrap";
import { Button } from "../../../../App";

function VerticalButtonGroup() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vertical Button Group</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive className="pad">
          <p>
            Vertical button groups are easy to create with bootstrap. Just add
            your buttons inside
            <code>&lt;div className="btn-group-vertical"&gt;&lt;/div&gt;</code>
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
                <ButtonGroup vertical>
                  <Button className="btn-default">Top</Button>
                  <Button className="btn-default">Middle</Button>
                  <Button className="btn-default">Bottom</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
                  <Button color="info">Top</Button>
                  <Button color="info">Middle</Button>
                  <Button color="info">Bottom</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
                  <Button color="danger">Top</Button>
                  <Button color="danger">Middle</Button>
                  <Button color="danger">Bottom</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
                  <Button color="warning">Top</Button>
                  <Button color="warning">Middle</Button>
                  <Button color="warning">Bottom</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
                  <Button color="success">Top</Button>
                  <Button color="success">Middle</Button>
                  <Button color="success">Bottom</Button>
                </ButtonGroup>
              </td>
              <td>
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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
                <ButtonGroup vertical>
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

export default VerticalButtonGroup;
