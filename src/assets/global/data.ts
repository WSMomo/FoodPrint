import { getQuizData } from "./questions";
const quizData = getQuizData("en");
export const QUIZ_LENGTH = quizData.length;
