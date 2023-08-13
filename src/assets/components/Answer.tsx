import { useState } from "react";

type Props = {
  children: React.ReactNode;
  setHasClicked: (arg: boolean) => void;
  answerIsClicked: boolean;
  setAnswerIsClicked: (arg: boolean) => void;
};

export default function Answer({
  setHasClicked,
  children,
  answerIsClicked,
  setAnswerIsClicked,
}: Props) {
  const answerClicked = "bg-secondary-color text-main-color";

  function handleClick() {
    setAnswerIsClicked(true);
    setHasClicked(false);
  }

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 cursor-pointer ${
        answerIsClicked && answerClicked
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
