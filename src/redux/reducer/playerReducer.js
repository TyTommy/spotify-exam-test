const intialState = {
  currentMusicUrl: "",
};

const playerReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_MUSIC":
      return {
        ...state,
        currentMusicUrl: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
