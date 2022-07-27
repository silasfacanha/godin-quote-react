import "./SetofQuoteBtns.css";
import QuoteBtn from "../QuoteBtn";
const SetofQuoteBtns = () => {
  return (
    <div className="SetofQuoteBtns">
      <QuoteBtn action="Copy" />
      <QuoteBtn action="Twitter" />
      <QuoteBtn action="Listen" />
      <QuoteBtn action="Another" />
    </div>
  );
};

export default SetofQuoteBtns;
