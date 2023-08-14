import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Home from "./Home";
import QuizQuestions from "./QuizQuestions";
import Result from "./Result";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-main-color">
      {!isStarted && !isFinished && <Home />}
      {isStarted && !isFinished && <QuizQuestions />}
      {isFinished && <Result />}
    </div>
  );
}
