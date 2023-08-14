import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizReducerTypes {
  isStarted: boolean;
  isFinished: boolean;
}

const initialState: QuizReducerTypes = {
  isStarted: false,
  isFinished: false,
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
  },
});

export const { setIsStarted, setIsFinished } = quizSlice.actions;

export default quizSlice.reducer;
