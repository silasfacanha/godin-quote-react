import SetofSubjects from "../SetofSubjects";

import "./QuoteArea.css";

const QuoteArea = () => {
  return (
    <section className="QuoteArea" id="QuoteArea">
      <h1> Which Subject Triggers your Curiosity?</h1>
      <SetofSubjects />
    </section>
  );
};

export default QuoteArea;