import Answers from "../components/Answers";
import Question from "../components/Question";
import Separator from "../components/Separator";
import ProgressionBar from "../components/ProgressionBar";
import NextOrEndButtons from "../components/NextOrEndButtons";

export default function QuizQuestions() {
  return (
    <>
      <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center justify-center">
        <ProgressionBar />
        <Question />
        <Separator />
        <Answers />
        <Separator />
        <NextOrEndButtons />
      </div>
    </>
  );
}
