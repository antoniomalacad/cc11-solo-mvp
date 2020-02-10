const defaultState = {
  recommended: []
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
