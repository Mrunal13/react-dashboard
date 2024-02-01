import React, { useState } from "react";
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
} from "reactstrap";
import { Button } from "../../../../App";
import "./splitbtn.css";

function Splitbuttons({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Split buttons</CardTitle>
      </CardHeader>
      <CardBody>
        <p className="mb-1">Normal split buttons:</p>

        <div className="margin">
          <ButtonGroup>
            <ButtonDropdown
              className="btn-default"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button className="btn-default">Action</Button>
              <DropdownToggle
                className="btn-default p-3"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>

          <ButtonGroup>
            <ButtonDropdown
              color="info"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="info">Action</Button>
              <DropdownToggle
                className="p-3"
                color="info"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="danger"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="danger">Action</Button>
              <DropdownToggle
                className="p-3"
                color="danger"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="success"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="success">Action</Button>
              <DropdownToggle
                className="p-3"
                color="success"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="warning"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="warning">Action</Button>
              <DropdownToggle
                color="warning"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>

        <p className="mt-3 mb-1">Flat split buttons:</p>

        <div className="margin">
          <ButtonGroup>
            <ButtonDropdown
              className="btn-default btn-flat"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button className=" btn-default btn-flat">Action</Button>
              <DropdownToggle
                className="btn-default btn-flat p-3"
                outline
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="info"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="info" className="btn-flat">
                Action
              </Button>
              <DropdownToggle
                className="btn-flat p-3"
                color="info"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="danger"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="danger" className="btn-flat">
                Action
              </Button>
              <DropdownToggle
                className="p-3 btn-flat"
                color="danger"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="success"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="success" className="btn-flat">
                Action
              </Button>
              <DropdownToggle
                className="p-3 btn-flat"
                color="success"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="warning"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="warning" className="btn-flat">
                Action
              </Button>
              <DropdownToggle
                className="btn-flat p-3"
                color="warning"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>

        <p className="mt-3 mb-1">Hoverable split buttons:</p>
        <div className="margin">
          <ButtonGroup>
            <ButtonDropdown
              className="btn-default"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button className="btn-default">Action</Button>
              <DropdownToggle
                className="btn-default p-3"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>

          <ButtonGroup>
            <ButtonDropdown
              color="info"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="info">Action</Button>
              <DropdownToggle
                className="p-3"
                color="info"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="danger"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="danger">Action</Button>
              <DropdownToggle
                className="p-3"
                color="danger"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="success"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="success">Action</Button>
              <DropdownToggle
                className="p-3"
                color="success"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonDropdown
              color="warning"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <Button color="warning">Action</Button>
              <DropdownToggle
                color="warning"
                split
                cssModule={{ "btn-secondary": "none" }}
              />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </ButtonGroup>
        </div>
      </CardBody>
    </Card>
  );
}

export default Splitbuttons;
