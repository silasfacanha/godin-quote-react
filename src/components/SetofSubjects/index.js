import SubjectQuote from "../SubjectQuote";
import "./SetofSubjects.css";

const SetofSubjects = () => {
  return (
    <div className="SetofSubjects">
      <div>
        <SubjectQuote subject="Culture" />
      </div>
      <div>
        <SubjectQuote subject="Marketing" />
      </div>
      <div>
        <SubjectQuote subject="Work" />
      </div>
      <div>
        <SubjectQuote subject="Ideas" />
      </div>
      <div>
        <SubjectQuote subject="Life" />
      </div>
      <div>
        <SubjectQuote subject="Any" />
      </div>
    </div>
  );
};

export default SetofSubjects;
