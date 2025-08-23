import { createStore } from 'redux';
import RequestReducer from '@reducers/Request';

const initialState = {
  progress: "sk",
  color: "nn",
  artwork: "bu",
  characterCount: 1,
  addBackground: false,
  specialRequest: false,
  commercialUseFee: false,
  rushFee: false,
  brief: "",
};

export const Request = createStore(RequestReducer, initialState);
