import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getQuizData } from "../global/questions";
import { RootState } from "../redux/store";

import Separator from "./Separator";

type Props = {
  questionNumber: number;
};

export default function WrongAnswer({ questionNumber }: Props) {
  // LANGUAGE
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.quiz.language);
  const quizData = getQuizData(language);

  // QUESTION/ANSWERS DATA
  const question = quizData[questionNumber].question;
  const answers = quizData[questionNumber].options;
  const correctAnswerIndex = quizData[questionNumber].answer;
  const correctAnswer = answers[correctAnswerIndex];

  return (
    <div>
      <Separator />
      <ul className="text-center">
        <li>
          <div>{question}</div>
          <div className="m-2">
            {t("correctAnswer")}
            <span className="font-semibold"> {correctAnswer}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
