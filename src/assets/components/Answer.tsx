import { useDispatch, useSelector } from "react-redux";
import { setAnswersClicked } from "../redux/quizReducer";
import { RootState } from "../redux/store";
type Props = {
  index: number;
  children: React.ReactNode;
  handleUpdateUserAnswer: () => void;
};

const answerClickedStyle: string = "bg-secondary-color text-main-color";

export default function Answer({
  children,
  handleUpdateUserAnswer,
  index,
}: Props) {
  const dispatch = useDispatch();

  const userAnswer = useSelector(
    (state: RootState) => state.quiz.currentUserAnswer
  );

  function handleClick() {
    dispatch(setAnswersClicked(true));
    handleUpdateUserAnswer();
  }

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 cursor-pointer md:hover:opacity-70 ${
        userAnswer === index && answerClickedStyle
      } `}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
