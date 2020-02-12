import React from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../redux/actions";
import "../App.css";

export default function Reset() {
  const dispatch = useDispatch();
  const resetForm = () => {
    dispatch(resetState());
  };
  return (
    <>
      <button className="reset" onClick={resetForm}>
        Reset
      </button>
    </>
  );
}
