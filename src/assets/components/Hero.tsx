import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../redux/quizReducer";
import { RootState } from "../redux/store";
import { useTranslation } from "react-i18next";

import { checkScoreResult } from "../global/utility";
import { QUIZ_LENGTH } from "../global/data";
import { getResultsData, resultsSentencesType } from "../global/results";

import ActionButton from "./ActionButton";
import Accordion from "./Accordion";
import HomePageImage from "./HomePageImage";
import Separator from "./Separator";

export default function Hero() {
  // LANGUAGE
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.quiz.language);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  // REDUX
  const dispatch = useDispatch();
  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  // USER INFO
  const scoreResult = checkScoreResult(highestScore);
  const titleByScore = resultsSentences[scoreResult].sentence;
  const descriptionByScore = resultsSentences[scoreResult].description;

  return (
    <>
      <h1 className="text-3xl">{t("title")}</h1>
      <HomePageImage />
      {/* only if the user has already made at least one attempt  */}
      {attempt > 0 ? (
        <Accordion title={titleByScore}>
          <div>
            {highestScore}/{QUIZ_LENGTH}
          </div>
          <div>{descriptionByScore}</div>
        </Accordion>
      ) : (
        ""
      )}
      <Separator />
      <p>{t("intro")}</p>
      <p className="m-4">{t("getStarted")}</p>
      <ActionButton handleClick={() => dispatch(startQuiz())}>
        {t("startButton")}
      </ActionButton>
    </>
  );
}
