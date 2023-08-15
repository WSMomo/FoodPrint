import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Answer from "./Answer";
import { RootState } from "../redux/store";
import { quizData } from "../global/questions";
import { addCorrectAnswerToScore } from "../redux/quizReducer";

export default function Answers() {
  const index = useSelector((state: RootState) => state.quiz.index);
  const correctAnswerIndex = quizData[index].answer;
  const [selectedAnswer, setSelectedAnswer] = useState<number>();

  const dispatch = useDispatch();
  function updateScore(clickedIndex: number) {
    if (correctAnswerIndex === clickedIndex) {
      dispatch(addCorrectAnswerToScore());
    }
  }

  return (
    <div className="w-11/12 md:w-2/3">
      {quizData[index].options.map((option, optionIndex) => (
        <Answer
          isSelected={selectedAnswer === optionIndex}
          handleSelect={() => setSelectedAnswer(optionIndex)}
          key={optionIndex}
          handleUpdateScore={() => updateScore(optionIndex)}
        >
          {option}
        </Answer>
      ))}
    </div>
  );
}
