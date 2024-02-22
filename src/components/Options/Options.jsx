// import { useState } from "react";
// import styles from "./Options.module.css";

const Options = ({ updateFeedback, calcTotal, removeFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {calcTotal ? <button onClick={removeFeedback}>Reset</button> : false}
    </div>
  );
};

export default Options;
