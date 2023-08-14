import { useDispatch } from "react-redux";
import { setIsStarted } from "../redux/quizReducer";

import Accordion from "../components/Accordion";
import ActionButton from "../components/ActionButton";
import Separator from "../components/Separator";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="bg-main-color text-secondary-color w-4/5 md:w-3/5 max-w-screen-md min-h-fit p-4 flex flex-col items-center">
      <h1 className="text-2xl">Welcome to the food quiz!</h1>
      <Separator />
      <p className="text-center">
        This quiz will help you learn more about food and its impact on the
        environment and people.
      </p>
      <p className="m-4">
        To get started, click the <span className="font-semibold">"Start"</span>{" "}
        button.
      </p>
      <ActionButton handleClick={() => dispatch(setIsStarted(true))}>
        Start
      </ActionButton>
      <Separator />
      <Accordion title="How does the quiz work?">
        {" "}
        The quiz is made up of a series of multiple-choice questions. For each
        question, choose the option you think is correct. At the end of the
        quiz, you will receive a score. Your score will be used to determine
        your level of food knowledge.
      </Accordion>
      <Accordion title="Why take this quiz?">
        Taking this quiz will help you learn more about food and its impact on
        the environment and people. In addition, you will be able to share your
        score with your friends on social media.
      </Accordion>
    </div>
  );
}
