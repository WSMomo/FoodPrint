import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../redux/quizReducer";
import { RootState } from "../redux/store";

import { resultsSentences } from "../global/results";
import { checkScoreResult } from "../global/utility";
import { QUIZ_LENGTH } from "../global/data";

import ActionButton from "./ActionButton";
import Accordion from "./Accordion";
import HomePageImage from "./HomePageImage";
import Separator from "./Separator";

export default function Hero() {
  const dispatch = useDispatch();

  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );

  const attempt = useSelector((state: RootState) => state.quiz.attempt);
  const scoreResult = checkScoreResult(highestScore);
  const titleByScore = resultsSentences[scoreResult].sentence;
  const descriptionByScore = resultsSentences[scoreResult].description;

  return (
    <>
      <h1 className="text-3xl">FoodPrint: The Sustainability Quiz </h1>
      <HomePageImage />
      {attempt > 0 ? (
        <Accordion title={titleByScore}>
          <div>
            {highestScore}/{QUIZ_LENGTH}
          </div>
          <div>{descriptionByScore}</div>
        </Accordion>
      ) : (
        ""
      )}
      <Separator />
      <p>
        This quiz will help you learn more about food and its impact on the
        environment and people.
      </p>
      <p className="m-4">
        To get started, click the <span className="font-semibold">"Start"</span>{" "}
        button.
      </p>
      <ActionButton handleClick={() => dispatch(startQuiz())}>
        Learn More About Food
      </ActionButton>
    </>
  );
}
