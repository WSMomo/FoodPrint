import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState } from "../redux/store";

import Accordion from "./Accordion";
import Separator from "./Separator";
import WrongAnswer from "./WrongAnswer";

export default function WrongAnswerRender() {
  const { t } = useTranslation();
  const wrongAnswers = useSelector(
    (state: RootState) => state.quiz.wrongAnswers
  );
  return (
    <>
      {/* only if user has answered at least one question incorrectly */}
      {wrongAnswers.length > 0 && (
        <>
          <Separator />
          <Accordion title={t("wrongAnswersAccordionTitle")}>
            {wrongAnswers.map((questionNumber) => (
              <WrongAnswer
                questionNumber={questionNumber}
                key={questionNumber}
              />
            ))}
          </Accordion>
        </>
      )}
    </>
  );
}
