import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
} from "reactstrap";
import { Button } from "../../../../App";

function AppededButtons({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appended Buttons</CardTitle>
      </CardHeader>
      <CardBody>
        <strong>With dropdown</strong>
        <InputGroup className="mb-3">
          <div className="input-group-prepend" style={{ marginLeft: "-3px" }}>
            <Dropdown
              className="btn-default"
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Separated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Input type="text" className="form-control" />
        </InputGroup>
        <strong>Normal</strong>
        <InputGroup className=" mb-3">
          <div className="input-group-prepend">
            <Button color="danger">Action</Button>
          </div>
          <Input type="text" className="form-control" />
        </InputGroup>
        <strong>Flat</strong>
        <InputGroup className=" mb-3">
          <Input type="text" className="form-control rounded-0" />
          <span className="input-group-append">
            <Button color="info" className=" btn-flat">
              Go!
            </Button>
          </span>
        </InputGroup>
      </CardBody>
    </Card>
  );
}

export default AppededButtons;
