import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "../model/payload";
import { State } from "../model/state";

const appSlice = createSlice({
  name: "app",
  initialState: { value: new State() },
  reducers: {
    setAppState(state, action: PayloadAction<Payload>) {
      const key: keyof State = action.payload.key;
      state.value = {
        ...state.value,
        [key]: action.payload?.value,
      };
      return state;
    },
    setAllAppState(state, action: PayloadAction<State>) {
      state.value = action.payload as any;
      return state;
    },
  },
});

export const { setAllAppState, setAppState } = appSlice.actions;
export const appReducer = appSlice.reducer;
