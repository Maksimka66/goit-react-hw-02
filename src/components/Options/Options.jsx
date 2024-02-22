// import { useState } from "react";
// import styles from "./Options.module.css";

const Options = (updateFeedback) => {
  // const [feedbackType, setFeedbackType] = useState(0);
  return (
    <div>
      <button onClick={updateFeedback}>Good</button>
      <button onClick={updateFeedback}>Neutral</button>
      <button onClick={updateFeedback}>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default Options;
