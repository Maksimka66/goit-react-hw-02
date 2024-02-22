import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

import { useState } from "react";
import "./App.css";

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackType, setFeedbackType] = useState(0);
  const updateFeedback = () => {
    setFeedbackType(...reviews, feedbackType + 1);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback responses={reviews} />
    </>
  );
}

export default App;
