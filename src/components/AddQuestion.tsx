import { FormEventHandler, useCallback } from "react";
import { Container, Card, CardContent } from "@mui/material";

type AddQuestionProps = {
  onFormSubmit: (username: string, question: string) => void;
};

export default function AddQuestion({ onFormSubmit }: AddQuestionProps) {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const [username, question] = event.target;
    console.log(username.value, question.value);
    onFormSubmit(username.value, question.value);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="add-question-form">
            <label>Username:</label>
            <input />
            <label>Question:</label>
            <textarea />
            <button type="submit">Submit</button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
