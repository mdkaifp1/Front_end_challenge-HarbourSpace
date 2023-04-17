import "./dropdown.css";
import React from "react";

const Dropdown = ({ question, answer }) => {
  const [show, setshow] = React.useState(false);

  return (
    <>
      <div className="main__section">
        <h3
          className="text__description qn"
          style={{ fontWeight: "500", padding: "0" }}
        >
          {question}
        </h3>
        {show ? (
          <p
            className="app__minus-btn text__description"
            style={{ fontWeight: "500" }}
            onClick={() => setshow(!show)}
          >
            -
          </p>
        ) : (
          <p
            className="app__plus-btn text__description"
            style={{ fontWeight: "500" }}
            onClick={() => setshow(!show)}
          >
            +
          </p>
        )}
      </div>
      {show &&
        answer.map((answer, index) => (
          <p className="app__description " key={`ans-${index}`}>
            {answer.data}
          </p>
        ))}
    </>
  );
};

export default Dropdown;
