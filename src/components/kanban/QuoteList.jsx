import { Droppable } from "react-beautiful-dnd";
import QuoteItem from "./QuoteItem";
import InnerList from "./InnerList";

export default function QuoteList(props) {
  const {
    ignoreContainerClipping,
    isCombineEnabled,
    listId,
    listType,
    quotes,
    title,
    useClone,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isCombineEnabled={isCombineEnabled}
      renderClone={
        useClone
          ? (provided, snapshot, descriptor) => (
              <QuoteItem
                quote={quotes[descriptor.source.index]}
                provided={provided}
                isDragging={snapshot.isDragging}
                isClone
              />
            )
          : null
      }
    >
      {(dropProvided, dropSnapshot) => (
        <div {...dropProvided.droppableProps}>
          <InnerList
            quotes={quotes}
            title={title}
            dropProvided={dropProvided}
          />
        </div>
      )}
    </Droppable>
  );
}
