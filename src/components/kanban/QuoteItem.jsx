import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Button } from "../../App";

function QuoteItem(props) {
  const [modal, setModal] = useState(false);
  const { quote, isDragging, provided, index } = props;

  const toggle = () => setModal(!modal);

  const DefaultModal = ({ item, ...args }) => {
    const closeBtn = (
      <Button className="close" onClick={toggle} type="button">
        &times;
      </Button>
    );

    return (
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} close={closeBtn}>
          {item.cardTitle}
        </ModalHeader>
        <ModalBody>{item.cardDescription}</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button color="primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`name quote content`}
    >
      <Card className="card-info card-outline mb-2">
        <CardHeader>
          <CardTitle tag={"h5"}>{quote.cardTitle}</CardTitle>
          <div className="card-tools">
            <a href="#" className="btn btn-tool btn-link">
              {quote.id}
            </a>
            <a href="#" className="btn btn-tool" onClick={toggle}>
              <i className="fa fa-pencil"></i>
              <DefaultModal item={quote} />
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
    </div>
  );
}

export default QuoteItem;

const DefaultModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button className="btn-default" onClick={toggle}>
        Launch Default Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} close={closeBtn}>
          Default Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button color="primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
