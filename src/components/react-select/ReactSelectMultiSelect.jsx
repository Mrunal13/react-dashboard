import React from "react";
import Select from "react-select";

const colourOptions = [
  {
    label: "Alabama",
    value: "Alabama",
  },
  {
    label: "Alaska",
    value: "Alaska",
  },
  {
    label: "California",
    value: "California",
  },
  {
    label: "Delaware",
    value: "Delaware",
  },
  {
    label: "Tennessee",
    value: "Tennessee",
  },
  {
    label: "Texas",
    value: "Texas",
  },
  {
    label: "Washington",
    value: "Washington",
  },
];

const ReactSelectMultiSelect = ({ cls, ...others }) => {
  return (
    <Select
      defaultValue={[colourOptions[2]]}
      isMulti
      name="colors"
      options={colourOptions}
      className={`basic-multi-select ${cls}`}
      {...others}
    />
  );
};

export default ReactSelectMultiSelect;
