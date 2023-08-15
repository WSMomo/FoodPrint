import { useSelector } from "react-redux";
import FarmPic from "../../../public/img/farm.png";
import { RootState } from "../redux/store";
import { checkScoreResult } from "../global/utility";
import { getResultsData, resultsSentencesType } from "../global/results";
export default function HomePageImage() {
  const language = useSelector((state: RootState) => state.quiz.language);
  const resultsSentences: resultsSentencesType = getResultsData(language);

  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  const scoreResult = checkScoreResult(highestScore);
  const imageByScore = resultsSentences[scoreResult].image;
  const homeImage = attempt > 0 ? imageByScore : FarmPic;

  return <img className="w-24 md:w-40 m-4" src={homeImage} alt="Food Quiz" />;
}
