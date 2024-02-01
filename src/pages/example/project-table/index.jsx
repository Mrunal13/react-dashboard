import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";

const ProjectTable = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <Container fluid>
          <Row className="mb-2">
            <Col sm={6}>
              <h1>Projects</h1>
            </Col>
            <Col sm={6}>
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content">
        <Card>
          <CardHeader>
            <CardTitle tag={"h3"}>Projects</CardTitle>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <Table className="table projects" striped>
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>#</th>
                  <th style={{ width: "20%" }}>Project Name</th>
                  <th style={{ width: "30%" }}>Team Members</th>
                  <th>Project Progress</th>
                  <th style={{ width: "8%" }} className="text-center">
                    Status
                  </th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="57"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "57%" }}
                      ></div>
                    </div>
                    <small>57% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="47"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "47%" }}
                      ></div>
                    </div>
                    <small>47% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <small>60% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="12"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "12%" }}
                      ></div>
                    </div>
                    <small>12% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <small>35% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <small>87% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="/images/user2.jpg"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fa fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fa fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default ProjectTable;
