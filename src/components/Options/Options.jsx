import { useState } from "react";
import styles from "./Options.module.css";

const Options = ({ updateFeedback }) => {
  const [feedbackType, setFeedbackType] = useState(0);
  (feedbackType) => {
    setFeedbackType(feedbackType + 1);
  };
  return (
    <div>
      <button onClick={() => updateFeedback(feedbackType)}>Good</button>
      <button onClick={() => updateFeedback(feedbackType)}>Neutral</button>
      <button onClick={() => updateFeedback(feedbackType)}>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default Options;
