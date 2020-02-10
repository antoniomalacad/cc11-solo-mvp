import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Choices() {
  const options = useSelector(state => state.options);
  useEffect(() => {}, []);
  const beginQuiz = () => {
    //API Call to Database to populate questions and choices state//
  };

  const renderChoices = () => {
    return options.map((option, index) => {
      return (
        <div className="choice" value={option} key={index}>
          {option}
        </div>
      );
    });
  };

  return (
    <>
      <div className="Body-choices" onClick={beginQuiz}>
        {renderChoices()}
      </div>
    </>
  );
}
