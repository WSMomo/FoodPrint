import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUIZ_LENGTH } from "../global/data";

const progressionPercentage = 100 / QUIZ_LENGTH;

export interface QuizReducerTypes {
  isStarted: boolean;
  isFinished: boolean;
  index: number;
  progression: number;
  answersClicked: boolean;
  score: number;
  actuallyAnswered: boolean;
}

const initialState: QuizReducerTypes = {
  isStarted: false,
  isFinished: false,
  index: 0,
  progression: progressionPercentage,
  answersClicked: false,
  score: 0,
  actuallyAnswered: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setIsStarted: (state, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload;
    },
    setIsFinished: (state, action: PayloadAction<boolean>) => {
      state.isFinished = action.payload;
    },
    setIndex: (state) => {
      state.index = state.index + 1;
    },
    setProgression: (state) => {
      state.progression = state.progression + progressionPercentage;
    },
    setAnswersClicked: (state, action: PayloadAction<boolean>) => {
      state.answersClicked = action.payload;
    },
    addCorrectAnswerToScore: (state) => {
      state.score = state.score + 1;
    },
    restart: (state) => {
      return { ...initialState, score: state.score };
    },
    setActuallyAnswer: (state) => {
      state.actuallyAnswered = !state.actuallyAnswered;
    },
    nextQuestion: (state) => {
      state.index = state.index + 1;
      state.progression = state.progression + progressionPercentage;
      state.actuallyAnswered = !state.actuallyAnswered;
      state.answersClicked = !state.answersClicked;
    },
  },
});

export const {
  setIsStarted,
  setIsFinished,
  setIndex,
  setProgression,
  setAnswersClicked,
  addCorrectAnswerToScore,
  restart,
  setActuallyAnswer,
  nextQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
