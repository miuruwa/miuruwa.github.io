// reducers/artworkReducer.js
const artworkReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.payload
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload
      };
    case 'SET_ARTWORK_TYPE':
      return {
        ...state,
        artwork: action.payload
      };
    default:
      return state;
  }
};

export default artworkReducer;
