import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsFinished } from "../redux/quizReducer";

import { quizData } from "../global/questions";
import Answers from "../components/Answers";
import NextButton from "../components/NextButton";
import Question from "../components/Question";
import Separator from "../components/Separator";
import ProgressionBar from "../components/ProgressionBar";

export default function QuizQuestions() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState<number>(0);
  const [hasClicked, setHasClicked] = useState<boolean>(true);
  const [progression, setProgression] = useState<number>(100 / quizData.length);
  const [answerIsClicked, setAnswerIsClicked] = useState<boolean>(false);

  function handleClick(): void {
    setIndex(index + 1);
    setHasClicked(!hasClicked);
    setProgression((progression) => progression + 100 / quizData.length);
    setAnswerIsClicked(!answerIsClicked);
  }

  return (
    <>
      <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
        <ProgressionBar progression={progression} />
        <Question quizData={quizData} index={index} />
        <Separator />
        <Answers
          quizData={quizData}
          index={index}
          setHasClicked={setHasClicked}
          answerIsClicked={answerIsClicked}
          setAnswerIsClicked={setAnswerIsClicked}
        />
        <Separator />
        <div className="flex justify-end w-2/4">
          {index === quizData.length - 1 ? (
            <NextButton
              disabled={hasClicked}
              onClick={() => dispatch(setIsFinished(true))}
            >
              END
            </NextButton>
          ) : (
            <NextButton disabled={hasClicked} onClick={handleClick}>
              NEXT
            </NextButton>
          )}
        </div>
      </div>
    </>
  );
}
