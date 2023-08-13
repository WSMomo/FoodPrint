import Answers from "./Answers";
import NextButton from "./NextButton";
import Question from "./Question";
import Separator from "./Separator";
import { quizData } from "../global/questions";

export default function Quiz() {
  return (
    <>
      <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
        <ProgressionBar />
        <Question quizData={quizData} />
        <Separator />
        <Answers quizData={quizData} />
        <Separator />
        <div className="flex justify-end w-2/4">
          <NextButton disabled={true} />
        </div>
      </div>
    </>
  );
}

function ProgressionBar() {
  return (
    <div className="w-4/5 bg-secondary-color border-secondary-color border-[1px] h-4">
      <div className="w-[5%] h-full bg-main-color"></div>
    </div>
  );
}
