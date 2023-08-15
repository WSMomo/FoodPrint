import { useSelector } from "react-redux";
import FarmPic from "../img/farm.png";
import { RootState } from "../redux/store";
import { checkScoreResult } from "../global/utility";
import { resultsSentences } from "../global/results";

export default function HomePageImage() {
  const highestScore = useSelector(
    (state: RootState) => state.quiz.highestScore
  );
  const attempt = useSelector((state: RootState) => state.quiz.attempt);

  const scoreResult = checkScoreResult(highestScore);
  const imageByScore = resultsSentences[scoreResult].image;
  const homeImage = attempt > 0 ? imageByScore : FarmPic;

  return <img className="w-1/5 m-4" src={homeImage} alt="Food Quiz" />;
}
