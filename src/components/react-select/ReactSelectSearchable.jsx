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
    disabled: true,
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

const ReactSelectSearchable = ({ cls, disabled, disabledOptions }) => {
  return (
    <>
      {disabledOptions ? (
        <Select
          className={`basic-single ${cls}`}
          //   classNamePrefix="select"
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
          isOptionDisabled={(option) => option.disabled}
        />
      ) : (
        <Select
          className={`basic-single ${cls}`}
          //   classNamePrefix="select"
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
          isDisabled={disabled}
        />
      )}
    </>
  );
};

export default ReactSelectSearchable;
