import React from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../redux/actions";

export default function Reset() {
  const dispatch = useDispatch();
  const resetForm = () => {
    dispatch(resetState());
  };
  return (
    <>
      <div className="reset">
        <button onClick={resetForm}>Reset</button>
      </div>
    </>
  );
}
