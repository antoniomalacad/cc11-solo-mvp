const defaultState = {
  quizStart: false,
  recommended: null,
  questionBank: [],
  questionIndex: 0,
  question: null,
  options: [],
  responses: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        quizStart: action.start
      };
    case "ADD_RESPONSE":
      return { ...state, responses: [...state.responses, ...action.response] };
    case "ADD_QUESTIONS":
      return {
        ...state,
        questionBank: [...state.questionBank, ...action.questions]
      };
    case "CHANGE_QUESTION_INDEX":
      return {
        ...state,
        questionIndex: action.index
      };
    case "CHANGE_QUESTION":
      return {
        ...state,
        question: action.question
      };
    case "CHANGE_OPTIONS":
      return {
        ...state,
        options: [...action.options]
      };
    case "CHANGE_RESPONSE":
      return {
        ...state,
        responses: [...state.responses, action.selection]
      };
    default:
      return state;
  }
};

export default reducer;
