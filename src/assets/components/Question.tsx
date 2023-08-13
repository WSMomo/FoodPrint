import { answerAndQuestions } from "../global/questions";

type Props = {
  quizData: answerAndQuestions[];
};

export default function Question({ quizData }: Props) {
  return <div className="text-lg p-2 mt-4">{quizData[0].question}</div>;
}
