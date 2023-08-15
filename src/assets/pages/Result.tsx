import ActionButton from "../components/ActionButton";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { restart } from "../redux/quizReducer";

import WrongAnswerRender from "../components/WrongAnswerRender";
import ResultRender from "../components/ResultRender";

export default function Result() {
  // REDUX
  const dispatch = useDispatch();

  // LANGUAGE
  const { t } = useTranslation();

  return (
    <div className="bg-main-color text-secondary-color w-full md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
      <ResultRender />
      <ActionButton handleClick={() => dispatch(restart())}>
        {t("restartButton")}
      </ActionButton>
      {/* only if user has answered at least one question incorrectly */}
      <WrongAnswerRender />
    </div>
  );
}
