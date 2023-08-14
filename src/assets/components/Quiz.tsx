import Answers from "./Answers";
import Button from "./Button";
import Question from "./Question";
import Separator from "./Separator";
import { quizData } from "../global/questions";
import { useState } from "react";
import ProgressionBar from "./ProgressionBar";

type Props = {
  setIsFinished: (arg: boolean) => void;
};

export default function Quiz({ setIsFinished }: Props) {
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
            <Button disabled={hasClicked} onClick={() => setIsFinished(true)}>
              END
            </Button>
          ) : (
            <Button disabled={hasClicked} onClick={handleClick}>
              NEXT
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
