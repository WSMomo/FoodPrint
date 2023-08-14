import { useSelector } from "react-redux";
import Answer from "./Answer";
import { RootState } from "../redux/store";
import { quizData } from "../global/questions";

export default function Answers() {
  const index = useSelector((state: RootState) => state.quiz.index);
  return (
    <div className="w-5/6 md:w-2/3">
      <Answer>{quizData[index].options[0]}</Answer>
      <Answer>{quizData[index].options[1]}</Answer>
      <Answer>{quizData[index].options[2]}</Answer>
      <Answer>{quizData[index].options[3]}</Answer>
    </div>
  );
}
