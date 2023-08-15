import Accordion from "./Accordion";

export default function Faq() {
  return (
    <>
      <Accordion title="How does the quiz work?">
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
      <Accordion title="How is my score calculated?">
        Your score is calculated based on the number of correct answers you
        have. Each correct answer is worth 1 point. The maximum score is 10
        points.
      </Accordion>
    </>
  );
}
