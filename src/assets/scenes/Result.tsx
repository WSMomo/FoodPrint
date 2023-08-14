import { resultsSentences } from "../global/results";
import Separator from "../components/Separator";
import ActionButton from "../components/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsFinished, setIsStarted } from "../redux/quizReducer";
import { RootState } from "../redux/store";
import { QUIZ_LENGTH } from "../global/data";

export default function Result() {
  const score = useSelector((state: RootState) => state.quiz.score);
  let scoreResult: string;
  switch (score) {
    case 0:
      scoreResult = "initiator";
      break;
    case 1:
    case 2:
    case 3:
      scoreResult = "starter";
      break;
    case 4:
    case 5:
    case 6:
      scoreResult = "aware";
      break;
    case 7:
    case 8:
    case 9:
      scoreResult = "expert";
      break;
    case 10:
      scoreResult = "master";
      break;
    default:
      scoreResult = "master";
      break;
  }

  const dispatch = useDispatch();

  function handleRestart() {
    dispatch(setIsFinished(false));
    dispatch(setIsStarted(false));
  }

  return (
    <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
      <div>
        {score}/{QUIZ_LENGTH}
      </div>
      <Separator />
      <div className="flex flex-col text-center px-14">
        <h2 className="p-4 text-3xl">
          {resultsSentences[scoreResult].sentence}
        </h2>
        <p className="text-lg">{resultsSentences[scoreResult].description}</p>
      </div>
      <ActionButton handleClick={handleRestart}>Restart</ActionButton>
    </div>
  );
}
