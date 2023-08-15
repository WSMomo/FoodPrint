import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import QuizQuestions from "./QuizQuestions";
import Result from "./Result";
import Home from "./Home";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-main-color">
      {!isStarted && !isFinished && <Home />}
      {isStarted && !isFinished && <QuizQuestions />}
      {isFinished && <Result />}
    </div>
  );
}
