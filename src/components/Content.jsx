import React from "react";
import BodyHeader from "./BodyHeader";
import Start from "./Start";
import Choices from "./Choices";
import Results from "./Results";
import Reset from "./Reset";
import { useSelector } from "react-redux";

export default function Content() {
  const quizStart = useSelector(state => state.quizStart);
  const quizFinish = useSelector(state => state.quizFinish);

  return (
    <>
      <div className="Body">
        <BodyHeader />
        {quizStart === true ? <Choices /> : <Start />}
        {quizFinish === true ? <Results /> : <div />}
        <Reset />
      </div>
    </>
  );
}
