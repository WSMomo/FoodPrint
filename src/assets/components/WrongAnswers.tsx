import { useSelector } from "react-redux";
import { getQuizData } from "../global/questions";
import Separator from "./Separator";
import { RootState } from "../redux/store";
import { useTranslation } from "react-i18next";

type Props = {
  questionNumber: number;
};

export default function WrongAnswers({ questionNumber }: Props) {
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.quiz.language);
  const quizData = getQuizData(language);
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
          {t("correctAnswer")}
          <span className="font-semibold"> {correctAnswer}</span>
        </div>
      </li>
    </ul>
  );
}
