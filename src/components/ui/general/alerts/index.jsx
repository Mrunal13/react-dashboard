import React from "react";
import { Alert } from "reactstrap";

function Alerts({ color, iconClass, title }) {
  return (
    <Alert color={color} className="alert-dismissible">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        &times;
      </button>
      <h5>
        <i className={iconClass}></i> Alert!
      </h5>
      {title}
    </Alert>
  );
}

export default Alerts;
