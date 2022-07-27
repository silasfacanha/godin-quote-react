import QuoteSpace from "../QuoteSpace";
import SetofSubjects from "../SetofSubjects";

import "./QuoteArea.css";

const QuoteArea = () => {
  return (
    <section className="QuoteArea" id="QuoteArea">
      <h1 className="QuoteAreaH1"> Which Subject Triggers your Curiosity?</h1>
      <SetofSubjects />
      <QuoteSpace />
    </section>
  );
};

export default QuoteArea;
