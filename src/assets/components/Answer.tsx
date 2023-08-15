import { useDispatch, useSelector } from "react-redux";
import { setAnswersClicked } from "../redux/quizReducer";
import { RootState } from "../redux/store";

type Props = {
  index: number;
  children: React.ReactNode;
  handleUpdateUserAnswer: () => void;
};

const selectedAnswerStyle: string = "bg-secondary-color text-main-color";
const notSelectedAnswerStyle: string =
  "cursor-pointer md:hover:opacity-70 transition-all duration-75";

export default function Answer({
  children,
  handleUpdateUserAnswer,
  index,
}: Props) {
  const dispatch = useDispatch();

  const currentUserAnswer = useSelector(
    (state: RootState) => state.quiz.currentUserAnswer
  );

  function handleClick() {
    dispatch(setAnswersClicked(true));
    handleUpdateUserAnswer();
  }

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 ${
        currentUserAnswer === index && selectedAnswerStyle
      }
         ${currentUserAnswer != index && notSelectedAnswerStyle}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
