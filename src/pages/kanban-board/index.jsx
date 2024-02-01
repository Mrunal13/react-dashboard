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
import { reorder, reorderQuoteMap } from "../../components/kanban/helper";
import Column from "../../components/kanban/Column";

const initial = {
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
      id: "5",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "6",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "7",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "8",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
  InProgress: [
    {
      id: "9",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "10",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "11",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "12",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
  Done: [
    {
      id: "13",
      cardTitle: "Title1",
      cardDescription: "Description1",
    },
    {
      id: "14",
      cardTitle: "Title2",
      cardDescription: "Description2",
    },
    {
      id: "15",
      cardTitle: "Title3",
      cardDescription: "Description3",
    },
    {
      id: "16",
      cardTitle: "Title4",
      cardDescription: "Description4",
    },
  ],
};

const KanbanBoard = ({ containerHeight }) => {
  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));

  const onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }

      const column = columns[result.source.droppableId];
      const withQuoteRemoved = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      setColumns(orderedColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const reorderedorder = reorder(ordered, source.index, destination.index);

      setOrdered(reorderedorder);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    setColumns(data.quoteMap);
  };

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

      <section
        className="content pb-3"
        style={{
          overflowY: "scroll",
        }}
      >
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="board"
              key={"board"}
              type="COLUMN"
              direction="horizontal"
              ignoreContainerClipping={Boolean(containerHeight)}
            >
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <Container fluid className="h-100">
                    {ordered.map((key, index) => (
                      <Column
                        key={key}
                        index={index}
                        title={key}
                        quotes={columns[key]}
                      />
                    ))}
                    {provided.placeholder}
                  </Container>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </>
      </section>
    </div>
  );
};

export default KanbanBoard;
