import { Question } from "../types/question.type";
import QuestionDetails from "./QuestionDetails";

type QuestionListProps = {
  questions: Question[];
};

export default function QuestionList({ questions }: QuestionListProps) {
  return (
    <>
      {!questions || !questions.length ? (
        <div>No questions found. Use the form above to add questions</div>
      ) : (
        questions.map((question, i) => <QuestionDetails question={question} />)
      )}
    </>
  );
}
