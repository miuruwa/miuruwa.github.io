import { request } from "@enums/request";


// @ts-expect-error // TODO: reducers/artworkReducer.js
const RequestReducer = (state = {}, action) => {
  if (!(Object.values(request).includes(action.type))) return state;

  // @ts-expect-error // TODO: Object undefined
  return {...state, [Object.entries(request).find((a) => a[1] === action.type)[0]]: action.payload};
};

export default RequestReducer;
