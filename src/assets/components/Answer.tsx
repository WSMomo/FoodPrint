import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  setHasClicked: (arg: boolean) => void;
  answerIsClicked: boolean;
  setAnswerIsClicked: (arg: boolean) => void;
};

const answerClicked: string = "bg-secondary-color text-main-color";

export default function Answer({
  setHasClicked,
  answerIsClicked,
  setAnswerIsClicked,
  children,
}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setAnswerIsClicked(true);
    setHasClicked(false);
    setIsClicked(true);
  }

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 cursor-pointer md:hover:opacity-70  ${
        isClicked && answerIsClicked && answerClicked
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
