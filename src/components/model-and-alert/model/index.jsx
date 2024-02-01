import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { Button } from "../../../App";
import { Button as ReactStrapButton } from "reactstrap";

function ModalExample() {
  return (
    <Row>
      <Col md={12}>
        <Card className="card-primary card-outline">
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit mr-1"></i>
              Modal Examples
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <DefaultModal />
              <PrimaryModal />
              <SecondaryModal />
              <InfoModal />
              <DangerModal />
              <WarningModal />
              <SuccessModal />
            </div>
            <br />
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <SmallModal />
              <LargeModal />
              <ExtraLargeModal />
            </div>

            <br />
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <OverLayModal />
            </div>
            <div className="text-muted mt-3">
              Instructions for how to use modals are available on the
              <a href="https://getbootstrap.com/docs/4.4/components/modal/">
                Bootstrap documentation
              </a>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ModalExample;

export const DefaultModal = ({ ...args }) => {
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
      <Modal isOpen={modal} toggle={toggle} {...args}>
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

const PrimaryModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button className={"btn-primary"} onClick={toggle}>
        {"Launch Primary Modal"}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-primary"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          {"Primary Modal"}
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-light" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-light" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const SecondaryModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <ReactStrapButton onClick={toggle}>
        Launch Secondary Modal
      </ReactStrapButton>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-secondary"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          Secondary Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-light" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-light" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const InfoModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button color="info" onClick={toggle}>
        Launch Info Modal
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-info"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          Info Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-light" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-light" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const DangerModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Launch Danger Modal
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-danger"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          Danger Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-light" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-light" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const WarningModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button color="warning" onClick={toggle}>
        Launch Warning Modal
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-warning"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          Warning Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-dark" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-dark" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const SuccessModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button color="success" onClick={toggle}>
        Launch Success Modal
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        contentClassName="bg-success"
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          Success Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-outline-light" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-outline-light" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const SmallModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button onClick={toggle} color="default">
        Launch Small Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="sm">
        <ModalHeader toggle={toggle} close={closeBtn}>
          Small Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const LargeModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button onClick={toggle} color="default">
        Launch Large Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle} close={closeBtn}>
          Large Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const ExtraLargeModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button onClick={toggle} color="default">
        Launch Extra Large Modal
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="xl">
        <ModalHeader toggle={toggle} close={closeBtn}>
          Extra Large Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const OverLayModal = ({ ...args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="close" onClick={toggle} type="button">
      &times;
    </Button>
  );

  return (
    <>
      <Button onClick={toggle} color="default">
        Launch Modal With Overlay
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <div className="overlay">
          <i className="fa fa-ellipsis-h fa-spin fa-2xl"></i>
        </div>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Dafault Modal
        </ModalHeader>
        <ModalBody>One fine body…</ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn-default" onClick={toggle}>
            Close
          </Button>
          <Button className="btn-primary" onClick={toggle}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
