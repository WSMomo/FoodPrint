import { answerAndQuestions } from "../global/questions";
import Answer from "./Answer";

type Props = {
  quizData: answerAndQuestions[];
};

export default function Answers({ quizData }: Props) {
  return (
    <div className="w-2/3">
      <Answer>{quizData[0].options[0]}</Answer>
      <Answer>{quizData[0].options[1]}</Answer>
      <Answer>{quizData[0].options[2]}</Answer>
      <Answer>{quizData[0].options[3]}</Answer>
    </div>
  );
}
