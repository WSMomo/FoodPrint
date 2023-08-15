import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswersClicked, setActuallyAnswer } from "../redux/quizReducer";
import { RootState } from "../redux/store";
type Props = {
  handleUpdateScore: () => void;
  isSelected: boolean;
  handleSelect: () => void;
  children: React.ReactNode;
};

const answerClickedStyle: string = "bg-secondary-color text-main-color";

export default function Answer({
  handleUpdateScore,
  isSelected,
  handleSelect,
  children,
}: Props) {
  const dispatch = useDispatch();
  const answersClicked = useSelector(
    (state: RootState) => state.quiz.answersClicked
  );
  const actuallyAnswered = useSelector(
    (state: RootState) => state.quiz.actuallyAnswered
  );
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    if (!actuallyAnswered) {
      handleSelect();
      setIsClicked(true);
      dispatch(setAnswersClicked(true));
      dispatch(setActuallyAnswer());
      handleUpdateScore();
    }
  }

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 ${
        isClicked && isSelected && answersClicked && answerClickedStyle
      } ${!actuallyAnswered && "cursor-pointer md:hover:opacity-70"}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
