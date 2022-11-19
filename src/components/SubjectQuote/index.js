import React from "react";
import "./SubjectQuote.css";

const SubjectQuote = (props) => {
  return (
    <a className="SubjectQuote" onClick={props.onClick}>
      {props.subject}
    </a>
  );
};

export default SubjectQuote;
