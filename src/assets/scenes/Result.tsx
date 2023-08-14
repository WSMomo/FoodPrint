import { resultsSentences } from "../global/results";
import Separator from "../components/Separator";
import ActionButton from "../components/ActionButton";

type Props = {
  setIsFinished: (arg: boolean) => void;
  setIsStarted: (arg: boolean) => void;
};

export default function Result({ setIsFinished, setIsStarted }: Props) {
  function handleRestart() {
    setIsFinished(false);
    setIsStarted(false);
  }

  return (
    <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
      <div>4/10</div>
      <Separator />
      <div className="flex flex-col text-center px-14">
        <h2 className="p-4 text-3xl">{resultsSentences["starter"].sentence}</h2>
        <p className="text-lg">{resultsSentences["starter"].description}</p>
      </div>
      <ActionButton handleClick={handleRestart}>Restart</ActionButton>
    </div>
  );
}
