import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAnswersClicked } from "../redux/quizReducer";
type Props = {
  children: React.ReactNode;
};

const answerClicked: string = "bg-secondary-color text-main-color";

export default function Answer({ children }: Props) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    dispatch(setAnswersClicked(true));
  }

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <div
      className={`border-secondary-color border-[1px] p-2 m-2 cursor-pointer md:hover:opacity-70  ${
        isClicked && answerClicked
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
