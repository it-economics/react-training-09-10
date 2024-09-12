import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

type HomeState = {
  name: string;
  counter: number;
};

const initialState: HomeState = {
  name: 'Foo Bar ABC',
  counter: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    incrementCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { updateName, incrementCounter } = homeSlice.actions;
const nameSelector = (state: RootState) => state.home.name;
const counterSelector = (state: RootState) => state.home.counter;
export const useName = () => useAppSelector(nameSelector);
export const useCounter = () => useAppSelector(counterSelector);
