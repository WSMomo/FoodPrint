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
}

const initialState: QuizReducerTypes = {
  isStarted: false,
  isFinished: false,
  index: 0,
  progression: progressionPercentage,
  answersClicked: false,
  score: 0,
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
  },
});

export const {
  setIsStarted,
  setIsFinished,
  setIndex,
  setProgression,
  setAnswersClicked,
  addCorrectAnswerToScore,
} = quizSlice.actions;

export default quizSlice.reducer;
