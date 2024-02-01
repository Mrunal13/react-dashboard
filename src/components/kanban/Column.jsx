import { Draggable } from "react-beautiful-dnd";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import QuoteList from "./QuoteList";

const Column = (props) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;

  const classNames =
    title === "Backlog"
      ? "card-secondary"
      : title === "ToDo"
      ? "card-primary"
      : title === "InProgress"
      ? "card-info"
      : title === "Done"
      ? "card-success"
      : "";

  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <Card className={`card-row ${classNames}`}>
            <CardHeader>
              <CardTitle tag={"h3"} {...provided.dragHandleProps}>
                {title}
              </CardTitle>
            </CardHeader>
            <CardBody>
              <QuoteList
                listId={title}
                listType="QUOTE"
                quotes={quotes}
                internalScroll={props.isScrollable}
                isCombineEnabled={Boolean(props.isCombineEnabled)}
                useClone={Boolean(props.useClone)}
              />
              {provided.placeholder}
            </CardBody>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default Column;
