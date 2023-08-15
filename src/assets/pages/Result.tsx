import { resultsSentences } from "../global/results";
import Separator from "../components/Separator";
import ActionButton from "../components/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../redux/quizReducer";
import { RootState } from "../redux/store";
import { QUIZ_LENGTH } from "../global/data";
import { checkScoreResult } from "../global/utility";
import Accordion from "../components/Accordion";
import WrongAnswers from "../components/WrongAnswers";

export default function Result() {
  const score = useSelector((state: RootState) => state.quiz.score);
  const wrongAnswers = useSelector(
    (state: RootState) => state.quiz.wrongAnswers
  );
  const scoreResult = checkScoreResult(score);

  const dispatch = useDispatch();
  console.log(typeof wrongAnswers);
  return (
    <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
      <div>
        {score}/{QUIZ_LENGTH}
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-center text-center px-14">
        <h2 className="p-4 text-3xl">
          {resultsSentences[scoreResult].sentence}
        </h2>
        <img
          className="w-1/6 m-4"
          src={resultsSentences[scoreResult].image}
          alt={resultsSentences[scoreResult].sentence}
        />
        <p className="text-lg">{resultsSentences[scoreResult].description}</p>
      </div>
      <ActionButton handleClick={() => dispatch(restart())}>
        Restart
      </ActionButton>
      {wrongAnswers.length > 0 && (
        <>
          <Separator />
          <Accordion title="See your wrong answers">
            {wrongAnswers.map((questionNumber) => (
              <WrongAnswers
                questionNumber={questionNumber}
                key={questionNumber}
              />
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
}
