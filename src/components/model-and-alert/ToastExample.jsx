import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Spinner,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";

const ToastExample = () => {
  return (
    <Row>
      <Col md={12}>
        <Card className="card-success card-outline">
          <CardHeader>
            <CardTitle>
              <i className="fa fa-edit mr-1"></i>
              Toasts Examples <small>built in AdminLTE</small>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <DefaultToast />
              <ToastWithIcon />
              <ToastWithImage />
              <ToastWithAutoHide time={1000} />
              <ToastWithNoFixed />
            </div>
            <br />
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <DefaultToastLeft />
              <DefaultToastBottomRight />
              <DefaultToastBottomLeft />
            </div>
            <br />
            <div
              className="d-flex flex-wrap"
              style={{
                gap: "3px",
              }}
            >
              <SuccessToast />
              <InfoToast />
              <WarningToast />
              <DangerToast />
              <CustomColorToast color="#d81b60" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ToastExample;

const DefaultToast = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const ToastWithIcon = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Full Toast (with icon)
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
          icon={<i className="fa fa-envelope fa-lg"></i>}
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const ToastWithImage = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subTitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Full Toast (with image)
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
          icon={<img src="/images/user2.jpg" height="20px" alt="" />}
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const ToastWithAutoHide = ({ time }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, time);
  }, [show]);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close mx-1"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toasts with autohide
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const ToastWithNoFixed = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close mx-1"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toasts with not fixed
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const DefaultToastLeft = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toast(topLeft)
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const DefaultToastBottomRight = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toast(bottomRight)
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const DefaultToastBottomLeft = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <Button
      className="close"
      color="default"
      onClick={toggleFunction}
      type="button"
    >
      &times;
    </Button>
  );

  return (
    <>
      <Button color="default" onClick={() => setShow(true)}>
        Launch Default Toast(bottomLeft)
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          zIndex: "2000",
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const SuccessToast = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subtitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button color="success" onClick={() => setShow(true)}>
        Launch Default Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
        className="bg-success"
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const InfoToast = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subtitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button color="info" onClick={() => setShow(true)}>
        Launch Info Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
        className="bg-info"
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const WarningToast = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subtitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button color="warning" onClick={() => setShow(true)}>
        Launch Warning Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
        className="bg-warning"
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const DangerToast = () => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subtitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button color="danger" onClick={() => setShow(true)}>
        Launch Danger Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
        }}
        className="bg-danger"
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
        >
          Toast Title
        </ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};

const CustomColorToast = ({ color }) => {
  const [show, setShow] = useState(false);

  const toggleFunction = () => {
    setShow(!show);
  };

  const closeBtn = (
    <div className="d-flex align-items-center">
      <small>subtitle</small>
      <Button
        className="close mx-1"
        color="default"
        onClick={toggleFunction}
        type="button"
      >
        &times;
      </Button>
    </div>
  );

  return (
    <>
      <Button
        onClick={() => setShow(true)}
        style={{
          backgroundColor: color,
          color: "#fff",
        }}
      >
        Launch {color ? color : "Custom"} Color Toast
      </Button>
      <br />
      <br />
      <Toast
        isOpen={show}
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "2000",
          backgroundColor: color,
        }}
      >
        <ToastHeader
          toggle={toggleFunction}
          close={closeBtn}
          className="justify-content-between"
          style={{
            backgroundColor: color,
            color: "#fff",
          }}
        >
          Toast Title
        </ToastHeader>
        <ToastBody
          style={{
            color: "#fff",
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ToastBody>
      </Toast>
    </>
  );
};
