import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswersClicked, setActuallyAnswer } from "../redux/quizReducer";
import { RootState } from "../redux/store";
type Props = {
  handleAnswerClick: () => void;
  children: React.ReactNode;
};

const answerClicked: string = "bg-secondary-color text-main-color";

export default function Answer({ handleAnswerClick, children }: Props) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const actuallyAnswered = useSelector(
    (state: RootState) => state.quiz.actuallyAnswered
  );
  function handleClick() {
    if (!actuallyAnswered) {
      setIsClicked(true);
      dispatch(setAnswersClicked(true));
      dispatch(setActuallyAnswer());
      handleAnswerClick();
    }
  }

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 ${
        isClicked && answerClicked
      } ${!actuallyAnswered && "cursor-pointer md:hover:opacity-70"}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
