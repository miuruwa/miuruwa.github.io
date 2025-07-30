// reducers/artworkReducer.js
const RequestReducer = (state = {}, action) => {
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
    case 'SET_ARTWORK':
      return {
        ...state,
        artwork: action.payload
      };
    case 'SET_CHARACTERCOUNT':
      return {
        ...state,
        characterCount: action.payload
      }
    case 'SET_ADDBACKGROUND':
      return {
        ...state,
        addBackground: action.payload
      }
    case 'SET_SPECIALREQUEST':
      return {
        ...state,
        specialRequest: action.payload
      }
    case 'SET_COMMERCIALUSEFEE':
      return {
        ...state,
        commercialUseFee: action.payload
      }
    case 'SET_RUSHFEE':
      return {
        ...state,
        rushFee: action.payload
      }
    case 'SET_BRIEF':
      return {
        ...state,
        brief: action.payload
      }
    default:
      return state;
  }
};

export default RequestReducer;
