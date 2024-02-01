import React from "react";

function Callout({className,title,description}) {
  return (
    <div className={className}>
      <h5>{title}</h5>

      <p>
        {description}
      </p>
    </div>
  );
}

export default Callout;
