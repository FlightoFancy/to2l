import { configureStore } from "@reduxjs/toolkit";
import { LocoReducer } from "./ducks";

const defaultMiddlewareConfig = {
  serializableCheck: false,
};

export const store = configureStore({
  reducer: {
    locomotives: LocoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
