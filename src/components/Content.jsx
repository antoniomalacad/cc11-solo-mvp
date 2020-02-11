import React from "react";
import BodyHeader from "./BodyHeader";
import Start from "./Start";
import Choices from "./Choices";
import { useSelector, useDispatch } from "react-redux";

export default function Content() {
  const quizStart = useSelector(state => state.quizStart);

  return (
    <>
      <div className="Body">
        <BodyHeader />
        {quizStart === true ? <Choices /> : <Start />}
      </div>
    </>
  );
}
