import { FormEventHandler, MouseEventHandler } from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Avatar
} from "@mui/material";
import { Question } from "../types/question.type";

type QuestionDetailsProps = {
  question: Question;
};

export default function QuestionDetails({
  question: { username, question, votes }
}: QuestionDetailsProps) {
  const handleVote = (vote: number) => {
    //TODO: Handle voting. Preferably through redux if there was enough time to implement.
  };

  return (
    <Container>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="user avatar">
              {username[0]}
            </Avatar>
          }
          title={username}
        />
        <CardContent>{question}</CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleVote(1)}>
            Upvote
          </Button>
          <Button size="small" color="primary" onClick={() => handleVote(-1)}>
            Downvote
          </Button>
          <div>{votes}</div>
        </CardActions>
      </Card>
    </Container>
  );
}
