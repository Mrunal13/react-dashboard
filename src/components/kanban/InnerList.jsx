import InnerQuoteList from "./InnerQuoteList";

function InnerList(props) {
  const { quotes, dropProvided } = props;
  const title = props.title ? (
    <h4
      style={{
        padding: "8px",
        transition: "background-color ease 0.2s",
        flexGrow: 1,
        userSelect: "none",
        position: "relative",
      }}
    >
      {props.title}
    </h4>
  ) : null;

  return (
    <div ref={dropProvided.innerRef}>
      {title}
      <div
        style={{
          minHeight: "auto",
          paddingBottom: "8px",
        }}
      >
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </div>
    </div>
  );
}

export default InnerList;
