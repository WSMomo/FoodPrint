import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuizReducerTypes {
  isStarted: boolean;
  isFinished: boolean;
  index: number;
}

const initialState: QuizReducerTypes = {
  isStarted: false,
  isFinished: false,
  index: 0,
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
  },
});

export const { setIsStarted, setIsFinished, setIndex } = quizSlice.actions;

export default quizSlice.reducer;
