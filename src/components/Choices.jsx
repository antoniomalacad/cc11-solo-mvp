import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeQuestionIndex,
  changeOptions,
  changeResponse,
  finishQuiz,
  changeQuestion
} from "../redux/actions";
import axios from "axios";
import "../App.css";

export default function Choices() {
  const options = useSelector(state => state.options);
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
  }, [questionIndex, dispatch]);

  const selectResponse = async e => {
    const selected = e.target.getAttribute("value");
    const newSelected = JSON.parse(selected);
    dispatch(changeResponse(newSelected));
    // await axios.post("/api/responses", newSelected);
    if (newSelected.next_q !== null) {
      dispatch(changeQuestionIndex(newSelected.next_q));
    } else {
      dispatch(finishQuiz(true));
      dispatch(changeOptions([]));
      dispatch(changeQuestion({ question: "Your results are in!" }));
    }
  };

  const renderChoices = () => {
    return options.map(option => {
      return (
        <div
          className="choice"
          value={JSON.stringify(option)}
          key={option.id}
          onMouseEnter={highlight}
          onMouseLeave={unhighlight}
        >
          {option.option}
        </div>
      );
    });
  };

  const highlight = e => {
    e.target.style.background = "white";
  };

  const unhighlight = e => {
    e.target.style.background = "beige";
  };

  return (
    <>
      <div className="Body-choices" onClick={selectResponse}>
        {renderChoices()}
      </div>
    </>
  );
}
