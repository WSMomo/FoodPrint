import { quizData } from "../global/questions";
import Separator from "./Separator";

type Props = {
  questionNumber: number;
};

export default function WrongAnswers({ questionNumber }: Props) {
  const question = quizData[questionNumber].question;
  const answers = quizData[questionNumber].options;
  const correctAnswerIndex = quizData[questionNumber].answer;
  const correctAnswer = answers[correctAnswerIndex];

  return (
    <ul className="text-center">
      <Separator />
      <li>
        <div>{question}</div>
        <div className="m-2">
          Correct answer:
          <span className="font-semibold"> {correctAnswer}</span>
        </div>
      </li>
    </ul>
  );
}
