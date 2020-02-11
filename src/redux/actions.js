export function addResponse(response) {
  return {
    type: "ADD_RESPONSE",
    response: response
  };
}

export function startQuiz(start) {
  return {
    type: "START_QUIZ",
    start: start
  };
}

export function addQuestions(questions) {
  return {
    type: "ADD_QUESTIONS",
    questions: questions
  };
}

export function changeQuestionIndex(index) {
  return {
    type: "CHANGE_QUESTION_INDEX",
    index: index
  };
}

export function changeQuestion(question) {
  return {
    type: "CHANGE_QUESTION",
    question: question
  };
}

export function changeOptions(options) {
  return {
    type: "CHANGE_OPTIONS",
    options: options
  };
}

export function changeResponse(selection) {
  return {
    type: "CHANGE_RESPONSE",
    selection: selection
  };
}
