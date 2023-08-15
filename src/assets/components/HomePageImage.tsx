import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { checkScoreResult } from "../global/utility";
import { getResultsData, resultsSentencesType } from "../global/results";

export default function HomePageImage() {
  // LANGUAGE
  const language = useSelector((state: RootState) => state.quiz.language);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  //REDUX
  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  // FIND IMAGE PATH
  const scoreResult = checkScoreResult(highestScore);
  const imageByScore = resultsSentences[scoreResult].image;
  const homeImage = attempt > 0 ? imageByScore : "/img/farm.png";

  return <img className="w-24 md:w-40 m-4" src={homeImage} alt="Food Quiz" />;
}
