import React from "react";
import { useDispatch } from "react-redux";
import { addQuestions, changeQuestionIndex, startQuiz } from "../redux/actions";
import axios from "axios";

export default function Choices() {
  const dispatch = useDispatch();

  const beginQuiz = async () => {
    await axios.get("/api/questions").then(res => {
      const questions = res.data;
      dispatch(addQuestions(questions));
      dispatch(changeQuestionIndex(1));
      dispatch(startQuiz(true));
    });
  };

  const renderStart = () => {
    return (
      <div className="choice" value={"Start"}>
        {"Start"}
      </div>
    );
  };

  return (
    <>
      <div className="Body-choices" onClick={beginQuiz}>
        {renderStart()}
      </div>
    </>
  );
}
