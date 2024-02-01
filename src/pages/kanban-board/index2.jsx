import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const cardListO = {
  Backlog: [
    {
      id: "1",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "2",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "3",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "4",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
  ToDo: [
    {
      id: "1",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "2",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "3",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "4",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
  InProgress: [
    {
      id: "1",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "2",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "3",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "4",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
  Done: [
    {
      id: "1",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "2",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "3",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "4",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
};
const ListItem = ({ item, ...others }) => {
  return (
    <Card className="card-info card-outline" {...others}>
      <CardHeader>
        <CardTitle tag={"h5"}>{item.cardTitle}</CardTitle>
        <div className="card-tools">
          <a href="#" className="btn btn-tool btn-link">
            #3
          </a>
          <a href="#" className="btn btn-tool">
            <i className="fa fa-pencil"></i>
          </a>
        </div>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </CardBody>
    </Card>
  );
};

const KanbanBoard = () => {
  const [backlog, setBacklog] = useState(cardListO.Backlog);
  const [toDo, setToDo] = useState(cardListO.ToDo);
  const [inProgress, setInProgress] = useState(cardListO.InProgress);
  const [done, setDone] = useState(cardListO.Done);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(backlog);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBacklog(items);
  }
  function handleOnDragEndToDo(result) {
    if (!result.destination) return;
    const items = Array.from(toDo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setToDo(items);
  }
  function handleOnDragEndInProgress(result) {
    if (!result.destination) return;
    const items = Array.from(inProgress);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setInProgress(items);
  }
  function handleOnDragEndInDone(result) {
    if (!result.destination) return;
    const items = Array.from(done);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDone(items);
  }

  return (
    <div className="content-wrapper kanban">
      <section className="content-header">
        <Container fluid>
          <Row>
            <Col sm={6}>
              <h1>Kanban Board</h1>
            </Col>
            <Col sm={6} className="d-none d-sm-block">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Kanban Board</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content pb-3">
        <Container fluid className="h-100">
          <Card className="card-row card-secondary">
            <CardHeader>
              <CardTitle tag={"h3"}>Backlog</CardTitle>
            </CardHeader>
            <CardBody>
              {/* dnd */}
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <div
                      className="todoContainer" //classname characters was removed
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {backlog.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={JSON.stringify(item.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card className="card-info card-outline">
                                  <CardHeader>
                                    <CardTitle tag={"h5"}>
                                      {item.cardTitle}
                                    </CardTitle>
                                    <div className="card-tools">
                                      <a
                                        href="#"
                                        className="btn btn-tool btn-link"
                                      >
                                        #3
                                      </a>
                                      <a href="#" className="btn btn-tool">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                    </div>
                                  </CardHeader>
                                  <CardBody>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula
                                      eget dolor.
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* dnd */}
            </CardBody>
          </Card>
          <Card className="card-row card-primary">
            <CardHeader>
              <CardTitle tag={"h3"}>To Do</CardTitle>
            </CardHeader>
            <CardBody>
              <DragDropContext onDragEnd={handleOnDragEndToDo}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <div
                      className="todoContainer" //classname characters was removed
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {toDo.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={JSON.stringify(item.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card className="card-info card-outline">
                                  <CardHeader>
                                    <CardTitle tag={"h5"}>
                                      {item.cardTitle}
                                    </CardTitle>
                                    <div className="card-tools">
                                      <a
                                        href="#"
                                        className="btn btn-tool btn-link"
                                      >
                                        #3
                                      </a>
                                      <a href="#" className="btn btn-tool">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                    </div>
                                  </CardHeader>
                                  <CardBody>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula
                                      eget dolor.
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardBody>
          </Card>
          <Card className="card-row card-default">
            <CardHeader className="bg-info">
              <CardTitle tag={"h3"}>In Progress</CardTitle>
            </CardHeader>
            <CardBody>
              <DragDropContext onDragEnd={handleOnDragEndInProgress}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <div
                      className="todoContainer" //classname characters was removed
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {inProgress.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={JSON.stringify(item.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card className="card-info card-outline">
                                  <CardHeader>
                                    <CardTitle tag={"h5"}>
                                      {item.cardTitle}
                                    </CardTitle>
                                    <div className="card-tools">
                                      <a
                                        href="#"
                                        className="btn btn-tool btn-link"
                                      >
                                        #3
                                      </a>
                                      <a href="#" className="btn btn-tool">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                    </div>
                                  </CardHeader>
                                  <CardBody>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula
                                      eget dolor.
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardBody>
          </Card>
          <Card className="card-row card-success">
            <CardHeader>
              <CardTitle tag={"h3"}>Done</CardTitle>
            </CardHeader>
            <CardBody>
              <DragDropContext onDragEnd={handleOnDragEndInDone}>
                <Droppable droppableId="characters">
                  {(provided) => (
                    <div
                      className="todoContainer" //classname characters was removed
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {done.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={JSON.stringify(item.id)}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card className="card-info card-outline">
                                  <CardHeader>
                                    <CardTitle tag={"h5"}>
                                      {item.cardTitle}
                                    </CardTitle>
                                    <div className="card-tools">
                                      <a
                                        href="#"
                                        className="btn btn-tool btn-link"
                                      >
                                        #3
                                      </a>
                                      <a href="#" className="btn btn-tool">
                                        <i className="fa fa-pencil"></i>
                                      </a>
                                    </div>
                                  </CardHeader>
                                  <CardBody>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula
                                      eget dolor.
                                    </p>
                                  </CardBody>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardBody>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default KanbanBoard;
