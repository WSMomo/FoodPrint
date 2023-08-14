import { quizData } from "../global/questions";

type Props = {
  progression: number;
};
export default function ProgressionBar({ progression }: Props) {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center">
      <div className="w-fit border border-secondary-color text-secondary-color my-4 p-2">
        {progression / (100 / quizData.length)}/{quizData.length}
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
