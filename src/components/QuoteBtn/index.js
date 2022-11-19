import React from "react";
import "./QuoteBtn.css";

const QuoteBtn = (props) => {
  return (
    <a
      onClick={props.onClick}
      className="QuoteBtn"
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      {props.action}
    </a>
  );
};

export default QuoteBtn;
