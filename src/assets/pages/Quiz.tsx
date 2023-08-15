import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import QuizQuestions from "./QuizQuestions";
import Result from "./Result";
import Home from "./Home";
import Languages from "./Languages";

export default function Quiz() {
  const isStarted = useSelector((state: RootState) => state.quiz.isStarted);
  const isFinished = useSelector((state: RootState) => state.quiz.isFinished);
  const languagesSelected = useSelector(
    (state: RootState) => state.quiz.languagesSelected
  );
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-main-color">
      {!languagesSelected ? (
        <Languages />
      ) : (
        <>
          {!isStarted && !isFinished && <Home />}
          {isStarted && !isFinished && <QuizQuestions />}
          {isFinished && <Result />}
        </>
      )}
    </div>
  );
}
