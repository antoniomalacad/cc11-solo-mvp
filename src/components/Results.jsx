import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecommended } from "../redux/actions";
import axios from "axios";
import "../App.css";

export default function Results() {
  const responses = useSelector(state => state.responses);
  const recommended = useSelector(state => state.recommended);

  const finalResponse = responses.slice(-1)[0];
  const dispatch = useDispatch();
  useEffect(() => {
    const pickRecommended = async () => {
      if (finalResponse.drink_id !== null) {
        await axios.get(`/api/menus/${finalResponse.drink_id}`).then(res => {
          const result = res.data[0];
          dispatch(addRecommended(result));
        });
      } else {
        dispatch(
          addRecommended({
            name: "Tea or another drink",
            description: "Coffee isn't for everyone and that's okay"
          })
        );
      }
    };
    pickRecommended();
  }, [dispatch, finalResponse]);

  const renderRecommended = () => {
    if (recommended !== null) {
      return (
        <>
          <div className="recommended">{recommended.name}</div>
          <div className="description">{recommended.description}</div>
        </>
      );
    }
  };
  return (
    <>
      <div className="results">
        Based on your input, we believe that you would enjoy:
        <div>{renderRecommended()}</div>
      </div>
    </>
  );
}
