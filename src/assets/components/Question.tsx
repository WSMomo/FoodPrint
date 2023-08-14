import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { quizData } from "../global/questions";

export default function Question() {
  const index = useSelector((state: RootState) => state.quiz.index);

  return (
    <div className="text-lg p-2 mt-4 text-center">
      {quizData[index].question}
    </div>
  );
}
