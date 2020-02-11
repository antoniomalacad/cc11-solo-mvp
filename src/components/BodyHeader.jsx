import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuestion } from "../redux/actions";
// import axios from "axios";

export default function BodyHeader() {
  // let question = useSelector(state => state.question);
  const questionIndex = useSelector(state => state.questionIndex);
  const questionBank = useSelector(state => state.questionBank);
  const quizStart = useSelector(state => state.quizStart);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateQuestion = async () => {
      if (questionBank.length > 0) {
        questionBank.forEach(question => {
          if (question.id === questionIndex) {
            dispatch(changeQuestion(question));
          }
        });
      }
    };
    updateQuestion();
  }, [questionIndex, dispatch, quizStart]);

  let question = useSelector(state => state.question);
  const renderQuestion = () => {
    return <>{question.question}</>;
  };

  return (
    <>
      <div className="Body-header">
        {quizStart === true
          ? renderQuestion()
          : "To begin hit the start button!"}
      </div>
    </>
  );
}
