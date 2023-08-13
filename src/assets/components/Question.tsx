import { answerAndQuestions } from "../global/questions";

type Props = {
  quizData: answerAndQuestions[];
  index: number;
};

export default function Question({ quizData, index }: Props) {
  return <div className="text-lg p-2 mt-4">{quizData[index].question}</div>;
}
