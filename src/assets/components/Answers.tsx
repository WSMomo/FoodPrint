import { useSelector, useDispatch } from "react-redux";
import Answer from "./Answer";
import { RootState } from "../redux/store";
import { quizData } from "../global/questions";
import { addCorrectAnswerToScore } from "../redux/quizReducer";

export default function Answers() {
  const index = useSelector((state: RootState) => state.quiz.index);
  const correctAnswerIndex = quizData[index].answer;

  const dispatch = useDispatch();
  function updateScore(clickedIndex: number) {
    if (correctAnswerIndex === clickedIndex) {
      dispatch(addCorrectAnswerToScore());
    }
  }
  return (
    <div className="w-5/6 md:w-2/3">
      <Answer handleAnswerClick={() => updateScore(0)}>
        {quizData[index].options[0]}
      </Answer>
      <Answer handleAnswerClick={() => updateScore(1)}>
        {quizData[index].options[1]}
      </Answer>
      <Answer handleAnswerClick={() => updateScore(2)}>
        {quizData[index].options[2]}
      </Answer>
      <Answer handleAnswerClick={() => updateScore(3)}>
        {quizData[index].options[3]}
      </Answer>
    </div>
  );
}
