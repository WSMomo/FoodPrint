import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { QUIZ_LENGTH } from "../global/data";
import { setIsFinished, handleNextClick } from "../redux/quizReducer";

import Answers from "../components/Answers";
import NextButton from "../components/NextButton";
import Question from "../components/Question";
import Separator from "../components/Separator";
import ProgressionBar from "../components/ProgressionBar";

export default function QuizQuestions() {
  const dispatch = useDispatch();
  const index = useSelector((state: RootState) => state.quiz.index);
  const answersClicked = useSelector(
    (state: RootState) => state.quiz.answersClicked
  );

  return (
    <>
      <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
        <ProgressionBar />
        <Question />
        <Separator />
        <Answers />
        <Separator />
        <div className="flex justify-end w-2/4">
          {index === QUIZ_LENGTH - 1 ? (
            <NextButton
              disabled={!answersClicked}
              onClick={() => dispatch(setIsFinished(true))}
            >
              END
            </NextButton>
          ) : (
            <NextButton
              disabled={!answersClicked}
              onClick={() => dispatch(handleNextClick())}
            >
              NEXT
            </NextButton>
          )}
        </div>
      </div>
    </>
  );
}
