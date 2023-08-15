import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Answer from "./Answer";
import { RootState } from "../redux/store";
import { getQuizData } from "../global/questions";
import {
  setCurrentCorrectAnswer,
  setCurrentUserAnswer,
} from "../redux/quizReducer";

export default function Answers() {
  const dispatch = useDispatch();
  const index = useSelector((state: RootState) => state.quiz.index);

  const language = useSelector((state: RootState) => state.quiz.language);
  const quizData = getQuizData(language);

  useEffect(() => {
    dispatch(setCurrentCorrectAnswer(quizData[index].answer));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="w-11/12 md:w-2/3">
      {quizData[index].options.map((option, optionIndex) => (
        <Answer
          key={optionIndex}
          index={optionIndex}
          handleUpdateUserAnswer={() =>
            dispatch(setCurrentUserAnswer(optionIndex))
          }
        >
          {option}
        </Answer>
      ))}
    </div>
  );
}
