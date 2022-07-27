import SubjectQuote from "../SubjectQuote";
import "./SetofSubjects.css";

const SetofSubjects = () => {
  return (
    <div className="SetofSubjects">
      <SubjectQuote subject="Culture" />
      <SubjectQuote subject="Marketing" />
      <SubjectQuote subject="Work" />
      <SubjectQuote subject="Ideas" />
      <SubjectQuote subject="Life" />
      <SubjectQuote subject="Any" />
    </div>
  );
};

export default SetofSubjects;
