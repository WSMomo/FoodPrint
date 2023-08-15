import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { QUIZ_LENGTH } from "../global/data";

export default function ProgressionBar() {
  const progression = useSelector((state: RootState) => state.quiz.progression);
  const index = useSelector((state: RootState) => state.quiz.index);
  return (
    <div className="w-5/6 flex flex-col items-center justify-center">
      <div className="w-fit border border-secondary-color text-secondary-color my-4 p-2">
        {index + 1}/{QUIZ_LENGTH}
      </div>
      <div className="w-4/5 bg-secondary-color border-secondary-color border-[1px] h-4">
        <div
          className={`h-full bg-main-color`}
          style={{ width: `${progression}%` }}
        ></div>
      </div>
    </div>
  );
}
