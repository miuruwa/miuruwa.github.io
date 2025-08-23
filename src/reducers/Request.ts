import { request } from "@enums/request";

// reducers/artworkReducer.js
// @ts-ignore
const RequestReducer = (state = {}, action) => {
  if (!(Object.values(request).includes(action.type))) return state;

  // @ts-ignore
  return {...state, [Object.entries(request).find((a) => a[1] === action.type)[0]]: action.payload};
};

export default RequestReducer;
