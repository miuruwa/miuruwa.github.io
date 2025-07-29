import { createStore } from 'redux';
import artworkReducer from '@reducers/BasePrice';

const initialState = {
  progress: "sk",
  color: "nn",
  artwork: "bu"
};

const store = createStore(artworkReducer, initialState);

export default store;
