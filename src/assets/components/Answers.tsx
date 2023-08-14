import { answerAndQuestions } from "../global/questions";
import Answer from "./Answer";

type Props = {
  quizData: answerAndQuestions[];
  index: number;
  setHasClicked: (arg: boolean) => void;
  answerIsClicked: boolean;
  setAnswerIsClicked: (arg: boolean) => void;
};

export default function Answers({
  quizData,
  index,
  setHasClicked,
  answerIsClicked,
  setAnswerIsClicked,
}: Props) {
  return (
    <div className="w-5/6 md:w-2/3">
      <Answer
        setHasClicked={setHasClicked}
        answerIsClicked={answerIsClicked}
        setAnswerIsClicked={setAnswerIsClicked}
      >
        {quizData[index].options[0]}
      </Answer>
      <Answer
        setHasClicked={setHasClicked}
        answerIsClicked={answerIsClicked}
        setAnswerIsClicked={setAnswerIsClicked}
      >
        {quizData[index].options[1]}
      </Answer>
      <Answer
        setHasClicked={setHasClicked}
        answerIsClicked={answerIsClicked}
        setAnswerIsClicked={setAnswerIsClicked}
      >
        {quizData[index].options[2]}
      </Answer>
      <Answer
        setHasClicked={setHasClicked}
        answerIsClicked={answerIsClicked}
        setAnswerIsClicked={setAnswerIsClicked}
      >
        {quizData[index].options[3]}
      </Answer>
    </div>
  );
}
