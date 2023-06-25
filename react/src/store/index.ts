import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appApi } from "./api";
import { appReducer, setAllAppState, setAppState } from "./slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(appApi.middleware);
  },
});

setupListeners(store.dispatch);
export { setAllAppState, setAppState };
export { useGetDataMutation } from "./api";
