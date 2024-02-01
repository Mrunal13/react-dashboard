import React, { useState } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  NavItem,
  Row,
  NavLink,
  InputGroup,
  Input,
  ButtonGroup,
  Table,
  Label,
  CardFooter,
} from "reactstrap";
import { Button } from "../../../App";
import DataTable from "react-data-table-component";
import Folder from "../folder";
import { NavLink as Link } from "react-router-dom";
const data = [
  {
    id: "1",
    favourite: true,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
  {
    id: "2",
    favourite: false,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: "3",
    favourite: false,
    from: "Amisha patel",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: "4",
    favourite: true,
    from: "pratik padiyar",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
  {
    id: "5",
    favourite: true,
    from: "seema panchal",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: "6",
    favourite: false,
    from: "trush vekriya",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: " 7",
    favourite: false,
    from: "dipen soni",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: "8",
    favourite: true,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
  {
    id: "9",
    favourite: true,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
  {
    id: "10",
    favourite: false,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
  {
    id: "11",
    favourite: false,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: true,
    duration: "5 mins ago",
  },
  {
    id: "12",
    favourite: true,
    from: "Alexander Pierce",
    title: "AdminLTE 3.0 Issue - Trying to find a solution to this problem...",
    attachment: false,
    duration: "5 mins ago",
  },
];
function InBox() {
  const [value, setValue] = useState("");

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  let filteredItems = data.filter(
    (item) => item.from && item.from.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    console.log("id", typeof id);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      const filterdata = isCheck.filter((item) => item !== id.toString());
      console.log("filterdata", filterdata);
      setIsCheck(filterdata);
    }
  };

  const columns = [
    {
      selector: "id",
      cell: (row) => (
        <div className="icheck-primary">
          <Input
            key={row.id}
            type="checkbox"
            value=""
            id={row.id}
            onChange={handleClick}
            checked={isCheck.includes(row.id)}
          />
          <Label for={row.id} check></Label>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Favourite",
      selector: "favourite",
      cell: (row) =>
        row.favourite === true ? (
          <NavLink to={"#"}>
            <i className="fas fa-star text-warning"></i>
          </NavLink>
        ) : (
          " "
        ),
    },
    {
      name: "From",
      selector: "from",
      cell: (row) => <Link to={"/read-mail"}>{row.from}</Link>,
      sortable: true,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Attachment",
      selector: "attachment",
      cell: (row) =>
        row.attachment === true ? <i className="fas fa-paperclip"></i> : "",
    },
    {
      name: "Duration",
      selector: "duration",
      sortable: true,
    },
  ];

  const SelectAllCheckbox = () => {
    return (
      <>
        <Button
          size="sm"
          type="button"
          className="btn-default scheckbox-toggle"
        >
          <Input
            type="checkbox"
            className="checkbox-toggle"
            cssModule={{ "form-check-input": "none" }}
            onChange={handleSelectAll}
            checked={isCheckAll}
          ></Input>
        </Button>
      </>
    );
  };

  return (
    <Row className="inbox">
      <Col md={3}>
        <Folder buttonTitle="Compose" />
      </Col>
      <Col md={9}>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle tag={"h3"}>Inbox</CardTitle>
            <div className="card-tools">
              <InputGroup size="sm">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search Mail"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <div className="input-group-append">
                  <Button color="primary">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </InputGroup>
            </div>
          </CardHeader>

          <CardBody className="p-0">
            <div className="mailbox-controls">
              <SelectAllCheckbox />
              <ButtonGroup>
                <Button size="sm" className="btn-default">
                  <i className="far fa-trash-alt"></i>
                </Button>
                <Button size="sm" className="btn-default">
                  <i className="fa fa-reply"></i>
                </Button>
                <Button size="sm" className="btn-default">
                  <i className="fas fa-share"></i>
                </Button>
              </ButtonGroup>
              <Button type="button" className="btn-default" size="sm">
                <i className="fas fa-sync-alt"></i>
              </Button>
            </div>
            <DataTable
              pagination
              columns={columns}
              selectableRowsComponent={SelectAllCheckbox}
              data={filteredItems}
              noTableHead
              highlightOnHover
              striped
              subHeader
            />
          </CardBody>
          <CardFooter className="p-0">
            <div className="mailbox-controls">
              <SelectAllCheckbox />
              <ButtonGroup>
                <Button size="sm" className="btn-default">
                  <i className="far fa-trash-alt"></i>
                </Button>
                <Button size="sm" className="btn-default">
                  <i className="fa fa-reply"></i>
                </Button>
                <Button size="sm" className="btn-default">
                  <i className="fas fa-share"></i>
                </Button>
              </ButtonGroup>
              <Button type="button" className="btn-default" size="sm">
                <i className="fas fa-sync-alt"></i>
              </Button>
              <div className="float-right">
                1-50/200
                <ButtonGroup>
                  <Button type="button" className="btn-default" size="sm">
                    <i className="fas fa-chevron-left"></i>
                  </Button>
                  <Button type="button" className="btn-default" size="sm">
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

export default InBox;
