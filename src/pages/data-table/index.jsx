import React, { useState } from "react";
import {
  Row,
  Col,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from "reactstrap";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Rendering engine",
    selector: (row) => row.engine,
    sortable: true,
  },
  {
    name: "Browser",
    selector: (row) => row.browser,
    sortable: true,
  },
  {
    name: "Platform(s)",
    selector: (row) => row.platform,
    sortable: true,
  },
  {
    name: "Engine version",
    selector: (row) => row.version,
    sortable: true,
  },
  {
    name: "CSS grade",
    selector: (row) => row.grade,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    engine: "Trident",
    browser: "Internet Explorer 4.0",
    platform: "Win 95+",
    version: "4",
    grade: "X",
  },
  {
    id: 2,
    engine: "Trident",
    browser: "Internet Explorer 5.0",
    platform: "Win 95+",
    version: "5",
    grade: "C",
  },
  {
    id: 3,
    engine: "Trident",
    browser: "Internet Explorer 5.5",
    platform: "Win 95+",
    version: "5.5",
    grade: "A",
  },
  {
    id: 4,
    engine: "Trident",
    browser: "Internet Explorer 6",
    platform: "Win 95+",
    version: "6",
    grade: "A",
  },
  {
    id: 5,
    engine: "Trident",
    browser: "Internet Explorer 7",
    platform: "Win XP SP2+",
    version: "7",
    grade: "A",
  },
  {
    id: 6,
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platform: "Win XP",
    version: "6",
    grade: "A",
  },
  {
    id: 7,
    engine: "Gecko",
    browser: "Firefox 1.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.7",
    grade: "A",
  },
  {
    id: 8,
    engine: "Gecko",
    browser: "Firefox 1.5",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 9,
    engine: "Gecko",
    browser: "Firefox 2.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 10,
    engine: "Gecko",
    browser: "Firefox 3.0",
    platform: "Win 2k+ / OSX.3+",
    version: "1.9",
    grade: "A",
  },
  {
    id: 11,
    engine: "Gecko",
    browser: "Camino 1.0",
    platform: "OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 12,
    engine: "Gecko",
    browser: "Camino 1.5",
    platform: "OSX.3+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 13,
    engine: "Gecko",
    browser: "Netscape 7.2",
    platform: "Win 95+ / Mac OS 8.6-9.2",
    version: "1.7",
    grade: "A",
  },
  {
    id: 14,
    engine: "Gecko",
    browser: "Netscape Browser 8",
    platform: "Win 98SE+",
    version: "1.7",
    grade: "A",
  },
  {
    id: 15,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 16,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 17,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 18,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 19,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 20,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 21,
    engine: "Trident",
    browser: "Internet Explorer 4.0",
    platform: "Win 95+",
    version: "4",
    grade: "X",
  },
  {
    id: 22,
    engine: "Trident",
    browser: "Internet Explorer 5.0",
    platform: "Win 95+",
    version: "5",
    grade: "C",
  },
  {
    id: 23,
    engine: "Trident",
    browser: "Internet Explorer 5.5",
    platform: "Win 95+",
    version: "5.5",
    grade: "A",
  },
  {
    id: 24,
    engine: "Trident",
    browser: "Internet Explorer 6",
    platform: "Win 95+",
    version: "6",
    grade: "A",
  },
  {
    id: 25,
    engine: "Trident",
    browser: "Internet Explorer 7",
    platform: "Win XP SP2+",
    version: "7",
    grade: "A",
  },
  {
    id: 26,
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platform: "Win XP",
    version: "6",
    grade: "A",
  },
  {
    id: 27,
    engine: "Gecko",
    browser: "Firefox 1.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.7",
    grade: "A",
  },
  {
    id: 28,
    engine: "Gecko",
    browser: "Firefox 1.5",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 29,
    engine: "Gecko",
    browser: "Firefox 2.0",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 30,
    engine: "Gecko",
    browser: "Firefox 3.0",
    platform: "Win 2k+ / OSX.3+",
    version: "1.9",
    grade: "A",
  },
  {
    id: 31,
    engine: "Gecko",
    browser: "Camino 1.0",
    platform: "OSX.2+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 32,
    engine: "Gecko",
    browser: "Camino 1.5",
    platform: "OSX.3+",
    version: "1.8",
    grade: "A",
  },
  {
    id: 33,
    engine: "Gecko",
    browser: "Netscape 7.2",
    platform: "Win 95+ / Mac OS 8.6-9.2",
    version: "1.7",
    grade: "A",
  },
  {
    id: 34,
    engine: "Gecko",
    browser: "Netscape Browser 8",
    platform: "Win 98SE+",
    version: "1.7",
    grade: "A",
  },
  {
    id: 35,
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platform: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A",
  },
];

const DataTablePage = () => {
  const [value, setValue] = useState("");

  const filteredItems = data.filter(
    (item) =>
      item.browser && item.browser.toLowerCase().includes(value.toLowerCase())
  );

  const Comp = React.useMemo(() => {
    return (
      <>
        <Input
          type="text"
          placeholder="Search Browser"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </>
    );
  }, [value]);

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <Row className="mb-2">
              <Col sm={6}>
                <h1>DataTables</h1>
              </Col>
              <Col sm={6}>
                <Breadcrumb className="float-sm-right">
                  <BreadcrumbItem>
                    <a href="#">Home</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>DataTables</BreadcrumbItem>
                </Breadcrumb>
              </Col>
            </Row>
          </div>
        </section>

        <section className="content">
          <Container fluid>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <CardTitle tag={"h3"}>
                      DataTable with minimal features & hover style
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    {/* react data table  */}
                    <DataTable
                      pagination
                      //   dense
                      columns={columns}
                      data={data}
                      // selectableRows
                      highlightOnHover
                    />
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle tag={"h3"}>
                      DataTable with default features
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <DataTable
                      pagination
                      // dense
                      columns={columns}
                      data={filteredItems}
                      // selectableRows
                      highlightOnHover
                      striped
                      subHeader
                      subHeaderComponent={Comp}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default DataTablePage;
