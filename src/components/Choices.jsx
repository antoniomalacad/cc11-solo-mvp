import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestions,
  changeQuestionIndex,
  changeQuestion,
  changeOptions
} from "../redux/actions";
import axios from "axios";

export default function Choices() {
  const options = useSelector(state => state.options);
  const questionBank = useSelector(state => state.questionBank);
  const questionIndex = useSelector(state => state.questionIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateChoices = async () => {
      await axios.get(`/api/options/${questionIndex}`).then(res => {
        const options = res.data;
        dispatch(changeOptions(options));
      });
    };
    updateChoices();
  }, [questionIndex]);

  const selectResponse = async () => {
    // await axios.get("/api/questions").then(res => {
    //   const questions = res.data;
    //   dispatch(addQuestions(questions));
    //   dispatch(changeQuestionIndex(1));
    //   console.log(questionBank);
    //   console.log(questionIndex);
    // });
  };

  const renderChoices = () => {
    return options.map(option => {
      return (
        <div className="choice" value={option.option} key={option.id}>
          {option.option}
        </div>
      );
    });
  };

  return (
    <>
      <div className="Body-choices" onClick={selectResponse}>
        {renderChoices()}
      </div>
    </>
  );
}
