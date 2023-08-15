import enQuizData from "../translations/questions_en.json";
import itQuizData from "../translations/questions_it.json";

export type answerAndQuestions = {
  question: string;
  options: string[];
  answer: number;
};

export function getQuizData(language: string): answerAndQuestions[] {
  switch (language) {
    case "en":
      return enQuizData;
    case "it":
      return itQuizData;
    default:
      return enQuizData;
  }
}
