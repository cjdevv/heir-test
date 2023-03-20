import "./styles.css";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";
import { useState } from "react";
import { Question } from "./types/question.type";

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleFormSubmit = (username: string, question: string) => {
    setQuestions([...questions, { username, question, votes: 0 }]);
    console.log(questions);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AddQuestion onFormSubmit={handleFormSubmit} />
      <QuestionList questions={questions} />
    </div>
  );
}
