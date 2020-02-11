import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestions,
  changeQuestionIndex,
  changeQuestion,
  changeOptions,
  changeResponse
} from "../redux/actions";
import axios from "axios";

export default function Choices() {
  const options = useSelector(state => state.options);
  const questionBank = useSelector(state => state.questionBank);
  const questionIndex = useSelector(state => state.questionIndex);
  const responses = useSelector(state => state.responses);
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

  const selectResponse = async e => {
    const selected = e.target.getAttribute("value");
    const newSelected = JSON.parse(selected);
    dispatch(changeResponse(newSelected));
    // await axios.post("/api/responses", newSelected);
    dispatch(changeQuestionIndex(newSelected.next_q));
  };

  const renderChoices = () => {
    return options.map(option => {
      return (
        <div className="choice" value={JSON.stringify(option)} key={option.id}>
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
