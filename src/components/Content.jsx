import React from "react";
import BodyHeader from "./BodyHeader";
import Choices from "./Choices";

export default function Content() {
  return (
    <>
      <div className="Body">
        <BodyHeader />
        <Choices />
      </div>
    </>
  );
}
