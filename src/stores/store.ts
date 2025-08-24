import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { RequestReducer } from "@reducers/Request";
import { AvailableReducer } from "@reducers/Available";

const rootReducer = combineReducers({
  RequestReducer,
  AvailableReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']