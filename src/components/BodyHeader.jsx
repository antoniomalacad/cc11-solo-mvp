import React from "react";
import { useSelector } from "react-redux";

export default function BodyHeader() {
  const questions = useSelector(state => state.questions);
  return (
    <>
      <div className="Body-header">{questions}</div>
    </>
  );
}
