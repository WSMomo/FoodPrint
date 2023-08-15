import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { QUIZ_LENGTH } from "../global/data";
import NextButton from "./NextButton";
import { nextQuestion, showResults } from "../redux/quizReducer";
export default function NextOrEndButtons() {
  const dispatch = useDispatch();
  const index = useSelector((state: RootState) => state.quiz.index);
  const answersClicked = useSelector(
    (state: RootState) => state.quiz.answersClicked
  );
  return (
    <div className="flex justify-end w-2/4">
      {index === QUIZ_LENGTH - 1 ? (
        <NextButton
          disabled={!answersClicked}
          onClick={() => dispatch(showResults(true))}
        >
          END
        </NextButton>
      ) : (
        <NextButton
          disabled={!answersClicked}
          onClick={() => dispatch(nextQuestion())}
        >
          NEXT
        </NextButton>
      )}
    </div>
  );
}
