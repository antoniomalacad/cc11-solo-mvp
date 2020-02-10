const defaultState = {
  startQuiz: false,
  recommended: [],
  questions: `To begin hit the start button!`,
  options: ["Start!"]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_RESPONSE":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
